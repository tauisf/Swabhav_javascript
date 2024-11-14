const paragraph = document.createElement("p")
document.body.appendChild(paragraph)

setInterval(() => {
    const date =  new Date()
    paragraph.innerText=` ${date.getHours()} :Hours ${date.getMinutes()} :Minutes:  ${date.getSeconds()}:Sec`
   
}, 1000);
 paragraph.innerText=""