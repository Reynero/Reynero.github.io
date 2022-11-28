export default function nav(){
    window.addEventListener("scroll",() =>{
        if(window.pageYOffset < 50){
            document.querySelector("nav").classList.remove("nav2");
            document.querySelector(".nav-name").classList.remove("hidden");
            document.querySelector(".nav-ul").classList.remove("nav-ul2");
        }else{
            document.querySelector(".nav-name").classList.add("hidden");
            document.querySelector(".nav-ul").classList.add("nav-ul2");
            document.querySelector("nav").classList.add("nav2");
            
        }
    });
}