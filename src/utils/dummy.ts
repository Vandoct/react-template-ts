import { generateImagePlaceholder } from './generator';

export const radios = [
  {
    category: 'Indonesian',
    channels: [
      {
        id: 1,
        image: generateImagePlaceholder(200, 200),
        title: 'Radio A',
        url:
          'https://wow4.mahakaradiointegra.com:1936/web_genfm/genfm/playlist.m3u8',
      },
      {
        id: 2,
        image: generateImagePlaceholder(200, 200),
        title: 'Radio B',
        url: 'http://masima.rastream.com/masima-pramborsjakarta',
      },
      {
        id: 3,
        image: generateImagePlaceholder(200, 200),
        title: 'Radio C',
        url: 'https://stream.radiojar.com/u7d8heq3bnzuv',
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
        url: 'http://shirayuki.org:9200/listen.pls?sid=1',
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
