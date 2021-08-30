let couponList = ["Discount01", "Discount02", "Discount03"];
let nomePanino = document.getElementById("nomePanino");
let prezzoFinale;


let burgerButton = document.getElementById("calculatePrice");


burgerButton.addEventListener("click",
    function () {
        if (nomePanino.value.length === 0) {
            alert("Inserisci il nome del panino!!!")
        } else {
            let prezzoBasePanino = 65;
            let ingredienteAggiunto = document.getElementsByClassName("ingredients");
            for (i = 0; i < ingredienteAggiunto.length; i++) {
                let ingredienteScelto = ingredienteAggiunto[i];
                if (ingredienteScelto.checked == true) {
                    prezzoBasePanino += 5;
                }
            }
            let coupon = document.getElementById("insertCoupon");


            if (coupon.value.length > 0) {
                if (couponList.includes(coupon.value)) {
                    prezzoBasePanino = prezzoBasePanino - 6.5;
                } else {
                    alert("Inserisci un coupon valido.");
                }
            }

            prezzoFinale = document.getElementById("somma").innerHTML = prezzoBasePanino + "&euro;";
        }



    });



