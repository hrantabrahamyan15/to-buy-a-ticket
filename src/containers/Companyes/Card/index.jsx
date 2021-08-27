import React from 'react';
import PropTypes from 'prop-types';

import styles from '../Companyes.scss';

const Card = ({ data, type }) => {
  const {
    upKg,
    sale,
    title,
    price,
    years,
    maxWeight,
    upToPrice,
    upOverPrice,
  } = data;

  return (
    <div className={styles.wrapper__cards_item}>
      <h2 className={styles.wrapper__cards_item_title}>{title}</h2>
      <p className={styles.wrapper__cards_item_text}>
        Стоимость 1 километра {price} рубля.
      </p>
      {upToPrice ? (
        <>
          <p className={styles.wrapper__cards_item_text}>
            Стоимость провоза багажа до {upKg} кг {upToPrice}.
          </p>
          <p className={styles.wrapper__cards_item_text}>
            Стоимость провоза багажа свыше {upKg} кг {upOverPrice} рублей
            {type === 'rjd' && (
              <span>{title === 'Продвинутый' ? 'за кг' : 'за 1 кг'}</span>
            )}
            .
          </p>
        </>
      ) : (
        <p className={styles.wrapper__cards_item_text}>
          Стоимость провоза багажа бесплатно.
        </p>
      )}
      <p className={styles.wrapper__cards_item_text}>
        Максимальный вес багажа {maxWeight} кг
      </p>
      {sale && (
        <p className={styles.wrapper__cards_item_text}>
          Детям до {years} лет скидка {sale}% (без учета багажа).
        </p>
      )}
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
  sale: PropTypes.number,
  title: PropTypes.string,
  years: PropTypes.number,
  price: PropTypes.number,
  type: PropTypes.string,
  maxWeight: PropTypes.number,
  upToPrice: PropTypes.string,
  upOverPrice: PropTypes.number,
};

Card.defaultProps = {
  data: {},
  sale: undefined,
  title: undefined,
  years: undefined,
  price: undefined,
  type: undefined,
  maxWeight: undefined,
  upToPrice: undefined,
  upOverPrice: undefined,
};

export default Card;
