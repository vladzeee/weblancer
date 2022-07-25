// main-list

const params = {
  btnClassName: "main-list__btn",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();


// slider


var swiper = new Swiper(".main-slider-wrapper", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
});

var swiper = new Swiper('.swiper-gallery', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  allowTouchMove: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',

    type: "fraction"
  },

});

var swiper = new Swiper('.news-slider', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },

});

var swiper = new Swiper('.partners-slider', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },

});


// choices

const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
  position: "bottom",
  searchEnabled: false,
  searchChoices: false,
  duplicateItemsAllowed: false,
  shouldSort: false,
});


//tab

document.querySelectorAll(".accordion__text").forEach(function(tabsBtn) {
  tabsBtn.addEventListener("click", function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll(".catalog-tabs__authors").forEach(function(tabContent) {
          tabContent.classList.remove("tab-active")
      })
      document.querySelector(`[data-target="${path}"]`).classList.add("tab-active")
  })    
})


//tooltip
tippy('#myButton', {
  content: "Пример современных тенденций - современная методология разработки",
  trigger: 'click',
  maxWidth: 'none',
});

tippy('#myButton1', {
  content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ",
  trigger: 'click',
  maxWidth: 'none',
});

tippy('#myButton2', {
  content: "В стремлении повысить качество ",
  trigger: 'click',
  maxWidth: 'none',
});

//formvalidate


const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 2,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'phone',
      errorMessage: 'Недопустимый формат',
    },
  ]);