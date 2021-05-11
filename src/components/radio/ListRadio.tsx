import { FC, ReactElement } from 'react';
import { IRadio } from 'redux/radio/types';
import Radio from './Radio';
import { RadioContainer } from './styled';

interface IListRadioProps {
  radios: IRadio[];
  onClick?: (data: IRadio) => void;
}

const ListRadio: FC<IListRadioProps> = ({ radios, onClick }): ReactElement => (
  <RadioContainer>
    {radios.map((radio) => (
      <Radio
        key={radio.id}
        image={radio.image}
        title={radio.title}
        url={radio.url}
        onClick={onClick}
      />
    ))}
  </RadioContainer>
);

export default ListRadio;
