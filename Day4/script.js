const login =(email,password,callback1)=>{

    setTimeout(() => {
        callback1(email)
    }, 2000);
}

const getvideo =(callback2)=>{

    setTimeout(() => {
        callback2(["video1","video2"])
    }, 2000);
}
const getActor =(callback3)=>{

    setTimeout(() => {
        callback3([{name:"salman khan"}])
    }, 2000);
}
login("siddiqui@gamil.com",1234,(email)=>{
    console.log(email);
    getvideo((videos)=>{
        console.log(videos);
        getActor((actor)=>{
            console.log(actor)
        })
        
    })
    
})