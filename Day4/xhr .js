
// function myfunction(method, url, body= null){
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest()

//         xhr.open(method,url)
        
//         // xhr.onload=()=>{
//         //     console.log (JSON.parse(xhr.response));
            
//         // }
        
//         xhr.addEventListener("load",()=>{
//             if(xhr.status<=400){
//                  resolve(JSON.parse(xhr.response));
//              } else {
//                 reject(JSON.parse(xhr.response));
//              }

            
//         })
        
//         xhr.send(JSON.stringify(body))
        
//     })

// }

// const url = "https://jsonplaceholder.typicode.com/users"
// myfunction("POST",url,{
//         name : "Tausif",
//         age : "23"
// }
// ).then((response)=>{
//     console.log(response);
    
// }).catch((error)=>{
// console.log(error);

// })


//============todos==============================================
// function myfunction2(method, url, body= null){
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest()

//         xhr.open(method,url)
        
//         // xhr.onload=()=>{
//         //     console.log (JSON.parse(xhr.response));
            
//         // }
        
//         xhr.addEventListener("load",()=>{
//             if(xhr.status<=400){
//                  resolve(JSON.parse(xhr.response));
//              } else {
//                 reject(JSON.parse(xhr.response));
//              }

            
//         })
        
//         xhr.send(JSON.stringify(body))
        
//     })

// }

// const url = "https://jsonplaceholder.typicode.com/todos"
// myfunction2("POST",url,{
//         userId: "Tausif",
//         id : "23"
// }
// ).then((response)=>{
//     console.log(response);
    
// }).catch((error)=>{
// console.log(error);

// })