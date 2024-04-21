import axios from 'axios';
import arrowLeftIcon from '../images/icons/sprite.svg';
import arrowRightIcon from '../images/icons/sprite.svg';
import sasha from '../images/bodya/sasha.jpeg'
import pasha from '../images/bodya/pasha.png'
import art from '../images/bodya/art.png'
import tolik from '../images/bodya/tolik.jpeg'
import amel from '../images/bodya/amel.png'
import toni from '../images/bodya/Toni.jpeg'
const review = [
{id:1,
author: 'Сашик',
avatar_url: sasha,
review: 'Бодя Гричка Термінатор, дуже клипоухий і добрий чоловік, любит сильно много балаболити і заробляти гроші, дуже вонячий футболіст айбо стараєся та одночасно красава, любиме його дуже.'},
{id:2,
author: 'Артьом',
avatar_url: art,
review: 'Богдан нормальний пацан знає лопту пораз ругнути по-людськи пораз нет, і не пораз, пак шо щем годен упувісти кучерявий хуйик бігат скаче матюкаєся любит бебі джонови у гатьох дати джазу му кайфа тай усьо, ще дуже много пиздит, сяк тіпа: но я го дуже люблю ітак «на заметку» - но не усе☝🏻.'},
{id:3,
author: 'Паша',
avatar_url: pasha,
review:"Криптоінвестор, філантроп, мільйонер, crypto enthusiast і просто Богдан Гричка. Фаундер $ARB, кол був дан, уже откупив на фулл балік, дякую босс!"},
{id:4,
author: "Толік",
avatar_url: tolik,
review:"Бодька хароший але дуже крутий на словах а коли до діла та всьо а так самоуверений,добрий красавчик лиш дуже ся видєлує🫶🏻"},
{id:5,
author: "Амеліка",
avatar_url:amel,
review:"Чесно кажучи Бодя самий гарачий парень якого я коли лібо виділа, аж би ун увалив свого бейбі джона, я б не здержалась, дуже за ним сумую."},
{id:6,
author: "Тоні Старк",
avatar_url: toni,
review: "Бивим учора у геднелик а там ня якийсь геці звідат, ти не знаєш ко то Бодя Гричка, я му нараз уповів: Э, гений, миллиардер, плейбой, филантроп! "}]
const BASE_URI = 'https://portfolio-js.b.goit.study/api/reviews';
const gallery = document.querySelector('.gallery');

async function getReviewsFromServer() {
  try {
    const { data } = await axios.get(BASE_URI);

    gallery.innerHTML = `<div class="swiper mySwiper">
      <p class = "review">REVIEW</p>
    <div id = "swiper-wrapper" class="swiper-wrapper">
       ${review
         .map(
           ({ author, avatar_url, review }) => `
           <div class="swiper-slide">
            <div class="gallery-item">
              <img src="${avatar_url}" class="gallery-image" alt="${author}"/>
                <div class="author">${author}</div>
              <p class="review">${review}</p>
            </div>
          </div>
          `
         )
         .join('')}
    </div>
    <div><button id = "swiper-button-next" class="swiper-button-next">
  <svg>
    <use href="${arrowRightIcon}#icon-arrow-right"></use>
  </svg>
</button></div>

    <div><button id = "swiper-button-prev" class="swiper-button-prev">
  <svg>
    <use href="${arrowLeftIcon}#icon-arrow-left"></use>
  </svg>
</button></div>

  </div>`;

    new Swiper('.mySwiper', {
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: true,
      mousewheel: true,
      slidesPerView: 1,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },

        1440: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
    });
  } catch (error) {
    console.error('Error while fetching reviews:', error.message);
    throw error;
  }
}
getReviewsFromServer();
