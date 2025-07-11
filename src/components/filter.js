import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CompaniesFilter from "./company";
import StopsFilter from "./noneFilter";
const Filters = () => {
    return (_jsxs("div", { className: "filters-container", children: [_jsxs("div", { className: "filter-section", children: [_jsx("h3", { children: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043E\u043A" }), _jsx(StopsFilter, {})] }), _jsxs("div", { className: "filter-section radio", children: [_jsx("h3", { children: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438" }), _jsx(CompaniesFilter, {})] })] }));
};
export default Filters;
