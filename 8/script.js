var characters = [
            { 'name': 'barney', 'age': 36 },
            { 'name': 'fred', 'age': 40 }
        ];

        function pluck(obj, field) {
            var mass = [];
            var i = 0;
            for (var i = 0; i < obj.length; i++) {
                mass.push(obj[i][field])
            }
            return mass;
        }
        console.log(pluck(characters, 'name')); // [‘barney’, ‘fred’]