import { useState } from 'react';
import Input from '@/components/common/Input';
import { useParamsToUrl } from '@/hooks/useParamsToUrl';
import * as Styled from './style';

const SearchBar = () => {
  const [tilName, setTilName] = useState<string>('');

  const { addParamsToUrl } = useParamsToUrl();

  const handleSearch = (title: string) => {
    if (!tilName) return;
    addParamsToUrl({ title });
  };

  return (
    <Styled.Root
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(tilName);
      }}>
      <Input
        css={Styled.InputContainerStyles}
        inputStyles={Styled.InputStyles}
        placeholder="검색어를 입력하세요"
        endIcon="ic_search_2x"
        value={tilName}
        onChange={(e) => setTilName(e.target.value)}
        onClick={() => handleSearch(tilName)}
      />
    </Styled.Root>
  );
};

export default SearchBar;
