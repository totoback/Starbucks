//main header
//search

const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const searchIconEl = searchEl.querySelector("span");

let isFocused = false;

searchIconEl.addEventListener("click", function(){
  if(isFocused){
    searchInputEl.blur();
    isFocused = false;
  } else {
    searchInputEl.focus();
    isFocused = true;
  }
})

searchEl.addEventListener("click", function() {
  searchInputEl.focus();
  //서치태그를 클릭할때 포커스 이벤트를 실행시킨다.
});

searchInputEl.addEventListener("focus", function() {
  searchInputEl.setAttribute("placeholder","통합 검색");
});

searchInputEl.addEventListener("blur", function(){
  searchInputEl.setAttribute("placeholder","");
});


//swiper
//공지사항 생성자 함수
const swiperNotice = new Swiper ("section.notice .notice-line .inner .inner__left .swiper", {
  direction : "vertical",
  loop : true,
  autoplay : true,
});

//swiper promotion
//프로모션
const promotion = new Swiper (".notice .promotion .swiper", {
  direction : "horizontal",
  slidesPerView : 3, //3장 보여줄거다.
  spaceBetween : 10, //10px
  centeredSlides : true,
  loop : true,
  autoplay : {
    delay : 2000, //1000이 1초, 딜레이 1초 주겠다.
    disableOnInteraction : false, //드래그엔 드롭같은 액션X
  },
  pagination : {
    el:".promotion .swiper-pagination",
    dlickable: true,
  },
  navigation: {
    prevEl : ".promotion .swiper-button-prev",
    nextEl : ".promotion .swiper-button-next",
  },
})

// controlAutoPlay 컨트롤
function controlAutoPlay() {
  if(promotion.autoplay.running === false){
    promotion.autoplay.start();
  } else {
    promotion.autoplay.stop();
  }
}

//Toggle Promotion
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");
promotionToggleBtn.addEventListener("click", function() {
  if(promotionSection.classList.contains("hide")) {
    //hide라는 클래스를 찾아라
    promotionSection.classList.remove("hide");
    //hide가 있다면 지워라
    promotionToggleBtn.classList.add("show");
    //toggle-promotion를 누르면 show를 붙여라
  } else {
    promotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  };
})

//애니메이션 파트
//visual
window.onload = function() {
  //윈도우가 로딩되면 요 익명 함수를 실행해주세요
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
};

//애니메이션 스크롤 파트
//스크롤 내릴 때 마다 애니메이션 작동하게 하기
window.addEventListener("scroll", function () {
  //elsalvador
  console.log(scrollY);
  //스크롤 값을 확인하는 방법
  if(window.scrollY > 30){
    const elsalvadorSection = document.querySelector(".elsalvador");
    elsalvadorSection.classList.add("animate");
  }
  //ethiopia
  if(window.scrollY > 800){
    const ethiopiaSection = document.querySelector(".ethiopia");
    ethiopiaSection.classList.add("animate");
  }
  //favorite
  if(window.scrollY > 1400){
    const favoriteSection = document.querySelector(".favorite");
    favoriteSection.classList.add("animate");
  }
  //magazine
  if(window.scrollY > 1900){
    const magazineSection = document.querySelector(".magazine");
    magazineSection.classList.add("animate");
  }
  //store
  if(window.scrollY > 2200){
    const storeSection = document.querySelector(".store");
    storeSection.classList.add("animate");
  }
})