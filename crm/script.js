const sidebar = document.getElementById("aps_sidebar");
const main = document.getElementById("aps_main_container");
const shrink = (e) => {
    console.log(main.style.marginLeft);
    console.log(sidebar)
    main.style.maginLeft=sidebar.getBoundingClientRect().width+"px";
    console.log(main.style.marginLeft);
}
document.getElementById("menu_open").addEventListener("click",shrink);