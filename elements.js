
//Menu slider
function revealmenu() {
    document.getElementById("down-menu").style.display = "block";
    document.getElementById("down-menu").style.animation = "slide-down 0.8s ease-in-out";
    event.stopPropagation();
}
function closemenu() {
    document.getElementById("down-menu").style.animation = "close-up 0.8s ease-in-out";
    setTimeout(displaynone, 790);
}
function displaynone() {
    document.getElementById("down-menu").style.display = "none";
}
// <!--Floating text control-->

if (screen.width > 1010) {
    var x = 1100;
    var y = 3400;
    var z = 3950;
    var a = 350;
    var b = 720
    var c = 1000;
}
else if (screen.width < 1010 && screen.width > 530) {
    var x = 1200;
    var y = 2110;
    var z = 3200;
    var a = 370;
    var b = 470;
    var c = 800;
}
else if (screen.width < 530) {
    var x = 1600;
    var y = 2200;
    var z = 2050;
    var a = 400;
    var b = 490;
    var c = 520;
}
document.onscroll = function textin() {
    if (window.scrollY < a) {
        $("#floating-text").css("left", -x + window.scrollY * 4.5 + "px");
    }
    if (window.scrollY > a) {
        $("#picture1").fadeIn();
    }
    else if (window.scrollY < a) {
        $("#picture1").fadeOut();
    }
    if (window.scrollY < b) {
        $("#floating-text2").css("left", y - window.scrollY * 4.5 + "px");
    }
    if (window.scrollY > b) {
        $("#picture2").fadeIn();
    }
    else if (window.scrollY < b) {
        $("#picture2").fadeOut();
    }
    if (window.scrollY < c) {
        $("#floating-text3").css("left", -z + window.scrollY * 4.5 + "px");
    }
    if (window.scrollY > c) {
        $("#picture3").fadeIn();
    }
    else if (window.scrollY < c) {
        $("#picture3").fadeOut();
    }
}

//slick slider plugin

$('.story-wrapper').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    prevArrow: (".shifter-left"),
    nextArrow: (".shifter-right"),
});




/* post control */


window.onload = adder();
function adder() {
    for (var i = 0; i < 4; i++) {
        var element = document.getElementById("mytemp").content;
        var copyHTML = document.importNode(element, true);
        document.getElementById("container").appendChild(copyHTML);
    }
}

function addpost(){
    for (var i = 0; i < 4; i++) {
        var element = document.getElementById("sbp-template").content;
        var copyHTML = document.importNode(element, true);
        document.getElementById("sbp-container").appendChild(copyHTML);
    }
}