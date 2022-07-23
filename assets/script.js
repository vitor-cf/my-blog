

function map (f,a) {
    var result = []; // Cria uma nova array 
    var i; // poderia ser inserido no for 
    // for(var i = 0; != a.length ; i++)

    for(i = 0; i != a.length; i++) {
        result[i] = f(a[i]);

        return result;
    }
} 

map (function(x) {
    return x*x*x, [0,1,2,5,10]
}); 

console.log(result)