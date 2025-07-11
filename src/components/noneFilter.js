import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleStopFilter } from "../store/ticket";
const StopsFilter = () => {
    const dispatch = useAppDispatch();
    const stops = useAppSelector((state) => state.tickets.filters.stops);
    const stopsOptions = [
        { value: 0, label: "Без пересадок" },
        { value: 1, label: "1 пересадка" },
        { value: 2, label: "2 пересадки" },
        { value: 3, label: "3 пересадки" },
    ];
    return (_jsx("div", { className: "filter-options", children: stopsOptions.map((option) => (_jsxs("div", { className: "filter-option", children: [_jsx("input", { type: "checkbox", id: `stop-${option.value}`, checked: stops.includes(option.value), onChange: () => dispatch(toggleStopFilter(option.value)) }), _jsx("label", { htmlFor: `stop-${option.value}`, children: option.label })] }, option.value))) }));
};
export default StopsFilter;
