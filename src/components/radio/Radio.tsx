import { FC, ReactElement } from 'react';
import { IRadio } from 'redux/radio/types';
import { RadioWrapper } from './styled';

interface IRadioProps {
  image: string;
  title: string;
  url: string;
  onClick?: (data: IRadio) => void;
}

const Radio: FC<IRadioProps> = ({
  image,
  title,
  url,
  onClick,
}): ReactElement => {
  const handleClick = () => {
    if (onClick) {
      const data: IRadio = {
        id: title,
        image,
        title,
        url,
      };
      onClick(data);
    }
  };

  return (
    <RadioWrapper onClick={handleClick}>
      <img src={image} alt="Radio Logo" />
      <p>{title}</p>
    </RadioWrapper>
  );
};

export default Radio;
