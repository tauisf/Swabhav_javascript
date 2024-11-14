  body = document.getElementsByTagName("body")[0]
  div =  document.getElementById("div")
  span = document.getElementById("span")
 btn  = document.getElementById("button")


span.addEventListener('click',()=>{
    console.log("span is clicked");
    
});
div.addEventListener('click',()=>{
    console.log("div is clicked");
    
});
btn.addEventListener('click',()=>{
    console.log("btn is clicked");
    
});

body.addEventListener('click',()=>{
    console.log("body is clicked");
    
});
