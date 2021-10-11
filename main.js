const hamburgerIcon =  document.querySelector(".header-right > a");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerIcon.addEventListener('click', function () {
    hamburgerMenu.style.display = "block";
}
)

const hamburgerClose = document.querySelector(".close")
hamburgerClose.addEventListener( 'click', function(){
    hamburgerMenu.style.display="none"

}
)