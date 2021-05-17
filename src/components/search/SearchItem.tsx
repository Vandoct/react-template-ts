import { FC, ReactElement, useState } from 'react';
import { IRadio } from 'redux/radio/types';
import { generateImagePlaceholder } from 'utils/generator';

interface ISearchItemProps {
  radio: IRadio;
  onClick: () => void;
}

const SearchItem: FC<ISearchItemProps> = ({ radio, onClick }): ReactElement => {
  const [source, setSource] = useState(radio.image);

  const handleImageError = () => {
    setSource(generateImagePlaceholder(50, 50));
  };

  return (
    <div onClick={onClick}>
      <img src={source} alt="Radio Logo" onError={handleImageError} />
      <span>{radio.title}</span>
    </div>
  );
};

export default SearchItem;
