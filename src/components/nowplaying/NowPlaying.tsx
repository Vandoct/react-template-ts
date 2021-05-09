import { FC, ReactElement } from 'react';
import NowPlayingWrapper from './styled';

interface INowPlaying {
  image: string;
  title: string;
  currentSong: string;
}

const NowPlaying: FC<INowPlaying> = ({
  image,
  title,
  currentSong,
}): ReactElement => (
  <NowPlayingWrapper>
    <div>
      <img src={image} alt="Radio Logo" />
      <p>{title}</p>
      <p>{currentSong}</p>
    </div>
  </NowPlayingWrapper>
);

export default NowPlaying;
