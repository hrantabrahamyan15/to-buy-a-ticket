import React from 'react';

import { NextLink } from 'components/index';

import styles from './Home.scss';

const HomeContainer = () => (
  <section>
    <div className="container">
      <h1 className={styles.title}>Купить Билет у компаний перевозчиков</h1>
      <div className={styles.companies}>
        <div className={styles.companies__item}>
          <img
            className={styles.companies__item_img}
            src="/images/aeroflot.png"
            alt="aeroflot "
          />
          <h2 className={styles.companies__item_title}>
            Авиакомпания Аэрофлот
          </h2>
          <NextLink
            className={styles.companies__item_link}
            to="/[companyes]"
            as="/aeroflot"
          >
            варианты перевозок
          </NextLink>
        </div>
        <div className={styles.companies__item}>
          <img
            className={styles.companies__item_img}
            src="/images/rjd.png"
            alt="aeroflot "
          />
          <h2 className={styles.companies__item_title}>
            Железнодорожная компания РЖД
          </h2>
          <NextLink
            className={styles.companies__item_link}
            to="/[companyes]"
            as="/rjd"
          >
            варианты перевозок
          </NextLink>
        </div>
      </div>
    </div>
  </section>
);

export default HomeContainer;
