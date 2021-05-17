import { InputProps } from 'antd';
import { FC, ReactElement } from 'react';
import { IRadio } from 'redux/radio/types';
import { isEmptyArray } from 'utils/helper';
import SearchItem from './SearchItem';
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
    if (onSuggestionClick) onSuggestionClick(radio);
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
            <SearchItem
              key={radio.id}
              radio={radio}
              onClick={() => handleClick(radio)}
            />
          ))}
        </SearchSuggestion>
      )}
    </SearchWrapper>
  );
};
export default SearchBar;
