let couponList = ["Discount01", "Discount02", "Discount03"];
let nomePanino = document.getElementById("nomePanino");
let prezzoBasePanino;
let ingredienteAggiunto;
let prezzoFinale;


let burgerButton = document.getElementById("calculatePrice");


burgerButton.addEventListener("click",
    function () {
        if (nomePanino.value.lenght === 0) {
            alert("Inserisci il nome del panino!!!")
        } else {
           prezzoBasePanino = 50;
           ingredienteAggiunto = document.getElementsByClassName("ingredients");
        }
        for (i = 0; i < ingredienteAggiunto.lenght; i++) {
           let ingredienteScelto = ingredientiAggiunto[i];
            if (ingredienteScelto.checked == true) {
                prezzoBasePanino += 5;
            }
        }

        let coupon = document.getElementById("insertCoupon");


        if (coupon.value.lenght > 0) {
            if (couponList.includes(coupon.value)) {
                prezzoBasePanino = prezzoBasePanino * 0.5;
            } else {
                alert("Inserisci un coupon valido.");
            }
        }

        prezzoFinale = document.getElementById("somma").innerHTML = prezzoBasePanino + "&euro;";

    });



