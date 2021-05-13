import { FC, ReactElement, useState } from 'react';
import { IRadio } from 'redux/radio/types';
import { generateImagePlaceholder } from 'utils/generator';
import { RadioWrapper } from './styled';

interface IRadioProps {
  radio: IRadio;
  onClick?: (data: IRadio) => void;
}

const Radio: FC<IRadioProps> = ({ radio, onClick }): ReactElement => {
  const [source, setSource] = useState(radio.image);

  const handleImageError = () => {
    setSource(generateImagePlaceholder(220, 220));
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
