import { ActionTypes } from "../contants/action-types";

const initialState = {
  isLoading: false,
  products: [],
  quantity: 0,
  total: 0,
};

export const cartReducer = (
  state = initialState,
  { type, payload, quantity }
) => {
  switch (type) {
    case ActionTypes.LOADING_CART:
      return {
        ...state,
        products: [],
        isLoading: true,
      };
    case ActionTypes.SYNC_DB_CART:
      console.log(payload);
      console.log(payload);
      const sumQuantity1 = (payload) => {
        let sum = 0;
        payload.map((item) => {
          console.log(item.quantity);
          sum += item.quantity;
          console.log(sum);
        });
        console.log(sum);
        return sum;
      };
      const sumCost1 = (payload) => {
        let sum = 0;
        payload.map((item) => {
          console.log(item.quantity);
          sum += item.quantity * item.selectedProduct.price;
          console.log(sum);
        });
        return sum;
      };

      console.log(sumCost1(payload));

      return {
        ...state,
        products: payload,
        quantity: sumQuantity1(payload),
        total: sumCost1(payload),

        isLoading: true,
      };
    case ActionTypes.LOADING_SUCCESS_CART:
      const sumQuantity = (payload) => {
        let sum = 0;
        payload.map((item) => {
          console.log(item.quantity);
          sum += item.quantity;
          console.log(sum);
        });
        console.log(sum);
        return sum;
      };


    case ActionTypes.ADD_TO_CART:
      console.log(payload.price);
      console.log(payload.quantity);
      console.log(payload._id);
      console.log(state);
      console.log(state.products);
      console.log(payload);

      let itemFound;
      console.log(state.products);
      if (state.products) {
        state.products.map((item) => {
          if (item.selectedProduct._id === payload.selectedProduct._id) {
            itemFound = item;
          }
        });
      }
      console.log(itemFound);

      console.log(state.products);
      return {
        ...state,
        quantity: state.quantity + payload.quantity,
        products: state.products
          ? itemFound
            ? state.products.map((item, i) =>
                item.selectedProduct._id === payload.selectedProduct._id
                  ? { ...item, quantity: item.quantity + payload.quantity }
                  : item
              )
            : [...state.products, payload]
          : [payload],

        total: state.total + payload.selectedProduct.price * payload.quantity,
        isLoading: false,
      };

    case ActionTypes.ADD_ONE_TO_CART:
      let itemFoundAddOne;
      console.log(state.products);
      if (state.products) {
        state.products.map((item) => {
          if (
            item.selectedProduct._id ===
            payload.selectedProduct.selectedProduct._id
          ) {
            itemFoundAddOne = item;
          }
        });
      }
      console.log(itemFoundAddOne);

      console.log(state.products);
      return {
        ...state,
        quantity: state.quantity + 1,
        products: state.products
          ? itemFoundAddOne
            ? state.products.map((item, i) =>
                item.selectedProduct._id ===
                payload.selectedProduct.selectedProduct._id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            : [...state.products]
          : [...state.products],

        total: state.total + payload.selectedProduct.selectedProduct.price * 1,
        isLoading: false,
      };

    case ActionTypes.REMOVE_FROM_CART:
      let itemFoundRemove;
      console.log(state.products);
      console.log();
      if (state.products) {
        state.products.map((item) => {
          if (
            item.selectedProduct._id ===
            payload.selectedProduct.selectedProduct._id
          ) {
            itemFoundRemove = item;
          }
        });
      }
      console.log(itemFoundRemove);

      console.log(state.products);
      console.log(
        state.products.filter(
          (item) =>
            item.selectedProduct._id !==
            payload.selectedProduct.selectedProduct._id
        )
      );
      return {
        ...state,
        quantity: state.quantity - payload.selectedProduct.quantity,
        products: state.products
          ? itemFoundRemove
            ? state.products.filter(
                (item) =>
                  item.selectedProduct._id !==
                  payload.selectedProduct.selectedProduct._id
              )
            : [...state.products]
          : [...state.products],

        total:
          state.total -
          payload.selectedProduct.selectedProduct.price *
            payload.selectedProduct.quantity,
        isLoading: false,
      };

    case ActionTypes.REMOVE_ONE_FROM_CART:
      console.log(payload.selectedProduct.price);
      console.log(payload.selectedProduct.quantity);
      console.log(payload.selectedProduct.selectedProduct._id);
      console.log(payload._id);
      console.log(state);
      console.log(state.products);
      console.log(payload);

      let itemFoundRemoveOne;
      console.log(state.products);
      if (state.products) {
        state.products.map((item) => {
          if (
            item.selectedProduct._id ===
            payload.selectedProduct.selectedProduct._id
          ) {
            itemFoundRemoveOne = item;
          }
        });
      }
      console.log(itemFoundRemoveOne);

      console.log(state.products);
      return {
        ...state,
        quantity: state.quantity - 1,
        products: state.products
          ? itemFoundRemoveOne
            ? state.products.map((item, i) =>
                item.selectedProduct._id ===
                payload.selectedProduct.selectedProduct._id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              )
            : [...state.products]
          : [...state.products],

        total: state.total - payload.selectedProduct.selectedProduct.price * 1,
        isLoading: false,
      };

    case ActionTypes.CLEAR_CART:
      return {
        ...state,
        products: [],
        quantity: 0,
        total: 0,
        isLoading: false,
      };

    default:
      return state;
  }
};
