
/*1: implement js array filter function*/
Array.prototype.filter = function(fn){
    return fn.time>1000;
};
/*2: implement js array map function*/
Array.prototype.map = function(fn){
    return fn.Time*3600;
};
/*3: implement js array reduce function*/
Array.prototype.reduce = function(fn){
    return fn.Time;
};
/*4: implement js debounce function*/
function debouce(fn, wait) {
    let deboun;
    const context = this;
    return function(){
        
        const args = arguments;
        clearTimeout(deboun);
        deboun = setTimeout(() => fn.apply(context, args), wait);
    }
}
/*5: implement js throttle function*/
function throttle(fn, limit){
    let thro;
    const context = this;
    return function(){
        const args = arguments;
        
        if(!thro){
            fn.apply(context, args);
            thro = true;
            setTimeout(()=>thro = false, limit);
        }
    }
}
/*6: implement js bind function*/
var time = {
    t : 123
}
Function.prototype.bind = function(){
    var f = this;
    return function(){
        return f.t;
    }
};
/*7: given an array and print output data at schedule
Let input = [{ Value: "a",Time: 2000 },
             { Value: "b",Time: 1000 },
             { Value: "c",Time: 3000 },
    ];
We need to output ‘a’ after 2 seconds, putput ‘b’ 1 second after ‘a’, and output ‘c’ 3
seconds after ‘b’
for example we start at 10:00am
10:00:02 -> ‘a’
10:00:03 -> ‘b’
10:00:06 -> ‘c’
*/
let input = [
    { Value: "a", Time: 2000 },
    { Value: "b", Time: 1000 },
    { Value: "c", Time: 3000 },
    { Value: "d", Time: 1200 },
    { Value: "e", Time: 3500 },
    { Value: "f", Time: 3600 }
];

var i = 0;
function printTasks(list){
    if(i < list.length){
        setTimeout(function(){
            console.log(list[i].Value);
            i+=1;
            printTasks(list);
        }, list[i].Time);
    }
}
printTasks(input);