const TOPPINGS = [
            { name: 'MAYO', cost: 20, calories: 5 },
            { name: 'SPICE', cost: 15, calories: 0 },
        ];

        class Hamburger {
            constructor(size, stuffing) {
                console.log(arguments);
                if (!humburgerConst[size]) {
                    this.HamburgerException()
                }
                if (!humburgerConst[stuffing]) {
                    this.HamburgerException()
                }

                size = humburgerConst[size];
                stuffing = humburgerConst[stuffing];

                this.calories = size.calories;
                this.coast = size.coast;
                this.stuffingS = stuffing.calories;
                this.stuffingC = stuffing.coast;
                this.cache = [];
            }

            existTopping(topping) {
                let test = false;
                this.cache.forEach(function (item, i, arr) {
                    // console.log(item)
                    if (item.name === topping) {
                        test = true;
                    }
                });
                return !test;
            }

            addTopping(topping) {
                try {
                    const toppingInMenu = TOPPINGS.find(function (value) {
                        return value.name === topping;
                    });
                    if (toppingInMenu && this.existTopping(topping)) {
                        this.cache.push(toppingInMenu);
                    }
                    else {
                        throw Error('Not exits')
                    }
                } catch (error) {
                    console.error(error)
                }
            }

            removeTopping(remTopping) {
                for (let i = 0; i < TOPPINGS.length; i++) {
                    for (key in TOPPINGS[i]) {
                        if (TOPPINGS[i][key] === remTopping) {
                            for (key in TOPPINGS[i]) {
                                TOPPINGS[i][key] = 0
                            }
                        }
                    }
                }
            }

            getSize() {
                return this.calories
            }

            calculateCalories() {
                let totalCalories = 0;

                this.cache.forEach(function (item, i, arr) {
                    totalCalories += item.calories;
                });

                return totalCalories + this.calories + this.stuffingS
            }

            calculatePrice() {
                let totalCalories = 0;

                this.cache.forEach(function (item, i, arr) {
                    totalCalories += item.cost;
                });

                return totalCalories + this.coast + this.stuffingC
            }

            HamburgerException() {
                throw new Error('error input text');
            }

        }

        Hamburger.SIZE_SMALL = 'size_small';
        Hamburger.SIZE_LARGE = 'size_large';

        Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
        Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
        Hamburger.STUFFING_POTATO = 'STUFFING_POTATO';

        Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
        Hamburger.TOPPING_MAYO = 'TOPPING_MAYO';

        const humburgerConst = {
            [Hamburger.SIZE_SMALL]: { calories: 20, coast: 50 },
            [Hamburger.SIZE_LARGE]: { calories: 40, coast: 100 },

            [Hamburger.STUFFING_CHEESE]: { calories: 20, coast: 10 },
            [Hamburger.STUFFING_SALAD]: { calories: 5, coast: 20 },
            [Hamburger.STUFFING_POTATO]: { calories: 10, coast: 15 },

            [Hamburger.TOPPING_SPICE]: { calories: 15, coast: 0 },
            [Hamburger.TOPPING_MAYO]: { calories: 20, coast: 5 }
        };

        let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
        hamburger.addTopping('MAYO');
        hamburger.addTopping('SPICE');
        // hamburger.addTopping('SPICE');
        console.log(hamburger.cache);
        // hamburger.removeTopping('MAYO');
        console.log("Is hamburger large: %s", hamburger.getSize() === humburgerConst.size_small.calories);

        console.log("this is total obj", hamburger);
        console.log("Calories: " + hamburger.calculateCalories());
        console.log("Price: " + hamburger.calculatePrice());
        console.log("Size: " + hamburger.getSize());