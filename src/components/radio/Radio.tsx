import NotFoundIllustration from 'assets/icon/not_found.svg';
import { FC, ReactElement, useState } from 'react';
import { IRadio } from 'redux/radio/types';
import { RadioWrapper } from './styled';

interface IRadioProps {
  radio: IRadio;
  onClick?: (data: IRadio) => void;
}

const Radio: FC<IRadioProps> = ({ radio, onClick }): ReactElement => {
  const [source, setSource] = useState(radio.image);

  const handleImageError = () => {
    setSource(NotFoundIllustration);
  };

  const handleClick = () => {
    if (onClick) onClick(radio);
  };

  return (
    <RadioWrapper onClick={handleClick}>
      <img src={source} alt="Radio Logo" onError={handleImageError} />
      <p>{radio.title}</p>
    </RadioWrapper>
  );
};

export default Radio;
