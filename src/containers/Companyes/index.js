import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { Button, Input, NextLink } from 'components/index';
import { rjdInfo, aeroflotInfo, formInfo } from 'utils/index';

import styles from './Companyes.scss';
import Card from './Card';
import CalculateCard from './CalculateCard';

const Companyes = () => {
  const router = useRouter();
  const { companyes } = router.query;
  const [isOpen, setIsOpen] = useState(false);
  const [isCalculate, setIsCalculate] = useState(false);
  const [calculatePriceInfo, setCalculatePriceInfo] = useState({
    kilometr: 0,
    age: 0,
    weight: 0,
  });

  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'all',
  });

  const { isValid } = formState;

  const onSubmit = (data) => {
    setCalculatePriceInfo(data);
    setIsOpen(true);
  };

  const calculateToggler = () => {
    setIsCalculate(true);
  };

  const activeCompanyInfo = companyes === 'rjd' ? rjdInfo : aeroflotInfo;
  const companyTitle =
    companyes === 'rjd'
      ? 'Железнодорожная компания РЖД'
      : 'Авиакомпания Аэрофлот';

  const renderCompanyInfoCards = activeCompanyInfo.map((item) => (
    <Card key={item.id} data={item} type={companyes} />
  ));

  const renderCalculateCards = activeCompanyInfo.map((item) => (
    <CalculateCard
      key={item.id}
      data={item}
      type={companyes}
      priceInfo={calculatePriceInfo}
    />
  ));

  const renderCalculateFormItems = formInfo.map(
    ({ id, name, validation, label, placeholder }) => (
      <div key={id} className={styles.wrapper__calculate_item}>
        <p>{label}</p>
        <Input
          type="number"
          name={name}
          refy={register(validation)}
          placeholder={placeholder}
        />
        <span>{errors[name]?.message}</span>
      </div>
    ),
  );

  const openCalculateForm = isOpen ? (
    <>
      <div className={styles.wrapper__cards}>{renderCalculateCards}</div>
      <NextLink className={styles.wrapper__cards_link} to="/">
        варианты перевозок
      </NextLink>
    </>
  ) : (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.wrapper__calculate}
    >
      {renderCalculateFormItems}
      <Button disabled={!isValid} type="submit">
        Рассчитывать
      </Button>
    </form>
  );

  return (
    <section>
      <div className={`${styles.wrapper} container`}>
        <h1 className={styles.wrapper__title}>{companyTitle}</h1>
        {isCalculate ? (
          openCalculateForm
        ) : (
          <>
            <div className={styles.wrapper__cards}>
              {renderCompanyInfoCards}
            </div>
            <Button onClick={calculateToggler} className={styles.calculate}>
              рассчитать стоимость
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default Companyes;
