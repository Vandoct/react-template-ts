import { generateImagePlaceholder } from './generator';

export const radios = [
  {
    category: 'Indonesian',
    channels: [
      {
        id: 1,
        image: generateImagePlaceholder(200, 200),
        title: 'Radio A',
        url: '#',
      },
      {
        id: 2,
        image: generateImagePlaceholder(200, 200),
        title: 'Radio B',
        url: '#',
      },
      {
        id: 3,
        image: generateImagePlaceholder(200, 200),
        title: 'Radio C',
        url: '#',
      },
    ],
  },
  {
    category: 'Western',
    channels: [
      {
        id: 4,
        image: generateImagePlaceholder(200, 200),
        title: 'Radio D',
        url: '#',
      },
      {
        id: 5,
        image: generateImagePlaceholder(200, 200),
        title: 'Radio E',
        url: '#',
      },
      {
        id: 6,
        image: generateImagePlaceholder(200, 200),
        title: 'Radio F',
        url: '#',
      },
    ],
  },
  {
    category: 'Korean',
    channels: [
      {
        id: 7,
        image: generateImagePlaceholder(200, 200),
        title: 'Radio G',
        url: '#',
      },
      {
        id: 8,
        image: generateImagePlaceholder(200, 200),
        title: 'Radio H',
        url: '#',
      },
      {
        id: 9,
        image: generateImagePlaceholder(200, 200),
        title: 'Radio I',
        url: '#',
      },
    ],
  },
];
