/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Popover } from 'antd';
import FavoriteIcon from 'assets/icon/favorite.svg';
import FavoriteOutlineIcon from 'assets/icon/favorite_outline.svg';
import MoreIcon from 'assets/icon/more.svg';
import PlayIcon from 'assets/icon/play.svg';
import StopIcon from 'assets/icon/stop.svg';
import { FC, ReactElement, useState } from 'react';
import ControlWrapper from './styled';

export interface IControlProps {
  isFavorite?: boolean;
  isPlaying?: boolean;
  onFavorite?: () => void;
  onPlay?: () => void;
  onReport?: () => void;
}

const Control: FC<IControlProps> = ({
  isFavorite = false,
  isPlaying = false,
  onFavorite,
  onPlay,
  onReport,
}): ReactElement => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (value: boolean) => {
    setVisible(value);
  };

  const handleReportClick = () => {
    setVisible(false);
    if (onReport) onReport();
  };

  return (
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
      <Popover
        visible={visible}
        onVisibleChange={handleVisibleChange}
        content={
          <div>
            <p onClick={handleReportClick}>Report Error</p>
          </div>
        }
        trigger="click">
        <img src={MoreIcon} alt="More Icon" />
      </Popover>
    </ControlWrapper>
  );
};

export default Control;
