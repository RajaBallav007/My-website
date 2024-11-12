function opentab(tabName) {
    var tabContents = document.getElementsByClassName("tab-contents");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-tab");
    }

    var tabLinks = document.getElementsByClassName("tab-links");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active-link");
    }

    document.getElementById(tabName).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

var sideMenu = document.getElementById("sidemenu");
function openmenu(){
   
    sideMenu.style.right="0";
}
function closemenu() {
    sideMenu.style.right="-250px"
}