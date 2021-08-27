import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { calculatePercent } from 'utils/index';

import styles from '../Companyes.scss';

const CalculateCard = ({ data, type, priceInfo }) => {
  const { title, price, upKg, upOverPrice, sale, years } = data;
  const { age, kilometr, weight } = priceInfo;

  const [upPrice, setUpPrice] = useState(0);

  const kmPrice = price * Number(kilometr);
  const isSale = Number(age) <= years;
  const totalSale = sale && isSale ? calculatePercent(kmPrice, sale) : 0;

  const totalPrice = kmPrice + upPrice - totalSale;

  useEffect(() => {
    if (Number(weight) > upKg) {
      if (type === 'rjd') {
        setUpPrice(Number(kilometr * 50));
      } else {
        setUpPrice(upOverPrice);
      }
    } else {
      setUpPrice(0);
    }
  }, []);

  return (
    <div className={styles.wrapper__cards_item}>
      <h2 className={styles.wrapper__cards_item_title}>{title}</h2>
      <p className={styles.wrapper__cards_item_text}>
        Стоимость провоза {kilometr} километра: <span>{kmPrice} рублей</span>
      </p>
      <p className={styles.wrapper__cards_item_text}>
        Стоимость провоза багажа:
        <span>{` ${upPrice !== 0 ? `${upPrice} рублей` : 'бесплатно'}`}</span>
      </p>
      <p className={styles.wrapper__cards_item_text}>
        Скидка: <span>{sale ? `${totalSale} рублей ` : '0 рублей'}</span>
      </p>
      <p className={styles.wrapper__cards_item_text}>
        Общий стоимость: <span>{totalPrice} рублей</span>
      </p>
    </div>
  );
};

CalculateCard.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string,
  priceInfo: PropTypes.object,
};

CalculateCard.defaultProps = {
  data: {},
  type: 'rjd',
  priceInfo: {},
};

export default CalculateCard;
