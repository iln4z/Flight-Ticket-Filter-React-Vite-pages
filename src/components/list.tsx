import React from "react";
import { useAppSelector } from "../store/hooks";
import TicketItem from "./item";
import { selectFilteredTickets, selectLoading } from "../store/ticket";

const TicketList: React.FC = () => {
  const tickets = useAppSelector(selectFilteredTickets);
  const loading = useAppSelector(selectLoading);

  return (
    <div className="ticket-list">
      {loading && <div className="loading">Загрузка билетов</div>}

      {!loading && tickets.length === 0 ? (
        <div className="no-tickets">Рейсов не найдено</div>
      ) : (
        <>
          {tickets.map((ticket) => (
            <TicketItem key={ticket.id} ticket={ticket} />
          ))}
          <button className="load-more-btn">
            <span className="desktop-only">Загрузить еще билеты</span>
          </button>
        </>
      )}
    </div>
  );
};

export default TicketList;
