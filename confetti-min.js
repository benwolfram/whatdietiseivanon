const text=document.querySelector(".text");text.addEventListener("animationend",(()=>{setTimeout((()=>confetti({spread:90,particleCount:150,origin:{x:.5,y:.7}})),100)}));