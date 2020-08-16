const hamXBtn = document.querySelector("header nav .hamburger-x");
const hamburger = document.querySelector("header nav .hamburger");
const x = document.querySelector("header nav .x");

const navMenu = document.querySelector("header nav .menu");
const navMenuListItems = document.querySelectorAll("header nav .menu > li:not(:first-child)");

const drop = document.querySelector("header nav .menu .dropdown");
const dropBtn = document.querySelector("header nav .menu .dropdown-button");
const dropMenu = document.querySelector("header nav .menu .dropdown-menu");

const maxWidth992px = window.matchMedia("(max-width: 992px)");

let isHamXBtnClicked = false;
let isDropBtnClicked = false;

const navMenuListItemsLength = navMenuListItems.length;

// Dropdown Menu Transformation (Mouse Events)
dropBtn.addEventListener("mouseenter", function() {
    this.style.color = "#00c5ba";
    if (!maxWidth992px.matches) {
        dropMenu.style.visibility = "visible";
        dropMenu.style.opacity = "1";
        dropMenu.style.margin = "40px 0";
        dropMenu.style.transition = "visibility 0.5s, opacity 0.5s, margin 0.5s";
    }
});

dropBtn.addEventListener("mouseleave", function() {
    if(maxWidth992px.matches && !isDropBtnClicked) {
        this.style.color = "#1c1c1c";
    }
});

drop.addEventListener("mouseleave", function() {
    if (!maxWidth992px.matches) {
        dropBtn.style.color = "#1c1c1c";
        dropMenu.style.visibility = "hidden";
        dropMenu.style.opacity = "0";
        dropMenu.style.margin = "50px 0";
        dropMenu.style.transition = "visibility 0.5s, opacity 0.5s, margin 0s 0.5s";
    }
});

// Navigation Menu / Hamburger Button Transformation (Listener)
function navMenuAppearance() {    
    if (maxWidth992px.matches) {
        hamXBtn.style.display = "block";
        if (!isHamXBtnClicked) {
            for (let i = 0; i < navMenuListItemsLength; i++) {
                navMenuListItems[i].style.visibility = "hidden";
                navMenuListItems[i].style.opacity = "0";
            }
        } else {
            for (let i = 0; i < navMenuListItemsLength; i++) {
                navMenuListItems[i].style.visibility = "visible";
                navMenuListItems[i].style.opacity = "1";
            }
        }
    } else {
        hamXBtn.style.display = "none";
        for (let i = 0; i < navMenuListItemsLength; i++) {
            navMenuListItems[i].style.visibility = "visible";
            navMenuListItems[i].style.opacity = "1";
        }
    }
}

navMenuAppearance(maxWidth992px);
maxWidth992px.addListener(navMenuAppearance);

// Navigation Menu Transformation (Click Event)
hamXBtn.addEventListener("click", function() {
    for (let i = 0; i < navMenuListItemsLength; i++) {
        navMenuListItems[i].style.transition = "visibility 0.8s, opacity 0.8s";
    }
    if (!isHamXBtnClicked) {
        for (let i = 0; i < navMenuListItemsLength; i++) {
            navMenuListItems[i].style.visibility = "visible";
            navMenuListItems[i].style.opacity = "1";
        }
    } else {
        for (let i = 0; i < navMenuListItemsLength; i++) {
            navMenuListItems[i].style.visibility = "hidden";
            navMenuListItems[i].style.opacity = "0";
        }
    }
});

// Hamburger Button Transformation (Click Event)
hamXBtn.addEventListener("click", function() {
    if (!isHamXBtnClicked) {
        hamburger.style.transform = "rotateX(90deg)";
        hamburger.style.transition = "transform 0.2s ease-in-out";
        x.style.transform = "rotateX(180deg)";
        x.style.transition = "transform 0.2s 0.4s ease-in-out";
        isHamXBtnClicked = true;
    } else {
        x.style.transform = "rotateX(90deg)";
        x.style.transition = "transform 0.2s ease-in-out";
        hamburger.style.transform = "rotateX(180deg)";
        hamburger.style.transition = "transform 0.2s 0.4s ease-in-out";
        isHamXBtnClicked = false;
    }
});

// Dropdown Menu Transformation (Listener)
function dropMenuAppearance() {
    if (maxWidth992px.matches) {
        dropMenu.style.margin = "0";
        dropMenu.style.transition = "none";
        if (!isDropBtnClicked) {
            dropBtn.innerHTML = "<i class=\"fas fa-cogs\"></i>&nbsp; Services &nbsp;<i class=\"fas fa-angle-down\"></i>";
            dropBtn.style.color = "#1c1c1c";
            dropMenu.style.visibility = "hidden";
            dropMenu.style.opacity = "0";
            navMenuListItems[2].style.top = "178px";
            navMenuListItems[1].style.top = "233px";
            navMenuListItems[0].style.top = "288px";
        }
        else {
            dropBtn.innerHTML = "<i class=\"fas fa-cogs\"></i>&nbsp; Services &nbsp;<i class=\"fas fa-angle-up\"></i>";
            dropBtn.style.color = "#00c5ba";
            dropMenu.style.visibility = "visible";
            dropMenu.style.opacity = "1";
            navMenuListItems[2].style.top = "303px";
            navMenuListItems[1].style.top = "357px";
            navMenuListItems[0].style.top = "412px";
        }
    } else {
        dropBtn.innerHTML = "<i class=\"fas fa-cogs\"></i>&nbsp; Services";
        dropBtn.style.color = "#1c1c1c";
        dropMenu.style.visibility = "hidden";
        dropMenu.style.opacity = "0";
        dropMenu.style.margin = "50px 0";
    }
}

dropMenuAppearance(maxWidth992px);
maxWidth992px.addListener(dropMenuAppearance);

// Dropdown Menu Transformation (Click Event)
dropBtn.addEventListener("click", function() {
    dropMenu.style.transition = "none";
    if (maxWidth992px.matches && !isDropBtnClicked) {
        this.innerHTML = "<i class=\"fas fa-cogs\"></i>&nbsp; Services &nbsp;<i class=\"fas fa-angle-up\"></i>";
        this.style.color = "#00c5ba";
        dropMenu.style.visibility = "visible";
        dropMenu.style.opacity = "1";
        navMenuListItems[2].style.top = "303px";
        navMenuListItems[1].style.top = "357px";
        navMenuListItems[0].style.top = "412px";
        isDropBtnClicked = true;
    } else if (maxWidth992px.matches && isDropBtnClicked) {
        this.innerHTML = "<i class=\"fas fa-cogs\"></i>&nbsp; Services &nbsp;<i class=\"fas fa-angle-down\"></i>";
        this.style.color = "#1c1c1c";
        dropMenu.style.visibility = "hidden";
        dropMenu.style.opacity = "0";
        navMenuListItems[2].style.top = "178px";
        navMenuListItems[1].style.top = "233px";
        navMenuListItems[0].style.top = "288px";
        isDropBtnClicked = false;
    }
});
