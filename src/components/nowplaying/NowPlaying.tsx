import NotFoundIllustration from 'assets/icon/not_found.svg';
import { FC, ReactElement, useEffect, useState } from 'react';
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
}): ReactElement => {
  const [source, setSource] = useState(image);

  useEffect(() => {
    setSource(image);
  }, [image]);

  const handleImageError = () => {
    setSource(NotFoundIllustration);
  };

  return (
    <NowPlayingWrapper>
      <div>
        <img src={source} alt="Radio Logo" onError={handleImageError} />
        <p>{title}</p>
        <p>{currentSong}</p>
      </div>
    </NowPlayingWrapper>
  );
};

export default NowPlaying;
