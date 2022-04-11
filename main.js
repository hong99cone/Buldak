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

// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
var infowindow = new kakao.maps.InfoWindow({zIndex:1});

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(map); 

// 카테고리로 편의점을 검색합니다
ps.categorySearch('CS2', placesSearchCB, {useMapBounds:true}); 

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);    
        }       
    }
}

// 현재위치를 받아옴
// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
if (navigator.geolocation) {
    
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        
        var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition);
            
      });
    
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
        alert('❌ 현재위치를 찾을 수 없습니다 ❌');
}

// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
}