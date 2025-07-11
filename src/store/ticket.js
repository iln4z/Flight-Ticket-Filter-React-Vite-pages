import { createAsyncThunk, createSlice, createEntityAdapter, createSelector, } from "@reduxjs/toolkit";
import { fetchTickets } from "./api";
const ticketsAdapter = createEntityAdapter();
const initialState = ticketsAdapter.getInitialState({
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
        toggleStopFilter: (state, action) => {
            const stops = state.filters.stops;
            state.filters.stops = stops.includes(action.payload)
                ? stops.filter((stop) => stop !== action.payload)
                : [...stops, action.payload];
        },
        toggleCompanyFilter: (state, action) => {
            const companies = state.filters.companies;
            state.filters.companies = companies.includes(action.payload)
                ? companies.filter((company) => company !== action.payload)
                : [...companies, action.payload];
        },
        setSort: (state, action) => {
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
export const { selectAll: selectAllTickets } = ticketsAdapter.getSelectors((state) => state.tickets);
export const selectFilters = (state) => state.tickets.filters;
export const selectLoading = (state) => state.tickets.loading;
export const selectFilteredTickets = createSelector([selectAllTickets, selectFilters], (tickets, filters) => {
    let result = [...tickets];
    if (filters.stops.length > 0) {
        result = result.filter((ticket) => {
            const stops = ticket.connectionAmount === null ? 0 : ticket.connectionAmount;
            return filters.stops.includes(stops);
        });
    }
    if (filters.companies.length > 0) {
        result = result.filter((ticket) => filters.companies.includes(ticket.company));
    }
    switch (filters.sort) {
        case "price":
            return [...result].sort((a, b) => a.price - b.price);
        case "duration":
            return [...result].sort((a, b) => a.duration - b.duration);
        case "optimal":
            return [...result].sort((a, b) => {
                const priceDiff = a.price - b.price;
                if (priceDiff !== 0)
                    return priceDiff;
                return a.duration - b.duration;
            });
        default:
            return result;
    }
});
export const { toggleStopFilter, toggleCompanyFilter, setSort } = ticketsSlice.actions;
export default ticketsSlice.reducer;
