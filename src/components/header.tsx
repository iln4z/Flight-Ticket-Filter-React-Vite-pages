import React from "react";
import logo from './assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} />
      </div>
      <h1>Поиск авиабилетов</h1>
    </header>
  );
};

export default Header;
