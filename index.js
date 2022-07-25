function beforeAfter() {
    document.getElementById('compare').style.width = document.getElementById('slider').value + "%";
}

function whiteDemo() {
    document.getElementById('white').style.backgroundColor = 'white';
    // document.getElementById('bcolor').style.color = 'black';
    const whiteCount = document.querySelectorAll(".bcolor");
    const whiteBh = document.querySelectorAll('.fbox');
    for (let i = 0; i < whiteCount.length; i++) {
        whiteCount[i].style.color = "black";
    }
    for (let i = 0; i < whiteBh.length; i++) {
        whiteBh[i].classList.add("fbox1");
    }
    document.getElementById('header_container').style.backgroundColor = '#151515';

}
function blackDemo() {
    document.getElementById('white').style.backgroundColor = 'black';
    const whiteCount = document.querySelectorAll(".bcolor");
    for (let i = 0; i < whiteCount.length; i++) {
        whiteCount[i].style.color = "white";
    }
    const whiteBh = document.querySelectorAll('.fbox');
    for (let i = 0; i < whiteBh.length; i++) {
        whiteBh[i].classList.remove("fbox1");
    }

}

function reveal() {
    var reveals = document.querySelectorAll(".lazyload");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);