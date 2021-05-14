/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-loop-func */
/* eslint-disable no-continue */

import { ICategoryRadio } from 'redux/radio/types';

/* eslint-disable no-plusplus */
export const slugify = (...args: (string | number)[]): string => {
  const value = args.join(' ');

  return value
    .normalize('NFD') // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, '-'); // separator
};

export const generateUID = (): string => {
  return `_${Math.random().toString(36).substr(2, 9)}`;
};

export const isEmptyArray = (arr: unknown[]): boolean => {
  return arr === null || arr.length === 0;
};

export const isEmptyObject = (obj: Record<string, unknown>): boolean => {
  for (const prop in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
};

export const parseResponse = (data: string[][]): ICategoryRadio[] => {
  const category = data[0].filter((a) => a !== '');

  const key = data[1].filter((value, index, self) => {
    return self.indexOf(value) === index && value !== '';
  });

  const arr: Record<string, any>[] = [];
  for (let i = 2; i < data.length; i++) {
    let x: Record<string, any> = {};
    let counter = 0;
    let cat = 0;
    let check = 0;

    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] === '') {
        if (isEmptyObject(x)) {
          if (check === 1) {
            cat++;
          }

          if (check === 5) {
            check = 0;
          }

          check++;
          continue;
        }

        const idx = arr.findIndex((a) => a.category === category[cat]);
        if (idx !== -1) {
          arr[idx] = { ...arr[idx], radios: [...arr[idx].radios, x] };
        } else {
          arr.push({
            category: category[cat],
            radios: [x],
          });
        }

        x = {};
        counter = 0;
        cat++;
        continue;
      }

      x[key[counter++]] = data[i][j];

      if (j === data[i].length - 1) {
        const idx = arr.findIndex((a) => a.category === category[cat]);
        if (idx !== -1) {
          arr[idx] = { ...arr[idx], radios: [...arr[idx].radios, x] };
        } else {
          arr.push({
            category: category[cat],
            radios: [x],
          });
        }
      }
    }
  }

  return arr as ICategoryRadio[];
};

export const getTimestamp = (): string => {
  return new Date().toLocaleString('id-ID').replace(/\./g, ':');
};
