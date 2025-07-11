import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import Header from "./components/header";
import TicketList from "./components/list";
import Filters from "./components/filter";
import SortPanel from "./components/sort";
import { useAppDispatch } from "./store/hooks";
import { loadTickets } from "./store/ticket";
import "./App.css";
const App = () => {
    const dispatch = useAppDispatch();
    const [filtersOpen, setFiltersOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        dispatch(loadTickets());
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [dispatch]);
    return (_jsxs("div", { className: "app", children: [_jsx(Header, {}), _jsxs("div", { className: "content-wrapper", children: [!isMobile && (_jsx("aside", { className: "sidebar", children: _jsx(Filters, {}) })), _jsxs("main", { className: "content", children: [isMobile && (_jsx("div", { className: "mobile-sort-panel", children: _jsx(SortPanel, {}) })), isMobile && (_jsxs("div", { className: "mobile-filters-header", onClick: () => setFiltersOpen(!filtersOpen), children: [_jsx("div", { className: "filter-summary", children: "\u041B\u044E\u0431\u0430\u044F \u0430\u0432\u0438\u0430\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u043B\u044E\u0431\u043E\u0435 \u043A\u043E\u043B-\u0432\u043E \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043E\u043A" }), _jsx("div", { className: "mobile-filter-toggle", children: filtersOpen ? "Скрыть настройки" : "Открыть настройки" })] })), !isMobile && _jsx(SortPanel, {}), _jsx(TicketList, {})] })] }), isMobile && filtersOpen && (_jsx("div", { className: "modal-overlay", onClick: () => setFiltersOpen(false), children: _jsxs("div", { className: "filters-modal", onClick: (e) => e.stopPropagation(), children: [_jsxs("div", { className: "modal-header", children: [_jsx("h2", { children: "\u0424\u0438\u043B\u044C\u0442\u0440\u044B" }), _jsx("button", { className: "close-modal", onClick: () => setFiltersOpen(false), children: "\u00D7" })] }), _jsx(Filters, {})] }) }))] }));
};
export default App;
