function whatIsType(variable) {
            var type = Object.prototype.toString.call(variable);

            switch (type) {
                case '[object Object]':
                    return "Object";
                    break;

                case '[object Function]':
                    return "Function";
                    break;

                case '[object Date]':
                    return "Date";
                    break;

                case '[object Error]':
                    return "Error";
                    break;

                case '[object RegExp]':
                    return "RegExp";
                    break;

                case '[object Array]':
                    return "Array";
                    break;

                case '[object String]':
                    return "String";
                    break;

                case '[object Number]':
                    return "Number";
                    break;

                case '[object Boolean]':
                    return "Boolean";
                    break;

                case '[object Null]':
                    return "Null";
                    break;

                case '[object Undefined]':
                    return "Undefined";
                    break;

                default:
                    return "Array-like"
                    break;
            }
        }

        console.log(whatIsType()); //Undefind
        console.log(whatIsType(true));
        console.log(whatIsType(null));
        console.log(whatIsType(1));
        console.log(whatIsType("String"));
        console.log(whatIsType(function () { }));
        console.log(whatIsType([]));
        console.log(whatIsType(new Object));