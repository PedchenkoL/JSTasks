function clone(object) {
            var clone = new object.constructor;

            for (property in object) {
                clone[property] = object[property];
            }

            return clone;
        }

        var a = { x: 1, y: 2, z: [1, 2, 3] };
        var b = clone(a);
        b.x = 10;
        console.log(a.x);

        b.z.push(4);
        console.log(a.z);

        var c = new Date(2014, 1, 1);
        var d = clone(c);
        d.setFullYear(2015);
        console.log(c.getFullYear());