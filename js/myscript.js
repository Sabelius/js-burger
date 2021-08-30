let couponList = ["Discount01", "Discount02", "Discount03"];
let nomePanino = document.getElementById("nomePanino");
let prezzoBasePanino;
let ingredienteAggiunto;
console.log(nomePanino);

let burgerButton =document.getElementById("calculatePrice");
console.log(calculatePrice);


burgerButton.addEventListener("click",
    function(){
        if(nomePanino.value.lenght === 0){
            alert("Inserisci il nome del panino!!!")
        }else{
            prezzoBasePanino = 14;
            ingredienteAggiunto = document.getElementsByClassName("ingredients");
        }
        for(i = 0; i < ingredienteAggiunto.lenght; i++){
            let ingredienteAggiunto = ingredienti[i];
            if( ingredienteAggiunto.checked == true){
                prezzoBasePanino += 5;
            }
        }

        let coupon = document.getElementById("insertCoupon");


        if(coupon.value.lenght > 0){
            if(couponList.includes(coupon.value)){
                prezzoBasePanino = prezzoBasePanino * 1.4;
            } else{
                alert("Inserisci un coupon valido.");
            }
        }
        let totale = document.getElementById("somma").innerHTML = prezzoBasePanino + "&euro;";
    })

