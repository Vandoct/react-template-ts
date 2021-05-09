import { FC, ReactElement } from 'react';
import Radio, { IRadioProps } from './Radio';
import { RadioContainer } from './styled';

interface IListRadioProps {
  radios: IRadioProps[];
  onClick?: (url: string) => void;
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
