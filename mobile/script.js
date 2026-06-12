// MENU BUTTON

const menuBtn = document.querySelector(".menu-btn");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        alert("Menu sedang dikembangkan 🚀");

    });

}


// TAB KATEGORI

const kategoriButtons =
document.querySelectorAll(".kategori button");

kategoriButtons.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        kategoriButtons.forEach((item)=>{

            item.classList.remove("active");

        });

        btn.classList.add("active");

    });

});


// ANIMASI CARD

const cards =
document.querySelectorAll(
".materi-card,.fitur-card,.paket-card"
);

cards.forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-6px)";
        card.style.transition=".3s";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


// EFEK BUTTON

const buttons =
document.querySelectorAll("button");

buttons.forEach((btn)=>{

    btn.addEventListener("mousedown",()=>{

        btn.style.transform="scale(.96)";

    });

    btn.addEventListener("mouseup",()=>{

        btn.style.transform="scale(1)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});


// TESTIMONI AUTO SCROLL

const testiContainer =
document.querySelector(".testi-wrap");

if(testiContainer){

    let testiScroll = 0;

    setInterval(()=>{

        testiScroll += 130;

        if(testiScroll >= testiContainer.scrollWidth){

            testiScroll = 0;

        }

        testiContainer.scrollTo({

            left:testiScroll,
            behavior:"smooth"

        });

    },3000);

}


// PROMO AUTO SCROLL

const promoContainer =
document.querySelector(".promo");

if(promoContainer){

    let promoScroll = 0;

    setInterval(()=>{

        promoScroll += 230;

        if(promoScroll >= promoContainer.scrollWidth){

            promoScroll = 0;

        }

        promoContainer.scrollTo({

            left:promoScroll,
            behavior:"smooth"

        });

    },4000);

}


// HERO BUTTON

const mulaiBtn =
document.querySelector(".btn-primary");

if(mulaiBtn){

    mulaiBtn.addEventListener("click",()=>{

        alert("Selamat datang di Ruang Belajar 🎓");

    });

}


// PRODUK BUTTON

const produkBtn =
document.querySelector(".btn-outline");

if(produkBtn){

    produkBtn.addEventListener("click",()=>{

        const tujuan =
        document.querySelector(".konten");

        if(tujuan){

            tujuan.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

}