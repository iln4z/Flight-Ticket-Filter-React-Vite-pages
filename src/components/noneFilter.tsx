import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleStopFilter } from "../store/ticket";

const StopsFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const stops = useAppSelector((state) => state.tickets.filters.stops);

  const stopsOptions = [
    { value: 0, label: "Без пересадок" },
    { value: 1, label: "1 пересадка" },
    { value: 2, label: "2 пересадки" },
    { value: 3, label: "3 пересадки" },
  ];

  return (
    <div className="filter-options">
      {stopsOptions.map((option) => (
        <div key={option.value} className="filter-option">
          <input
            type="checkbox"
            id={`stop-${option.value}`}
            checked={stops.includes(option.value)}
            onChange={() => dispatch(toggleStopFilter(option.value))}
          />
          <label htmlFor={`stop-${option.value}`}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default StopsFilter;
