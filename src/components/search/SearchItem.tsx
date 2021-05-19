import NotFoundIllustration from 'assets/icon/not_found.svg';
import { FC, ReactElement, useState } from 'react';
import { IRadio } from 'redux/radio/types';

interface ISearchItemProps {
  radio: IRadio;
  onClick: () => void;
}

const SearchItem: FC<ISearchItemProps> = ({ radio, onClick }): ReactElement => {
  const [source, setSource] = useState(radio.image);

  const handleImageError = () => {
    setSource(NotFoundIllustration);
  };

  return (
    <div onClick={onClick}>
      <img src={source} alt="Radio Logo" onError={handleImageError} />
      <span>{radio.title}</span>
    </div>
  );
};

export default SearchItem;
