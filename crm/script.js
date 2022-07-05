const menubtn =  document.getElementById("aps_nav_menubtn");
const sidebar = document.getElementById("aps_sidebar");
menubtn.addEventListener("click",()=>{
    sidebar.classList.toggle("active");
})
window.onload = function(){
    if(window.innerWidth<=768){
        sidebar.classList.toggle("active");
    }
}
document.querySelectorAll(".crm_form fieldset").forEach((elem)=>{
    try{
        let lbl = elem.querySelector("label");
        let ip = lbl.nextElementSibling;
        if(ip.hasAttribute("required") && lbl.innerHTML.indexOf("*")==-1){
            lbl.innerHTML += " *";
        }
    }catch{
    }
})