

// const login=(email)=>{
//     return new Promise((resolve,reject)=>{

//     setTimeout(() => {
//         if(email !==  null){
//             resolve(email)
//           }else{
//             reject("EMAIL IS NOT VALID")
//           }
        

//     }, 2000);
   
//     })
// }

// const getvideo=(email)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(email!==null){
//                 resolve(["video1","video2"])
//             }else{
//                 reject("Can't load  video")
//             }
//         }, 2000);
        
//     })
// }

// const getActor=(video)=>{
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             if(video!==null){
//                 resolve("Salman Khan")
//             }else{
//                 reject("no Actor For the video")
//             }
//         }, 200);
       
//     })
// }
//================ using then and catch==========================
// login("email@gmail.com").then((email)=>{
//     console.log(email);
//     return getvideo(null)
// }).then((videos)=>{
//     console.log(videos);
//     return getActor(videos)
// }).then((ActorName)=>{
//     console.log(ActorName)
// }).catch((msg)=>{
//     console.log(msg);
// }).catch((msg)=>{
//     console.log(msg);
// }).catch((msg)=>{
//     console.log(msg);
// }) 
//=========================================================

//=======================Using Asyn=================================
// const getUser = async () => {
    
//     try{
//         const loginUser =  await login("email@gmail.com");
//         console.log(loginUser);
        
//         const videos = await getvideo(loginUser)
//         console.log(videos);

//         const actor =  await getActor(videos[0])
//         console.log(actor)
        
//     }catch(error){
//         console.log(error);
        
//     }
// } 
// getUser()