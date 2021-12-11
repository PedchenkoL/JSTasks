function partialAny(func, ...args) {
            var args = Array.from(arguments);
            args.splice(0, 1);
            return function () {
                var arrInside = Array.from(arguments);
                var j = 0;
                outer: for (i = 0; i < args.length; i++) {
                    if (args[i] == undefined) {
                        while (j < arrInside.length) {
                            args = args.fill(arrInside[j], i, i + 1);
                            j++;
                            continue outer;
                        };
                    };
                };
                return func.apply(this, args);
            };
        };


        function test(a, b, c, d, e) {
            return "a=" + a + ", b=" + b + ", c=" + c + ", d=" + d + ", e=" + e;
        }

        var test1_3 = partialAny(test, 1, undefined, 3, 88, undefined);
        console.log(test1_3(57, 15, 33));