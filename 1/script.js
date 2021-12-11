function sequence(start = 0, step = 1) {
            let callNumber = start;
            return function () {
                let returnValue = callNumber;
                callNumber += step;
                return returnValue;
            }
        }

        let generator = sequence(10, 3);

        console.log(generator());
        console.log(generator());
        console.log(generator());
        console.log(generator());

        let generator2 = sequence();

        console.log(generator2());
        console.log(generator2());
        console.log(generator2());
        console.log(generator2());