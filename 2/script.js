function take(fn, count) {
            let array = [];
            for (i = 0; i < count; i++) {
                array[i] = fn();
            }
            return array;
        }

        let gen2 = sequence(0, 2);
        console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]