
// // A clouser return a function  with it lexical envionment
// function  myfunction(){
//     let message =  "Hello"
//    function  sayHello(){
//         console.log(message); // this is a clouser
        
//     }
//     message = "Weclome"
//     return sayHello
// }

// let c = myfunction()
// c()

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12