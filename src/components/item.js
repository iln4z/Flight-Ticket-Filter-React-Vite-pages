import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const TicketItem = ({ ticket }) => {
    const formatDuration = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        if (mins === 0)
            return `${hours}ч`;
        if (hours === 0)
            return `${mins}м`;
        return `${hours}ч ${mins}м`;
    };
    const formatTime = (time) => {
        return time.slice(0, 5);
    };
    const getConnectionsText = (amount) => {
        if (amount === 0 || amount === null)
            return "Без пересадок";
        if (amount === 1)
            return "1 пересадка";
        return `${amount} пересадки`;
    };
    const getCompanyLogoPath = (companyName) => {
        switch (companyName) {
            case "Победа":
                return "./Победа.png";
            case "Red Wings":
                return "./Red_Wings.png";
            case "S7 Airlines":
                return "./S7_Airlines.png";
            default:
                return "";
        }
    };
    return (_jsxs("div", { className: "ticket-card", children: [_jsxs("div", { className: "ticket-header", children: [_jsxs("div", { className: "ticket-price", children: [ticket.price.toLocaleString("ru-RU"), " \u0420"] }), _jsx("div", { className: "ticket-company", children: _jsx("img", { src: getCompanyLogoPath(ticket.company), alt: ticket.company, className: "ticket-company-logo", onError: (e) => {
                                const target = e.target;
                                target.style.display = "none";
                                const fallback = document.createElement("span");
                                fallback.className = "company-fallback";
                                fallback.textContent = ticket.company;
                                target.parentNode?.appendChild(fallback);
                            } }) })] }), _jsxs("div", { className: "ticket-details", children: [_jsxs("div", { className: "detail-column", children: [_jsxs("div", { className: "detail-title", children: [ticket.from, " - ", ticket.to] }), _jsxs("div", { className: "detail-value", children: [formatTime(ticket.time.startTime), " -", " ", formatTime(ticket.time.endTime)] })] }), _jsxs("div", { className: "detail-column", children: [_jsx("div", { className: "detail-title", children: "\u0412 \u043F\u0443\u0442\u0438" }), _jsx("div", { className: "detail-value", children: formatDuration(ticket.duration) })] }), _jsxs("div", { className: "detail-column", children: [_jsx("div", { className: "detail-title", children: "\u041F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0438" }), _jsx("div", { className: "detail-value", children: getConnectionsText(ticket.connectionAmount) })] })] })] }));
};
export default TicketItem;
