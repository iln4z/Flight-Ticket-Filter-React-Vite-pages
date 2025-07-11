import React, { useState, useEffect } from "react";
import Header from "./components/header";
import TicketList from "./components/list";
import Filters from "./components/filter";
import SortPanel from "./components/sort";
import { useAppDispatch } from "./store/hooks";
import { loadTickets } from "./store/ticket";
import "./App.css";

const App: React.FC = () => {
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

  return (
    <div className="app">
      <Header />
      <div className="content-wrapper">
        {!isMobile && (
          <aside className="sidebar">
            <Filters />
          </aside>
        )}

        <main className="content">
          {isMobile && (
            <div className="mobile-sort-panel">
              <SortPanel />
            </div>
          )}

          {isMobile && (
            <div
              className="mobile-filters-header"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <div className="filter-summary">
                Любая авиакомпания, любое кол-во пересадок
              </div>
              <div className="mobile-filter-toggle">
                {filtersOpen ? "Скрыть настройки" : "Открыть настройки"}
              </div>
            </div>
          )}

          {!isMobile && <SortPanel />}

          <TicketList />
        </main>
      </div>

      {isMobile && filtersOpen && (
        <div className="modal-overlay" onClick={() => setFiltersOpen(false)}>
          <div className="filters-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Фильтры</h2>
              <button
                className="close-modal"
                onClick={() => setFiltersOpen(false)}
              >
                &times;
              </button>
            </div>
            <Filters />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
