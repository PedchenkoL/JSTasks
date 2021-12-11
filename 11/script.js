function topCities(cities, n) {
            var array = [];

            for (var city in cities) {
                array[city] = cities[city];
            }

            array.sort(function (a, b) {
                if (a['population'] == b['population']) return 0;

                return a['population'] < b['population'] ? 1 : -1;
            });

            var a = [];

            for (var i = 0; i < n; i++) {
                a[i] = array[i];
            }

            return a;
        }

        var cities = [
            { name: "Melbourne", population: 4650000 },
            { name: "Sydney", population: 5000500 },
            { name: "Karachi", population: 24300000 },
            { name: "Seoul", population: 25514000 },
            { name: "Hong Kong", population: 7298600 },
            { name: "Bogotá", population: 7878783 },
            { name: "Guadalajara", population: 4796050 },
            { name: "Mexico City", population: 21339781 },
            { name: "Monterrey", population: 4477614 },
            { name: "Lima", population: 9886647 }
        ];

        console.log(topCities(cities, 3));