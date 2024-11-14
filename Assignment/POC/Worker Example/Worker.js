onmessage =(e)=>{
    let result = 0 ;
    for (let index = 0; index < 10000000000; index++) {
        result =+ index;
        
    }
    postMessage(result)
}