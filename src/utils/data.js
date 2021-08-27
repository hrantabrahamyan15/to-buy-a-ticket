import shortid from 'shortid';

import inputValidation from './inputValidation';

const { zip } = inputValidation;

export const formInfo = [
  {
    id: shortid.generate(),
    name: 'kilometr',
    label: 'Количество километров',
    validation: zip,
    placeholder: '2',
  },
  {
    id: shortid.generate(),
    name: 'age',
    label: 'Возраст',
    validation: zip,
    placeholder: '20',
  },
  {
    id: shortid.generate(),
    name: 'weight',
    label: 'Вес багажа кг',
    validation: zip,
    placeholder: '40',
  },
];

export const aeroflotInfo = [
  {
    id: shortid.generate(),
    price: 4,
    upKg: 5,
    upToPrice: 'бесплатно',
    upOverPrice: 4000,
    maxWeight: 20,
    title: 'Эконом',
  },
  {
    id: shortid.generate(),
    price: 8,
    upKg: 20,
    upToPrice: 'бесплатно',
    upOverPrice: 5000,
    maxWeight: 50,
    sale: 30,
    years: 7,
    title: 'Продвинутый',
  },
  {
    id: shortid.generate(),
    price: 15,
    upKg: 50,
    upPrice: 'бесплатно',
    maxWeight: 50,
    sale: 30,
    years: 16,
    title: 'Люкс',
  },
];

export const rjdInfo = [
  {
    id: shortid.generate(),
    price: 0.5,
    upKg: 15,
    upToPrice: 'бесплатно',
    upOverPrice: 50,
    maxWeight: 50,
    sale: 50,
    years: 5,
    title: 'Эконом',
  },
  {
    id: shortid.generate(),
    price: 2,
    upKg: 20,
    upToPrice: 'бесплатно',
    upOverPrice: 50,
    maxWeight: 60,
    sale: 30,
    years: 8,
    title: 'Продвинутый',
  },
  {
    id: shortid.generate(),
    price: 4,
    upPrice: 'бесплатно',
    maxWeight: 60,
    sale: 20,
    years: 16,
    title: 'Люкс',
  },
];
