import { InputProps } from 'antd';
import { FC, ReactElement } from 'react';
import { IRadio } from 'redux/radio/types';
import { isEmptyArray } from 'utils/helper';
import { SearchStyled, SearchSuggestion, SearchWrapper } from './styled';

interface ISearchSuggestionProps {
  suggestions?: IRadio[];
  onSuggestionClick?: (radio: IRadio) => void;
}

const SearchBar: FC<InputProps & ISearchSuggestionProps> = ({
  size,
  placeholder,
  prefix,
  suggestions = [],
  onSuggestionClick,
  ...rest
}): ReactElement => {
  const handleClick = (radio: IRadio) => {
    if (onSuggestionClick) onSuggestionClick({ ...radio, id: radio.title });
  };

  return (
    <SearchWrapper>
      <SearchStyled
        size={size}
        placeholder={placeholder}
        prefix={prefix}
        {...rest}
      />
      {!isEmptyArray(suggestions) && (
        <SearchSuggestion>
          {suggestions.map((radio) => (
            <div key={radio.id} onClick={() => handleClick(radio)}>
              <img src={radio.image} alt="Radio Logo" />
              <span>{radio.title}</span>
            </div>
          ))}
        </SearchSuggestion>
      )}
    </SearchWrapper>
  );
};
export default SearchBar;
