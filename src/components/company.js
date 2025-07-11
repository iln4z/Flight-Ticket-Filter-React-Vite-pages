import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleCompanyFilter } from "../store/ticket";
const CompaniesFilter = () => {
    const dispatch = useAppDispatch();
    const companies = useAppSelector((state) => state.tickets.filters.companies);
    const companyOptions = [
        { id: "Победа", name: "Победа" },
        { id: "Red Wings", name: "Red Wings" },
        { id: "S7 Airlines", name: "S7 Airlines" },
    ];
    return (_jsx("div", { className: "filter-options", children: companyOptions.map((company) => (_jsxs("div", { className: "filter-option", children: [_jsx("input", { type: "checkbox", id: `company-${company.id}`, checked: companies.includes(company.id), onChange: () => dispatch(toggleCompanyFilter(company.id)) }), _jsx("label", { htmlFor: `company-${company.id}`, children: company.name })] }, company.id))) }));
};
export default CompaniesFilter;
