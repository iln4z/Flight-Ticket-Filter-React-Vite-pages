import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppSelector } from "../store/hooks";
import TicketItem from "./item";
import { selectFilteredTickets, selectLoading } from "../store/ticket";
const TicketList = () => {
    const tickets = useAppSelector(selectFilteredTickets);
    const loading = useAppSelector(selectLoading);
    return (_jsxs("div", { className: "ticket-list", children: [loading && _jsx("div", { className: "loading", children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0431\u0438\u043B\u0435\u0442\u043E\u0432" }), !loading && tickets.length === 0 ? (_jsx("div", { className: "no-tickets", children: "\u0420\u0435\u0439\u0441\u043E\u0432 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E" })) : (_jsxs(_Fragment, { children: [tickets.map((ticket) => (_jsx(TicketItem, { ticket: ticket }, ticket.id))), _jsx("button", { className: "load-more-btn", children: _jsx("span", { className: "desktop-only", children: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435 \u0431\u0438\u043B\u0435\u0442\u044B" }) })] }))] }));
};
export default TicketList;
