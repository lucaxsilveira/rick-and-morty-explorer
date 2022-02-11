import React from 'react';

import { CharacterContextProvider } from './character';

const AppContext: React.FC = ({ children }) => {
  return <CharacterContextProvider>{children}</CharacterContextProvider>;
};

export default AppContext;
