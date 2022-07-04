let data11 =JSON.parse(localStorage.getItem("user")) ;
sum=data11.wallet;
console.log(sum)
let x=document.querySelector("#cart_total");
x.innerText=sum
async function card(){
let url="https://grocery-masai.herokuapp.com/items" ;

let res= await fetch(url) ;
let data =await res.json() ;
// console.log(data) 

data.forEach(element => {
    display(element.cart)
});
}
card()
function display(data){
    //console.log(data)
    data.forEach(element =>{
       // console.log(element.name)
       let div=document.createElement("div")

       div.class="cart"
       let img=document.createElement("img")
       img.src=element.image;
       let h3=document.createElement("h3")
       h3.innerText=element.name;
       let price=document.createElement("price")
        price.innerText=element.price;
        btn.class="#checkout"
        btn.addEventListener("click" ,function(){
            check1(element,element_price)
        })
        div.append(img,h3,price,btn)
        document.querySelector("#cart_list").append(div)
    }) ;
}
function check1(element,price){
    console.log(element)
    if(sum>=price){
        sum=sum-price
        alert("Hurry!purchase successful")
        let store=JSON.parse(localStorage.getItem("purchase"))||[]

        store.push(element)
        localStorage.setItem("purchase",JSON.stringify(store))
    }

    else{
        alert("Sorry! Insufficient balance")
    }
    data11.wallet=sum
    localStorage.setItem("user",JSON.stringify(data11))

    let x=document.querySelector("wallent_ballance")
    x.innerText=sum
} 