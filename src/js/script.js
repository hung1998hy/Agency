// Sticky menu
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('header').classList.add('section');
        document.getElementById('logo').classList.add('logo__img');
    } else {
        document.getElementById('header').classList.remove('section');
        document.getElementById('logo').classList.remove('logo__img');
    }
}

// vanilla menu

function functionScroll() {
    var section = document.querySelectorAll('.actions');
    sections = {};
    let i = 0;

    Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
    });

    for (i in sections) {
        if (sections[i] <= window.pageYOffset + 72) {
            document.querySelector('.showColor').classList.remove('showColor');
            document.querySelector('a[href*= ' + i + ']').classList.add('showColor');
        }
    }
}

window.addEventListener('scroll', functionScroll);
window.addEventListener('resize', functionScroll);

// ======================= Menu Responsive===================

var btn = document.querySelector(".header__bar-button");
var list = document.querySelector(".header__bar-menu");
var listItem = document.querySelectorAll(".menu__item-link");
let menuStatus = true;
btn.addEventListener(
    "click",
    function() {
        if (menuStatus == true) {
            list.classList.add("active");
            return menuStatus = false;
        } else {
            list.classList.remove("active");
            return menuStatus = true;
        }
    }
);
listItem.forEach((test, index) => {
    test.addEventListener("click", () => {
        list.classList.remove('active')
        return menuStatus = true
    })
})

// modal 
var modalBtns = Array.from(document.querySelectorAll(".portfolio__item"));
modalBtns.forEach(function(btn) {
    btn.addEventListener("click",
        function() {
            var modal = btn.getAttribute('data-modal');
            var modalShow = document.getElementById(modal);
            modalShow.classList.add("tranfrom")
            document.querySelector("body").classList.add("hidden-scroll-y")
        })
})
var closeBtns = Array.from(document.querySelectorAll(".close-top"));
closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = btn.closest(".modal");
        modal.classList.remove("tranfrom");
        document.querySelector("body").classList.remove("hidden-scroll-y");
    };
});
var closeIns = Array.from(document.querySelectorAll(".modal__button"));
closeIns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = btn.closest(".modal");
        modal.classList.remove("tranfrom")
        document.querySelector("body").classList.remove("hidden-scroll-y");
    };
});
window.onclick = function(event) {
    if (event.target.className === "modal tranfrom") {
        event.target.classList.remove("tranfrom");
        document.querySelector("body").classList.remove("hidden-scroll-y");
    }
};

// Smooth 
let scrollSmooth = {
    init: function() {
        scrollSmooth.scrollSection()
    },
    scrollSection: function() {
        var navLink = document.querySelectorAll(".menu__item-link");
        var section = document.querySelectorAll(".smooth");
        console.log(navLink)
        console.log(section)
        navLink.forEach((links, index) => {
            links.addEventListener("click", (e) => {
                e.preventDefault()
                let sectionPosition = section[index].offsetTop
                window.scrollTo(0, sectionPosition - 66)
            })
        })
    }
}
scrollSmooth.init()