document.querySelector(".ca").addEventListener("click",()=>{
        document.querySelector(".bar").classList.toggle("bar2")
})

window.addEventListener('scroll',()=>{
       
        
        if(window.scrollY>150){
                document.querySelector("article").style.transform = "translateY(0%)";
        }else{document.querySelector("article").style.transform = "translateY(100%)"}
        
})

window.addEventListener('scroll',()=>{        
        if(window.scrollY>800){
                document.querySelector(".true_main_end .img1").style.transform = "translateY(0%)";
        }else{document.querySelector(".true_main_end .img1").style.transform = "translateY(100%)"}
        
})

window.addEventListener('scroll',()=>{        
        if(window.scrollY>1320){
                document.querySelector(".true_main_end .img2").style.transform = "translateY(0%)";
        }else{document.querySelector(".true_main_end .img2").style.transform = "translateY(100%)"}
        
})

window.addEventListener('scroll',()=>{        
        if(window.scrollY>1600){
                document.querySelector(".true_main_end .img3").style.transform = "translateY(0%)";
        }else{document.querySelector(".true_main_end .img3").style.transform = "translateY(100%)"}
        
})


window.addEventListener('scroll',()=>{        
        if(window.scrollY>3000){
                document.querySelector(".footer_one h1").style.transform = "translateY(0%)";
        }else{document.querySelector(".footer_one h1").style.transform = "translateY(100%)"}
        
})