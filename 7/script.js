window.x = 1;
        var ctx = { x: 2 };

        function testThis(a) { console.log("x=" + this.x + ", a=" + a); }
        function bind(func, obj) {
            return testThis.bind(obj);
        }
        console.log(testThis(100)); // x=1, a=100
        var boundFunction = bind(testThis, ctx);
        console.log(boundFunction(100)); // x=2, a= 100s