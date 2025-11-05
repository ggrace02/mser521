const element = document.querySelector("#drawer");
function openDrawer(){
element.classList.add("open");
element.setAttribute("aria-hidden", "false");
}
function closeDrawer(){
    element.classList.remove("open");
element.setAttribute("aria-hidden", "true");
}
