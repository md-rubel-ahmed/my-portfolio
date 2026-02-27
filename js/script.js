//typing script js

var typed = new Typed(".typing",{
    strings: ["web Designer",
        "Frontend Developer",
        "HTML CSS Expert",
        "JavaScript Developer",
          "Landing Page Designer",
        "Modern Website Designer",
        ],
        typeSpeed:80,
        backSpeed:80,  
     
});

var typed = new Typed(".typing2",{
    strings: [ "JavaScript Developer",
        "Frontend Developer",
        "HTML CSS Expert",
        "web Designer",
        "Landing Page Designer",
        "Modern Website Designer",
        ],
        typeSpeed:100,
        backSpeed:60,  
    
});

//show/hide faqs answer 

const faqs = document.querySelectorAll(".faq");
faqs.forEach( faq =>{
faq.addEventListener("click", () =>{
faq.classList.toggle("open");

//change icon 
const icon = faq.querySelector(".faq-icon i");
if(icon.className === "fa-solid fa-plus"){
    icon.className = "fa-solid fa-minus";
}
else{
    icon.className = "fa-solid fa-plus";
}

    } )
})

//show/hide navmenu 

const menu = document .querySelector(".nav-manu");

const menuBtn = document.querySelector("#open-menu-btn");

const closeBtn = document.querySelector("#close-menu-btn");
menuBtn.addEventListener("click", () =>{
menu.style.display = "flex";
closeBtn.style.display = "inline-block";
 menuBtn.style.display = "none"
})

//close nav menu  

const closeNav =  () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
     menuBtn.style.display = "inline-block";
}

   closeBtn.addEventListener("click", closeNav);

   //nav collo scroll change 
   window.addEventListener("scroll", () =>{
    document.querySelector("nav").classList.toggle("window-scroll",window.scroll>100);
   } )