import React from "react";
import CompaniesFilter from "./company";
import StopsFilter from "./noneFilter";

const Filters: React.FC = () => {
  return (
    <div className="filters-container">
      <div className="filter-section">
        <h3>Количество пересадок</h3>
        <StopsFilter />
      </div>
      <div className="filter-section radio">
        <h3>Компании</h3>
        <CompaniesFilter />
      </div>
    </div>
  );
};

export default Filters;
