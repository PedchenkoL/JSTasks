function deepClone(object) {
            var clone = new object.constructor;

            for (property in object) {
                clone[property] = deepClone(object[property]);
            }

            return clone;
        }

        var a = { x: 1, y: 2, z: [1, 2, 3], w: new Date(2014, 1, 1, 12, 0, 0) };
        var b = deepClone(a);
        b.x = 10;
        console.log(a.x);

        b.z.push(4);
        console.log(a.z); // [1, 2, 3]

        b.w.setFullYear(2015);
        console.log(a.w.getFullYear());