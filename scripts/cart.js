Submit=()=>{
        function Obj(text,email,address,amount){
            this.name=text;
            this.email=email;
            this.address=address;
            this.wallet=amount;
        }
        let text=document.querySelector("#name").value ;
        let email=document.querySelector("#email").value ;
        let address=document.querySelector("#address").value ;
        let amount=document.querySelector("#amount").value ;
        let obj1=new Obj(text,email,address,Number(amount))
        console.log(obj1)
        localStorage.setItem("user",JSON.stringify(obj1))
        window.location.reload()
     }