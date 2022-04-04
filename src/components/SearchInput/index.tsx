import React, { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: ({ target: { value } }: any) => void
}

const SearchInput: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ onChange }, ref) => {
  return <input
    ref={ref}
    onChange={onChange}
    type="text"
    placeholder="Digite o nome do personagem"
  />;

};

export default forwardRef(SearchInput);