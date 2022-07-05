const menubtn = document.getElementById("aps_nav_menubtn");
const sidebar = document.getElementById("aps_sidebar");
menubtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
})
window.onload = function () {
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle("active");
    }
}
document.querySelectorAll(".crm_form fieldset").forEach((elem) => {
    try {
        let lbl = elem.querySelector("label");
        let ip = lbl.nextElementSibling;
        if (ip.hasAttribute("required") && lbl.innerHTML.indexOf("*") == -1) {
            lbl.innerHTML += " *";
        }
    } catch {}
})

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}
try{
    let organization = document.getElementById("aps_crm_customer_organization");
    let name = document.getElementById("aps_crm_customer_name");
    let email = document.getElementById("aps_crm_customer_email");
    let phone = document.getElementById("aps_crm_customer_phone");

    name.addEventListener("onChange",()=>{
        debounce(()=>{
            fetch("http://backend",{}).then(res=>res.json()).then(data=>{
                email.value = data.email;
                phone.value = data.phone;
            });
        })
    })
}catch{}