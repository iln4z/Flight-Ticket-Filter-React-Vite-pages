import { jsx as _jsx } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setSort } from "../store/ticket";
const SortPanel = () => {
    const dispatch = useAppDispatch();
    const currentSort = useAppSelector((state) => state.tickets.filters.sort);
    const sortOptions = [
        { id: "price", label: "Самый дешевый", mobileLabel: "Самый дешевый" },
        { id: "duration", label: "Самый быстрый", mobileLabel: "Самый быстрый" },
        {
            id: "optimal",
            label: "Самый оптимальный",
            mobileLabel: "Самый оптимальный",
        },
    ];
    return (_jsx("div", { className: "sort-container", children: sortOptions.map((option) => (_jsx("div", { className: `sort-option ${currentSort === option.id ? "active" : ""}`, onClick: () => dispatch(setSort(option.id)), children: option.label }, option.id))) }));
};
export default SortPanel;
