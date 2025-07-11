import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
  createEntityAdapter,
  createSelector,
  type EntityState,
} from "@reduxjs/toolkit";
import { fetchTickets } from "./api";
import type { RootState } from "./index";

export interface TicketTime {
  startTime: string;
  endTime: string;
}

export interface Ticket {
  id: number;
  from: string;
  to: string;
  company: string;
  price: number;
  currency: "RUB";
  time: TicketTime;
  duration: number;
  date: string;
  connectionAmount: number | null;
}

const ticketsAdapter = createEntityAdapter<Ticket>();

type TicketsState = EntityState<Ticket, number> & {
  loading: boolean;
  error: string | null;
  filters: {
    stops: number[];
    companies: string[];
    sort: "price" | "duration" | "optimal";
  };
};

const initialState: TicketsState = ticketsAdapter.getInitialState({
  loading: false,
  error: null,
  filters: {
    stops: [],
    companies: [],
    sort: "price",
  },
});

export const loadTickets = createAsyncThunk("tickets/fetchAll", async () => {
  return await fetchTickets();
});

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    toggleStopFilter: (state, action: PayloadAction<number>) => {
      const stops = state.filters.stops;
      state.filters.stops = stops.includes(action.payload)
        ? stops.filter((stop: number) => stop !== action.payload)
        : [...stops, action.payload];
    },
    toggleCompanyFilter: (state, action: PayloadAction<string>) => {
      const companies = state.filters.companies;
      state.filters.companies = companies.includes(action.payload)
        ? companies.filter((company: string) => company !== action.payload)
        : [...companies, action.payload];
    },
    setSort: (
      state,
      action: PayloadAction<"price" | "duration" | "optimal">
    ) => {
      state.filters.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTickets.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadTickets.fulfilled, (state, action) => {
        ticketsAdapter.setAll(state, action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(loadTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load tickets";
      });
  },
});

export const { selectAll: selectAllTickets } = ticketsAdapter.getSelectors(
  (state: RootState) => state.tickets
);

export const selectFilters = (state: RootState) => state.tickets.filters;
export const selectLoading = (state: RootState) => state.tickets.loading;

export const selectFilteredTickets = createSelector(
  [selectAllTickets, selectFilters],
  (tickets, filters) => {
    let result = [...tickets];

    if (filters.stops.length > 0) {
      result = result.filter((ticket) => {
        const stops =
          ticket.connectionAmount === null ? 0 : ticket.connectionAmount;
        return filters.stops.includes(stops);
      });
    }

    if (filters.companies.length > 0) {
      result = result.filter((ticket) =>
        filters.companies.includes(ticket.company)
      );
    }

    switch (filters.sort) {
      case "price":
        return [...result].sort((a, b) => a.price - b.price);

      case "duration":
        return [...result].sort((a, b) => a.duration - b.duration);

      case "optimal":
        return [...result].sort((a, b) => {
          const priceDiff = a.price - b.price;
          if (priceDiff !== 0) return priceDiff;
          return a.duration - b.duration;
        });

      default:
        return result;
    }
  }
);

export const { toggleStopFilter, toggleCompanyFilter, setSort } =
  ticketsSlice.actions;
export default ticketsSlice.reducer;
