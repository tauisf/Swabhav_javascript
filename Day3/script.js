// const players = ["Ajay","Amir","Salman","Sharuk","Amir"]

// const filteredplayer = players.filter(player=> player.length == 3 || player.length == 4)
// console.log(filteredplayer);
// const noDuplicate = []
// const uniqueNumber = players.filter((player1, player2)=>{
//     return players.indexOf(player1) === player2 


// })

// console.log(uniqueNumber);

//  players.filter((player)=>{
//     if(!noDuplicate.includes(player)){
//         noDuplicate.push(player)
//     }
//  })



// console.log(noDuplicate);


// const numbers =[1,2,4,5,7,10,13,14] 
// const evennumber = numbers.filter(number=>number % 2==0)
// console.log(evennumber);

const myOttList = [
    {
      name: "hotstar",
      price: 1500,
      subscription: "active",
    },
    {
      name: "sonyLiv",
      price: 700,
      subscription: "inactive",
    },
    {
      name: "zee5",
      price: 500,
      subscription: "active",
    },
    {
      name: "jioCinema",
      price: 1000,
      subscription: "inactive",
    },
    {
      name: "prime videos",
      price: 1300,
      subscription: "active",
    },
  ];



// const  discount = myOttList.map((ott)=>{
//     if(ott.price > 1000){
//         ott.price = ott.price - ott.price*0.2
//     }
//     return [ott.name,ott.price]
// })

// console.log(discount);

// const isActive = myOttList.filter(ott=>ott.subscription == "active")
// console.log(isActive);


const ObjectCompare = myOttList.sort((ott1,ott2)=>{
    return ott1.name.localeCompare(ott2.name)
})
console.log(ObjectCompare);

// //map
// const priceList = [100,200,300,400,500]
// let sum = 0 ;
// let discount = [] ;

// const  saleprice = priceList.map((price)=>{
//     sum+=price
//     discount.push(price-price*0.2)
    
// })

// console.log(sum);
// console.log(discount);


//reduce 

// const price =  [100,200,300,1000,500,400,300]

// const reducePrice = price.reduce((res,val)=>{
//     return res+val
// })

// console.log(reducePrice);

// price.sort().reverse()
// console.log(price);
 
// const numberFinder =price.find((Number)=>{
//     return Number>300
//  }
// )

// console.log(numberFinder);
