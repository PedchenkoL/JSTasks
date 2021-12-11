function ElectricalNetwork(elements) {
            if (Array.isArray(elements)) {
                this.elements = elements;
            } else {
                throw new TypeError("elements must be an array");
            }
        }


        function Electrostation(power) {
            if (power >= 1 * Math.pow(10, 6) && power <= 100 * Math.pow(10, 6)) {
                this.power = power;
                this.nightpower = power;
            } else {
                throw new RangeError("power must be in range from 1 MW to 100 MW");
            }
        }

        Electrostation.prototype.getPower = function () {
            return this.power;
        }

        Electrostation.prototype.getPowerAtNight = function () {
            return this.nightpower;
        }


        function SolarPanele(power) {
            if (power >= 1 * Math.pow(10, 6) && power <= 5 * Math.pow(10, 6)) {
                this.power = power;
            } else {
                throw new RangeError("power must be in range from 1 MW to 5 MW")
            }
        }

        SolarPanele.prototype.nightpower = 0;

        SolarPanele.prototype.getPower = function () {
            return this.power;
        }

        SolarPanele.prototype.getPowerAtNight = function () {
            return this.nightpower;
        }


        function someTypeOfSolarPanel() {
            this.power = 1 * Math.pow(10, 6);
        }

        someTypeOfSolarPanel.prototype = Object.create(SolarPanele.prototype);
        someTypeOfSolarPanel.prototype.constructor = someTypeOfSolarPanel;


        function anotherTypeOfSolarPanel() {
            this.power = 2 * Math.pow(10, 6);
        }

        anotherTypeOfSolarPanel.prototype = Object.create(SolarPanele.prototype);
        anotherTypeOfSolarPanel.prototype.constructor = anotherTypeOfSolarPanel;


        function House(apartments) {
            if (Array.isArray(apartments)) {
                if (apartments.length >= 1 || apartments.length <= 400) {
                    this.apartments = apartments;
                } else {
                    throw new RangeError("apartments count must be from 1 to 400");
                }
            } else {
                throw new TypeError("apartments must be an array");
            }

            this.power = 0;
            this.nightpower = 0;
        }

        House.prototype.getPower = function () {
            for (var apartment in apartments) {
                this.power += apartments[apartment]['power'];
            }

            return this.power;
        }

        House.prototype.getPowerAtNight = function () {
            for (var apartment in apartments) {
                this.nightpower += apartments[apartment]['nightpower'];
            }

            return this.nightpower;
        }



        function Apartment() {
            this.power = -5 * Math.pow(10, 3);
            this.nightpower = -1 * Math.pow(10, 3);
        }


        function PowerLine(power, price) {
            this.power = power;
            this.price = price;
        }


        function Counter() {

        }

        Counter.countPowerAt24Hours = function (electricalnetwork) {
            var power = 0;

            for (var element in electricalnetwork.elements) {
                if (electricalnetwork.elements[element] instanceof PowerLine != true) {
                    power += electricalnetwork.elements[element].getPower();
                    power += electricalnetwork.elements[element].getPowerAtNight();
                }
            }

            return power;
        }

        Counter.countBalance = function (electricalnetwork) {
            power = Counter.countPowerAt24Hours(electricalnetwork);

            var price = 0;

            for (var element in electricalnetwork.elements) {
                if (electricalnetwork.elements[element] instanceof PowerLine) {
                    var balance = 0;

                    if (power > 0) {
                        balance = power - electricalnetwork.elements[element].power;

                        if (balance < 0) {
                            price += power / Math.pow(10, 6) * electricalnetwork.elements[element].price;
                            power = 0;
                        } else if (balance > 0) {
                            price += (power - balance) * electricalnetwork[element].price;
                            power = balance;
                        }
                    } else if (power < 0) {
                        balance = electricalnetwork.elements[element].power + power;

                        if (balance > 0) {
                            price += power / Math.pow(10, 6) * electricalnetwork.elements[element].price;
                            power = 0;
                        } else if (balance < 0) {
                            price += (power - balance) / Math.pow(10, 6) * electricalnetwork.elements[element].price;
                            power = balance;
                        }
                    } else if (power == 0) {
                        continue;
                    }

                    electricalnetwork.elements[element].power -= Math.abs(balance);
                }
            }

            return price;
        }

        apartments = [];

        for (var i = 0; i < 400; i++) {
            apartments[i] = new Apartment();
        }

        var electricalnetwork = new ElectricalNetwork([
            new Electrostation(1 * Math.pow(10, 6)),
            new House(apartments),
            new House(apartments),
            new House(apartments),
            new SolarPanele(1 * Math.pow(10, 6)),
            new SolarPanele(3 * Math.pow(10, 6)),
            new SolarPanele(5 * Math.pow(10, 6)),
            new PowerLine(5 * Math.pow(10, 6), 1000),
            new PowerLine(15 * Math.pow(10, 6), 500)
        ]);

        console.log("Price difference from sale: " + Counter.countBalance(electricalnetwork));