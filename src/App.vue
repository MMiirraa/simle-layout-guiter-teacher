<script setup lang="ts">
import { ref } from 'vue'
import Hamburger from './components/Hamburger/Hamburger.vue'
import Nav from './components/Nav/Nav.vue'

const isActiveHamburger = ref<boolean>(false)

const onToggleHamburger = (value: boolean) => {
  console.log('value ==>', value)

  isActiveHamburger.value = value
}
</script>

<template>
  <div class="main-wrapper">
    <!-- Первая секция -->
    <section class="main-section">
      <!-- ограничивающий контейнер нав меню -->
      <div class="container main-section__nav-container">
        <!-- Навигационное меню -->
        <header class="main-section__header">
          <a href="#"
            ><img
              class="main-section__logo"
              src="/src/assets/icons/logo.svg"
              alt=""
          /></a>
        </header>
        <Hamburger :isActive="isActiveHamburger" @toggle="onToggleHamburger" />
        <Nav />
      </div>

      <!-- ограничивающий контейнер основного контента первой секции -->
      <div class="container main-section__content-container">
        <!-- левая часть первой секции -->
        <div class="left-wrapper">
          <img
            src="/src/assets/img/guitaristPhoto.png"
            alt="фото гитариста"
            class="left-wrapper__img"
          />
          <div class="left-wrapper__rectangle-blue"></div>
          <div class="left-wrapper__rectangle-orange"></div>
          <div class="left-wrapper__rectangle-grey"></div>
        </div>

        <!-- правая часть первой секции -->
        <div class="right-wrapper">
          <!-- иконки -->
          <div class="right-wrapper__icons-box icons">
            <div class="icons__item">
              <i class="fa-brands fa-skype"></i>
            </div>
            <div class="icons__item">
              <i class="fa-brands fa-vk"></i>
            </div>
            <div class="icons__item">
              <i class="fa-brands fa-telegram"></i>
            </div>
            <div class="icons__item">
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>

          <!-- заголовок -->
          <h1 class="right-wrapper__title title">
            Я Виктор
            <hr class="title__hr" />
          </h1>

          <!-- текст -->
          <p class="right-wrapper__text">
            Репетитор игры на гитаре с семилетним опытом преподавания
          </p>

          <!-- кнопки -->
          <div class="right-wrapper__button buttons">
            <!-- обычная кнопка -->
            <button class="buttons__main-btn">
              Забронировать <br />
              урок
            </button>

            <!-- иконка с текстом -->
            <div class="right-wrapper__icon-btn buttons__icon-btn">
              <img src="/src/assets/icons/chat.svg" alt="chat" />
              <p class="buttons__text">
                Есть <br />
                вопросы?
              </p>
            </div>
          </div>
        </div>

        <!-- декоративный круг -->
        <div class="main-section__first-elipse elipse">
          <div class="elipse__subtract"></div>
        </div>
      </div>

      <!-- большой декоративный круг -->
      <div class="main-section__second-elipse elipse elipse_dig">
        <div class="elipse__subtract elipse__subtract_big"></div>
      </div>
    </section>

    <!-- Вторая секция -->
    <section id="about-me" class="second-section">
      <div class="container second-section__container">
        <!-- Заголовок -->
        <h2 class="second-section__title title">
          <hr class="title__hr" />
          Преподаю
        </h2>

        <!-- Карточки -->
        <div class="second-section__cards-box">
          <div class="second-section__cards-item cards-item">
            <img
              class="cards-item__img"
              src="/src/assets/img/guitar3.png"
              alt="Электро-гитара"
            />
            <p class="cards-item__text">
              Электро <br />
              гитара
            </p>
          </div>

          <div class="second-section__cards-item cards-item cards-item_orange">
            <img
              class="cards-item__img"
              src="/src/assets/img/guitar2.png"
              alt="Электро-гитара"
            />
            <p class="cards-item__text">
              Акустическая <br />
              гитара
            </p>
          </div>

          <div class="second-section__cards-item cards-item cards-item_blue">
            <img
              class="cards-item__img"
              src="/src/assets/img/guitar1.png"
              alt="Электро-гитара"
            />
            <p class="cards-item__text">
              Укулеле <br />
              гитара
            </p>
          </div>
        </div>

        <!-- Иконки -->
        <div class="second-section__icons-box icons-box">
          <div class="second-section__icons-item icons-item">
            <img
              src="/src/assets/icons/cup.svg"
              alt="кубок"
              class="icons-item__img"
            />
            <p class="icons-item__text">
              <span>7</span> <br />
              лет <br />
              преподавания
            </p>
          </div>

          <div class="second-section__icons-item icons-item">
            <img
              src="/src/assets/icons/APlus.svg"
              alt="отлично"
              class="icons-item__img"
            />
            <p class="icons-item__text">
              <span>276</span> <br />
              отзывов <br />
              на 5 звезд
            </p>
          </div>

          <div class="second-section__icons-item icons-item">
            <img
              src="/src/assets/icons/pen.svg"
              alt="головной убор"
              class="icons-item__img"
            />
            <p class="icons-item__text">
              <span>314</span> <br />
              студентов <br />
              обученно
            </p>
          </div>

          <div class="second-section__icons-item icons-item">
            <img
              src="/src/assets/icons/musicKey.svg"
              alt="нота"
              class="icons-item__img"
            />
            <p class="icons-item__text">
              <span>2000</span> <br />
              часов <br />
              преподавания
            </p>
          </div>
        </div>

        <!-- Круги -->
        <div class="second-section__first-elipse elipse">
          <div class="elipse__subtract"></div>
        </div>

        <div class="second-section__second-elipse elipse">
          <div class="elipse__subtract"></div>
        </div>
      </div>
    </section>

    <section id="work" class="third-section">
      <div class="container third-section__container">
        <!-- Левая обертка -->
        <div class="third-section__left-wrapper">
          <!-- Заголовок -->
          <h3 class="third-section__left-title title">
            <hr class="title__hr" />
            Обучение
          </h3>
        </div>

        <!-- Правая обертка -->
        <div class="third-section__right-wrapper">
          <!-- Заголовок -->
          <h4 class="third-section__right-title title">
            <hr class="title__hr title__hr_top" />
            Готовлю <br />
            виртуозов
          </h4>
          <!-- текст -->
          <p class="third-section__text">
            Равным образом рамки и место обучения кадров влечет за собой процесс
            внедрения и модернизации позиций, занимаемых участниками в отношении
            поставленных задач. Товарищи! реализация намеченных плановых заданий
            позволяет выполнять важные задания по разработке систем массового
            участия.
            <br />
            <br />
            Повседневная практика показывает, что рамки и место обучения кадров
            позволяет оценить значение новых предложений. Не следует, однако
            забывать, что рамки и место обучения кадров влечет за собой процесс
            внедрения и модернизации систем массового участия.
          </p>
          <div class="right-wrapper__button buttons">
            <!-- обычная кнопка -->
            <button class="buttons__main-btn">
              Забронировать <br />
              урок
            </button>

            <!-- иконка с текстом -->
            <div class="right-wrapper__icon-btn buttons__icon-btn">
              <img src="/src/assets/icons/chat.svg" alt="chat" />
              <p class="buttons__text">
                Есть <br />
                вопросы?
              </p>
            </div>
          </div>
        </div>

        <!-- Круги внутри контейнера -->
        <div class="third-section__first-elipse elipse elipse_dig">
          <div class="elipse__subtract elipse__subtract_big"></div>
        </div>
      </div>

      <!-- Круг снаружи контейнера -->
      <div class="third-section__second-elipse elipse elipse_dig">
        <div class="elipse__subtract elipse__subtract_big"></div>
      </div>
    </section>

    <!-- Футер -->
    <footer class="footer">
      <div class="container footer__container">
        <!-- Изображение грифа -->
        <img
          src="/src/assets/img/guitarGrif.png"
          alt="гриф"
          class="footer__img"
        />

        <!-- Обертка для заголовка и иконок -->
        <div class="footer__wrapper">
          <h5 class="footer__title title">
            <hr class="title__hr title__hr_top" />
            Запишись на <br />
            пробный урок
          </h5>

          <!-- Иконки -->
          <div class="footer__icons-box icons">
            <div class="icons__item">
              <i class="fa-brands fa-skype"></i>
            </div>
            <div class="icons__item">
              <i class="fa-brands fa-vk"></i>
            </div>
            <div class="icons__item">
              <i class="fa-brands fa-telegram"></i>
            </div>
            <div class="icons__item">
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
