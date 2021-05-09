/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import FavoriteIcon from 'assets/icon/favorite.svg';
import FavoriteOutlineIcon from 'assets/icon/favorite_outline.svg';
import MoreIcon from 'assets/icon/more.svg';
import PlayIcon from 'assets/icon/play.svg';
import StopIcon from 'assets/icon/stop.svg';
import { FC, ReactElement } from 'react';
import ControlWrapper from './styled';

export interface IControlProps {
  isFavorite?: boolean;
  isPlaying?: boolean;
  onFavorite?: () => void;
  onPlay?: () => void;
  onMore?: () => void;
}

const Control: FC<IControlProps> = ({
  isFavorite = false,
  isPlaying = false,
  onFavorite,
  onPlay,
  onMore,
}): ReactElement => (
  <ControlWrapper>
    <img
      src={isFavorite ? FavoriteIcon : FavoriteOutlineIcon}
      alt="Favorite Icon"
      onClick={onFavorite}
    />
    <img
      src={isPlaying ? StopIcon : PlayIcon}
      alt="Play / Stop Icon"
      onClick={onPlay}
    />
    <img src={MoreIcon} alt="More Icon" onClick={onMore} />
  </ControlWrapper>
);

export default Control;
