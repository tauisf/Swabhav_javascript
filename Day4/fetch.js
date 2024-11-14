//GET
// function myAxios(method,url,body=null){
//     return fetch(url).then((res)=>{
//      return (res.json());
     
//     })
//  }
//  const url ="https://jsonplaceholder.typicode.com/users"
//  myAxios("GET",url).then((res)=>{
//      console.log(res);
     
//  })
 
 //POST
 function myAxios(method,url,body=null){
     return fetch(url,{
         method:method,
         body:JSON.stringify(body)
     }).then((res)=>{
      return res.json()
     })
  }
  const url1 ="https://jsonplaceholder.typicode.com/users"
  myAxios("POST",url1,{name:"Ram",age:"24"}).then((res)=>{
      console.log(res);
      
  })