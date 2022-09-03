


// feather icons
feather.replace();

let getsitemenu = document.querySelector('.site-menu-toggler');
let getsiteicon = document.querySelector('.site-menu-icons');

getsitemenu.addEventListener("click",mobileToggler);

$(".site-mobile-menu-close").click(mobileToggler);

function mobileToggler() {
    $(getsitemenu).toggleClass('crossxs');
    $(".site-mobile-menu").toggleClass('offcanvas-menu');
}

let header = document.querySelector('.headers');
header.style.backgroundImage = "url('https://preview.colorlib.com/theme/noxen/images/xhero_1.jpg.pagespeed.ic.21pTmoxTET.webp')";

let journey = document.querySelector('.journey');
journey.style.backgroundImage = "url('https://preview.colorlib.com/theme/noxen/images/hero_2.jpg')";

let news1 = document.querySelectorAll('.news-1');
news1[0].style.backgroundImage = "url('https://preview.colorlib.com/theme/noxen/images/ximg_3.jpg.pagespeed.ic.TZhHy0jdBA.webp')";
news1[1].style.backgroundImage = "url('https://preview.colorlib.com/theme/noxen/images/ximg_1.jpg.pagespeed.ic.cLA3-bwtRq.webp')";
news1[2].style.backgroundImage = "url('https://preview.colorlib.com/theme/noxen/images/ximg_2.jpg.pagespeed.ic.o14lLkjVa6.webp')";
news1[3].style.backgroundImage = "url('https://preview.colorlib.com/theme/noxen/images/ximg_3.jpg.pagespeed.ic.TZhHy0jdBA.webp')";
news1[4].style.backgroundImage = "url('https://preview.colorlib.com/theme/noxen/images/ximg_1.jpg.pagespeed.ic.cLA3-bwtRq.webp')";
news1[5].style.backgroundImage = "url('https://preview.colorlib.com/theme/noxen/images/ximg_2.jpg.pagespeed.ic.o14lLkjVa6.webp')";

let moreService = document.querySelector(".more-services");
moreService.style.backgroundImage = "url('https://preview.colorlib.com/theme/noxen/images/xhero_2.jpg.pagespeed.ic.jybH3ojUHA.webp')";

let qualityService = document.querySelector('.quality-service');
qualityService.style.backgroundImage = "url('https://preview.colorlib.com/theme/noxen/images/xhero_1.jpg.pagespeed.ic.21pTmoxTET.webp')"

$(window).scroll(function () {

    let getscrollpoint = document.documentElement.scrollTop;
    // console.log(getscrollpoint);
    if(getscrollpoint >= 950){
        $(".site-navbar").addClass("fixed-top");
    }else if (getscrollpoint < 800){
        $(".site-navbar").removeClass("fixed-top");
    }

    if(getscrollpoint == 0){
        header.style.backgroundPosition = `50% ${getscrollpoint-25}px`;
        journey.style.backgroundPosition = `50% ${getscrollpoint-1133.3}px`;
        moreService.style.backgroundPosition = `50% ${getscrollpoint-2009.88}px`;
        qualityService.style.backgroundPosition = `50% ${getscrollpoint-2894.23}px`;
    }else {
        header.style.backgroundPosition = `50% ${getscrollpoint-25}px`;
        journey.style.backgroundPosition = `50% ${getscrollpoint-2110.3}px`;
        moreService.style.backgroundPosition = `50% ${getscrollpoint-3909.88}px`;
        qualityService.style.backgroundPosition = `50% ${getscrollpoint-5494.23}px`;
    }

    // if(getscrollpoint < 1500){
    //     journey.style.backgroundPosition = '50% -67.7969px';
    // } else {
    //     journey.style.backgroundPosition = `50% -${getscrollpoint}px`;
    //
    // }


});

//counter & waypoint
const  counterUp  = window.counterUp.default

const el = document.querySelectorAll( '.number' );
// console.log(el);
el.forEach(function (x) {
    // console.log(x);
    new Waypoint({
        element : document.querySelector(".waypoint"),
        handler : function (){
            counterUp( x, {
                duration: 3000,
                delay: 16,
            })
        },
        offset : "75%"
    });

});

new Waypoint({
    element : document.querySelector(".waypoint"),
    handler : function (direction){
        if(direction == "down"){
            let progressbar = document.querySelectorAll('.progress-bar');
            // console.log(progressbar);
            progressbar.forEach(function (x) {
                let attrval = +x.getAttribute('aria-valuenow');
                // console.log(typeof attrval);
                if(x.style.width <= attrval){
                    let width = 1;
                    setInterval(function () {
                        width++;
                        if(width <= attrval){
                            x.style.width = width+"%";
                        }
                    });
                }
                // x.style.width = attrval+'%';
            })
        }else if(direction == "up"){
            let progressbar = document.querySelectorAll('.progress-bar');
            // console.log(progressbar);
            progressbar.forEach(function (x) {
                let attrval = +x.getAttribute('aria-valuenow');
                // console.log(typeof attrval);
                let attrvalmin = +x.getAttribute('aria-valuemin');
                // console.log(attrvalmin);
                x.style.width = attrvalmin+"%";
                setTimeout(function () {
                    if(x.style.width = attrvalmin+"%"){
                        // console.log('true');
                        let width = 1;
                        setInterval(function () {
                            width++;
                            if(width <= attrval){
                                x.style.width = width+"%";
                            }
                        });
                    }
                },600)
                // x.style.width = attrval+'%';
            })
        }
    },
    offset : 'bottom-in-view'
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

//js media query
var x = window.matchMedia("(max-width: 820px)");

function mdSize(e) {
    if(e.matches){
        $(window).scroll(function () {
            let getscrollpoint = document.documentElement.scrollTop;
            console.log(getscrollpoint);

            if(getscrollpoint == 0){
                header.style.backgroundPosition = `50% ${getscrollpoint-25}px`;
                journey.style.backgroundPosition = `50% ${getscrollpoint-1195.2}px`;
                moreService.style.backgroundPosition = `50% ${getscrollpoint-2009.88}px`;
                qualityService.style.backgroundPosition = `50% ${getscrollpoint-2894.23}px`;
            }else {
                header.style.backgroundPosition = `50% ${getscrollpoint-25}px`;
                journey.style.backgroundPosition = `50% ${getscrollpoint-2195.2}px`;
                moreService.style.backgroundPosition = `50% ${getscrollpoint-4709.88}px`;
                qualityService.style.backgroundPosition = `50% ${getscrollpoint-5994.23}px`;
            }
        })
    }
}

x.addListener(mdSize);

mdSize(x);

var y = window.matchMedia("(max-width: 520px)");

function smSize(e) {
    if(e.matches){
        $(window).scroll(function () {
            let getscrollpoint = document.documentElement.scrollTop;
            console.log(getscrollpoint);

            if(getscrollpoint == 0){
                header.style.backgroundPosition = `50% ${getscrollpoint-25}px`;
                journey.style.backgroundPosition = `50% ${getscrollpoint-1195.2}px`;
                moreService.style.backgroundPosition = `50% ${getscrollpoint-2009.88}px`;
                qualityService.style.backgroundPosition = `50% ${getscrollpoint-2894.23}px`;
            }else {
                header.style.backgroundPosition = `50% ${getscrollpoint-25}px`;
                journey.style.backgroundPosition = `50% ${getscrollpoint-2960.2}px`;
                moreService.style.backgroundPosition = `50% ${getscrollpoint-5209.88}px`;
                qualityService.style.backgroundPosition = `50% ${getscrollpoint-8694.23}px`;

            }
        })
    }
}

y.addListener(smSize);

smSize(y);

