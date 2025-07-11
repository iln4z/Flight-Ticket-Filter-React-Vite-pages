import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleCompanyFilter } from "../store/ticket";

const CompaniesFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector((state) => state.tickets.filters.companies);

  const companyOptions = [
    { id: "Победа", name: "Победа" },
    { id: "Red Wings", name: "Red Wings" },
    { id: "S7 Airlines", name: "S7 Airlines" },
  ];

  return (
    <div className="filter-options">
      {companyOptions.map((company) => (
        <div key={company.id} className="filter-option">
          <input
            type="checkbox"
            id={`company-${company.id}`}
            checked={companies.includes(company.id)}
            onChange={() => dispatch(toggleCompanyFilter(company.id))}
          />
          <label htmlFor={`company-${company.id}`}>{company.name}</label>
        </div>
      ))}
    </div>
  );
};

export default CompaniesFilter;
