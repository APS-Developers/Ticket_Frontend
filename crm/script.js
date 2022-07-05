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