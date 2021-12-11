function map(fn, array) {
            var arrayLength = array.Length;
            var newArray = [];
            for (i = 0; i < arrayLength; i++) {
                newArray[i] = fn(array[i]);
            }
            return newArray;
        }

        function square(x) { return x * x; } // возведение в квадрат
        console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
        console.log(map(square, [])); // []