import Control, { IControlProps } from 'components/control/Control';
import Spectrum, { ISpectrumProps } from 'components/spectrum/Spectrum';
import { FC, ReactElement } from 'react';
import PlayerWrapper from './styled';

interface IPlayerProps extends ISpectrumProps, IControlProps {
  spectrum?: boolean;
}

const Player: FC<IPlayerProps> = ({
  spectrum = false,
  color,
  isFavorite,
  isPlaying,
  onFavorite,
  onPlay,
  onReport,
}): ReactElement => (
  <PlayerWrapper>
    <div>
      {spectrum && <Spectrum color={color} isPlaying={isPlaying} />}
      <Control
        isFavorite={isFavorite}
        isPlaying={isPlaying}
        onFavorite={onFavorite}
        onPlay={onPlay}
        onReport={onReport}
      />
    </div>
  </PlayerWrapper>
);

export default Player;
