var compose = function(functions) {
    return function(x) {
        let res = x;
        for (let i = functions.length -1 ; i >= 0 ; i--){
            res = functions[i](res)
        }
        return res
    }
};
functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
let outputfn = compose(functions)
console.log(outputfn(x))