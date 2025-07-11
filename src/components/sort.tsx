import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setSort } from "../store/ticket";

const SortPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector((state) => state.tickets.filters.sort);

  type SortOption = {
    id: "price" | "duration" | "optimal";
    label: string;
    mobileLabel: string;
  };

  const sortOptions: SortOption[] = [
    { id: "price", label: "Самый дешевый", mobileLabel: "Самый дешевый" },
    { id: "duration", label: "Самый быстрый", mobileLabel: "Самый быстрый" },
    {
      id: "optimal",
      label: "Самый оптимальный",
      mobileLabel: "Самый оптимальный",
    },
  ];

  return (
    <div className="sort-container">
      {sortOptions.map((option) => (
        <div
          key={option.id}
          className={`sort-option ${currentSort === option.id ? "active" : ""}`}
          onClick={() => dispatch(setSort(option.id))}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default SortPanel;
