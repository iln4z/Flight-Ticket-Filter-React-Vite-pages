import type { Ticket } from "./ticket";

export const fetchTickets = async (): Promise<Ticket[]> => {
  console.log("Fetching tickets...");

  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: 1,
      from: "SVO",
      to: "LED",
      company: "Победа",
      price: 12680,
      currency: "RUB",
      time: { startTime: "12:00", endTime: "16:30" },
      duration: 270,
      date: "2025-06-20",
      connectionAmount: 1,
    },
    {
      id: 2,
      from: "SVO",
      to: "LED",
      company: "Red Wings",
      price: 21500,
      currency: "RUB",
      time: { startTime: "14:00", endTime: "16:00" },
      duration: 120,
      date: "2025-06-20",
      connectionAmount: 0,
    },
    {
      id: 3,
      from: "SVO",
      to: "LED",
      company: "S7 Airlines",
      price: 23995,
      currency: "RUB",
      time: { startTime: "04:50", endTime: "13:30" },
      duration: 255,
      date: "2025-06-20",
      connectionAmount: 2,
    },
  ];
};
