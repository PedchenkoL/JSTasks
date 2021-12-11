var input = [1, 2, 3, 4, 5, 6];
        console.log(filter(input)); // [2, 4, 6]

        function filter(arr) {
            return arr.filter((item) => {
                return item % 2 == 0
            })
        }