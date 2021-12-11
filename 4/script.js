fmap = function (a, gen) {
            return function () {
                var argsCount = arguments.length;
                var newArray = [];
                for (i = 0; i < argsCount; i++) {
                    newArray[i] = arguments[i];
                }
                x = a(gen.apply(null, newArray));
                return x;
            }
        }

        var gen = sequence(1, 1);
        function square(x) { return x * x; }
        var squareGen = fmap(square, gen);

        console.log(squareGen()); // 1
        console.log(squareGen()); // 4
        console.log(squareGen()); // 9
        console.log(squareGen()); // 16