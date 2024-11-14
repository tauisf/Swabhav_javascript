
// // problem =>> Stop the Ui Until the btn 1 operation is not done
// let btn1 = document.getElementById('btn1')
// btn1.addEventListener('click',()=>{
//     let result = 0 ;
//     for (let index = 0; index < 10000000000; index++) {
//         result =+ index;
        
//     }
//     document.getElementById('output').innerHTML = result

// })

// let btn2 = document.getElementById('btn2')
// btn2.addEventListener('click',()=>{
//     document.getElementById('Hi').innerHTML += "Hello"
// })

//===========================================================================

// //Solution===>> Use Woker class to do the complex work like a thread (Parallel working)===========
let btn1 = document.getElementById('btn1')
btn1.addEventListener('click',()=>{
    const worker =  new Worker("Worker.js")
    worker.postMessage("Start Worker ")
   worker.onmessage = (e)=>{
    document.getElementById('output').innerHTML = e.data
   }
   

})

let btn2 = document.getElementById('btn2')
btn2.addEventListener('click',()=>{
    document.getElementById('Hi').innerHTML += "Hello !  "
})