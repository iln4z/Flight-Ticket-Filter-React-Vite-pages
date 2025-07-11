import React from "react";
import type { Ticket } from "../store/ticket";

const TicketItem: React.FC<{ ticket: Ticket }> = ({ ticket }) => {
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (mins === 0) return `${hours}ч`;
    if (hours === 0) return `${mins}м`;
    return `${hours}ч ${mins}м`;
  };

  const formatTime = (time: string) => {
    return time.slice(0, 5);
  };
  const getConnectionsText = (amount: number | null) => {
    if (amount === 0 || amount === null) return "Без пересадок";
    if (amount === 1) return "1 пересадка";
    return `${amount} пересадки`;
  };

  const getCompanyLogoPath = (companyName: string) => {
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

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <div className="ticket-price">
          {ticket.price.toLocaleString("ru-RU")} Р
        </div>
        <div className="ticket-company">
          <img
            src={getCompanyLogoPath(ticket.company)}
            alt={ticket.company}
            className="ticket-company-logo"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const fallback = document.createElement("span");
              fallback.className = "company-fallback";
              fallback.textContent = ticket.company;
              target.parentNode?.appendChild(fallback);
            }}
          />
        </div>
      </div>
      <div className="ticket-details">
        <div className="detail-column">
          <div className="detail-title">
            {ticket.from} - {ticket.to}
          </div>
          <div className="detail-value">
            {formatTime(ticket.time.startTime)} -{" "}
            {formatTime(ticket.time.endTime)}
          </div>
        </div>

        <div className="detail-column">
          <div className="detail-title">В пути</div>
          <div className="detail-value">{formatDuration(ticket.duration)}</div>
        </div>

        <div className="detail-column">
          <div className="detail-title">Пересадки</div>
          <div className="detail-value">
            {getConnectionsText(ticket.connectionAmount)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketItem;
