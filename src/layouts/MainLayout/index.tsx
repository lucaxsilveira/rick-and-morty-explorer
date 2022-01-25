import React from "react";

import { SearchStatus } from "iconsax-react";

import { Logo, Header } from "./styles";

const MainLayout: React.FC = ({ children }) => {
    return (
        <div className="container">
            <Header>
                <Logo>
                    <SearchStatus size="32" color="white" />
                    <span>
                        <strong>rick_and_morty</strong>_explorer
                    </span>
                </Logo>
            </Header>

            {children}
        </div>
    );
};

export default MainLayout;
