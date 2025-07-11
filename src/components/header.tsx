import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/air.png" alt="Air Logo" />
      </div>
      <h1>Поиск авиабилетов</h1>
    </header>
  );
};

export default Header;
