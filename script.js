const btn=document.getElementById("hambur");
const nav=document.getElementById("navbar");
const close=document.getElementById("close");

close.addEventListener("click",func2); 
btn.addEventListener("click",func1); 

function func2(){
        
    nav.classList.remove("ac");
    
}
 
    function func1(){
        
        nav.classList.add("ac");
        
    }
    
    btn.addEventListener("click",func1);
    
    