// const paragraph = document.querySelector("body > div > p:nth-child(1)")// directly selct tthe frist div 
// console.log(paragraph);

// const p =document.querySelector("body > div:nth-child(2)>  p")
// console.log(p);

// const para = document.querySelectorAll(".test")
// console.log(para);


// para.forEach((para)=>{
//     para.innerHTML+=" : More text"
//     console.log(para)
// })

// const div2Ref = document.querySelector(".error")
// console.log(div2Ref);

// div2Ref.innerHTML+= `<p> New Para Added</p>`
// console.log(div2Ref);
//========================================

//---------linking == Chanding-----------
// const aRef =  document.querySelector("a")
// console.log(aRef);

// console.log(aRef.getAttribute("href"));

// setTimeout(()=>{
//     aRef.setAttribute("href","www.aurionpro.com")
//     aRef.innerText="Link to aurionpro "
// },3000)
//========================================


//=====Changing Class==============
// const div2Ref =  document.querySelector(".error")
// setTimeout(()=>{
//     div2Ref.setAttribute("class","success")
//     div2Ref.classList.add("error")

// },3000)
//========================================

//================Adding the Class =================
// const div2Ref =  document.querySelector(".error")

// console.log(div2Ref.classList[0]);

// div2Ref.addEventListener('click',(e)=>{
   
//     div2Ref.classList.toggle("error")
//     console.log(div2Ref.classList);   

//     // try use for each 
//  })
//===================================================

//==================Assing Class according to the Tag================
// const articleRef =  document.querySelector("article")
// const childRef =  articleRef.children
// console.log(childRef);

// Array.from(childRef).forEach((ele)=>{
//     if(ele.tagName === "P"){
//         ele.classList.add("error")
//     }else{
//         ele.classList.add("success")
//     }
// })

//===================================================

//==========get element by duffernt method==================day3 assignmnet

const div =  document.getElementById("box")
console.log(div);

const pRef = document.getElementsByClassName("error")
console.log(pRef);

const H3Ref  = document.getElementsByTagName("h3")
console.log(H3Ref);

//===================================================