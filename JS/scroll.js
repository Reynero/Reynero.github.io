export default function scrollTop(btn){
    window.addEventListener("scroll",() =>{
        if(window.pageYOffset > 600){
            document.querySelector(btn).classList.remove("hidden");
        }else{
            document.querySelector(btn).classList.add("hidden");
        }
    });
    //console.log(window.pageYOffset) 
    document.addEventListener("click",(e) =>{
        if(e.target.matches(btn) || e.target.matches(".fa-arrow-up")){
            window.scrollTo({
                behavior: "smooth",
                top:0
            });
        }
    });   
    
}
