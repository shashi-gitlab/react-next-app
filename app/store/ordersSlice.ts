import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OrderItem {
  id: number;
  title: string;
  category: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

export interface Order {
  id: string;
  userEmail: string;
  placedAt: string;
  status: string;
  total: number;
  shipping: number;
  payment: string;
  shippingAddress: string;
  items: OrderItem[];
}

interface OrdersState {
  items: Order[];
}

const storageKey = 'mvcart-orders-state';

const defaultState: OrdersState = {
  items: [],
};

const loadState = (): OrdersState => {
  if (typeof window === 'undefined') {
    return defaultState;
  }

  try {
    const storedState = window.localStorage.getItem(storageKey);
    if (!storedState) {
      return defaultState;
    }

    return JSON.parse(storedState) as OrdersState;
  } catch {
    return defaultState;
  }
};

const persistState = (state: OrdersState) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  }
};

const initialState: OrdersState = loadState();

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<Order>) {
      state.items.unshift(action.payload);
      persistState(state);
    },
  },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
