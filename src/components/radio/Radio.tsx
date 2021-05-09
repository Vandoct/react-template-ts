import { FC, ReactElement } from 'react';
import { RadioWrapper } from './styled';

export interface IRadioProps {
  id?: number;
  image: string;
  title: string;
  url: string;
  onClick?: (url: string) => void;
}

const Radio: FC<IRadioProps> = ({
  image,
  title,
  url,
  onClick,
}): ReactElement => {
  const handleClick = () => {
    if (onClick) onClick(url);
  };

  return (
    <RadioWrapper onClick={handleClick}>
      <img src={image} alt="Radio Logo" />
      <p>{title}</p>
    </RadioWrapper>
  );
};

export default Radio;
