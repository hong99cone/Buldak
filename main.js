'use strict';


// gnb bgcolor-change
const gnb = document.querySelector('.gnb');
const stroyFromTop = document.querySelector('#story').getBoundingClientRect().top;
const collaboFromTop = document.querySelector('#collabo').getBoundingClientRect().top;
const fromTop = collaboFromTop - stroyFromTop / 3;
const buldakFromTop = document.querySelector('#buldak').getBoundingClientRect().top;
const mobileBg = document.querySelector('.gnb .menu')
const gnbOptionList = document.querySelector('.gnb .option-list');


document.addEventListener('scroll', () => {
    if (window.scrollY > fromTop && window.scrollY < buldakFromTop) {
        gnb.classList.add('red');
        mobileBg.classList.add('red');
        gnbOptionList.classList.add('red');
    } else {
        gnb.classList.remove('red');
        mobileBg.classList.remove('red');
        gnbOptionList.classList.remove('red');
    }
});



// gnb _select-box

const gnbLabel = document.querySelector('.gnb .label');
const gnbOptions = document.querySelectorAll('.gnb .option-list li');

gnbOptions.forEach(function(option) {
    option.addEventListener('click', () =>
        gnbLabel.parentNode.classList.remove('active'));
})


gnbLabel.addEventListener('click', () => {
    if (gnbLabel.parentNode.classList.contains('active')) {
        gnbLabel.parentNode.classList.remove('active');
    } else {
        gnbLabel.parentNode.classList.add('active');
    }
})


//gnb handle scrollimg when tappig on the gnb menu

const gnbMenu = document.querySelector('.menu');

gnbMenu.addEventListener('click', (e) => {
    const target = e.target;
    const link = target.dataset.link;
    if (link === null) {
        return;
    }
    document.querySelector(link).scrollIntoView({ behavior: 'smooth' });
})



// Home typing effect

function typingEffect(element, speed) {
    let text = element.textContent;
    element.innerHTML ="";

    let i = 0;
    let timer = setInterval(function() {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}


let speed = 50;
const des = document.querySelector('.text__des');

typingEffect(des, speed);






// section one scroll fade in

const reviews = document.querySelectorAll('.content__item-review .item');
const oneHeight = document.querySelector('section.one').scrollHeight;


const checkPosition = function() {
    for (let i = 0; i < reviews.length; i++) {
        if (window.scrollY > oneHeight / (10 - i)) {
            reviews[i].classList.add('fadein');
            reviews[i].classList.remove('hidden');
        }
    }
}

document.addEventListener('scroll', checkPosition)



// secction.two modal

const modalBtn = document.querySelector('#modal');
const closeBtn = document.querySelector('#close');
const popupBg = document.querySelector('.popup__background');
const body = document.querySelector('body');


modalBtn.addEventListener('click', () => {
    popupBg.classList.add('show');
    body.style.overflow ="hidden"
})
closeBtn.addEventListener('click', () => {
    popupBg.classList.remove('show')
    body.style.overflow ="auto"
})


// timeline arrow Btn

const rightBtn = document.querySelector('.btn__arrow-right');
const leftBtn = document.querySelector('.btn__arrow-left');
const items = document.querySelector('.content__carousel .items');
const card = document.querySelector('.content__carousel .card');
const cardWidth = card.clientWidth;

let totalPxs = 0;

function moveRight(e) {
    totalPxs -= cardWidth;
    items.style.transform = `translateX(${totalPxs}px)`;

}

function moveLeft(e) {
    totalPxs += cardWidth;
    items.style.transform = `translateX(${totalPxs}px)`;
}

rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);




// ghost-leg

// draw ladder
const canvasLadder = document.getElementById('canvas-ladder');

// canvas width, height 설정 (기본값 변경)
canvasLadder.width = document.querySelector('.ladder__main').scrollWidth;
canvasLadder.height = document.querySelector('.ladder__main').scrollHeight;

const ladderCtx = canvasLadder.getContext('2d');

ladderCtx.strokeStyle = 'white';

// vertical line
const margin = 155;
const listVertical = [60, 215, 370, 525, 680];

for (let i = 0; i < 5; i++) {
    ladderCtx.beginPath();
    ladderCtx.moveTo(listVertical[i], 0);
    ladderCtx.lineTo(listVertical[i], canvasLadder.height);
    ladderCtx.stroke();
}


// horizontal line

for (let i = 0; i < 4; i++) {
    ladderCtx.beginPath();
    ladderCtx.moveTo(listVertical[0], 80 + 150 * i);
    ladderCtx.lineTo(listVertical[1], 80 + 150 * i);
    ladderCtx.stroke();
}

for (let i = 0; i < 3; i++) {
    ladderCtx.beginPath();
    ladderCtx.moveTo(listVertical[1], 150 + 150 * i);
    ladderCtx.lineTo(listVertical[2], 150 + 150 * i);
    ladderCtx.stroke();
}

for (let i = 0; i < 4; i++) {
    ladderCtx.beginPath();
    ladderCtx.moveTo(listVertical[2], 100 + 150 * i);
    ladderCtx.lineTo(listVertical[3], 100 + 150 * i);
    ladderCtx.stroke();
}

for (let i = 0; i < 3; i++) {
    ladderCtx.beginPath();
    ladderCtx.moveTo(listVertical[3], 200 + 150 * i);
    ladderCtx.lineTo(listVertical[4], 200 + 150 * i);
    ladderCtx.stroke();
}


// drawing stroke 
function drawStroke(location, verticalLo, horizonLo, unitNum, draw) {
    let verticalIdx = 0;
    let horzonIdx = 0;

    let map = new Array
}


// recipe slide
let swiper = new Swiper(".swiper-recipe", {
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    pagination: {
        el:".swiper-pagination",
    }, 
    observer: true,
    observeParents: true,
});




// footer - select box
const label = document.querySelector('footer .label');
const options = document.querySelectorAll('footer .option-list li');


options.forEach(function(option) {
    option.addEventListener('click', () =>
        label.parentNode.classList.remove('active'));
})


label.addEventListener('click', () => {
    if (label.parentNode.classList.contains('active')) {
        label.parentNode.classList.remove('active');
    } else {
        label.parentNode.classList.add('active');
    }
})



// Mobile menu toggle

const mobileMenu = document.querySelector(".menu__button-mobile")
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('toggle');
    document.querySelector('.gnb .menu').classList.toggle('toggle');
})




// youtube iframe API
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);




let idArr = [], urlArr = [], objArr = [];
let youtube = document.querySelectorAll('.youtube');
youtube.forEach((vid) => {
    idArr.push(vid.id);
    urlArr.push(vid.dataset.url);
})

function onYouTubeIframeAPIReady() {
    for(let i =0; i < youtube.length; i++) {
        let player;
        let playerId = idArr[i];
        player = new YT.Player(playerId, {
            height: '360',
            width: '640',
            videoId: urlArr[i],
          });
          objArr.push(player)
        }
}



// Kakao Map

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var kakaoOptions = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, kakaoOptions); //지도 생성 및 객체 리턴