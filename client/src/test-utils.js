import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

const mockStore = configureMockStore([thunk, promiseMiddleware()]);

describe("User Actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
        auth: {
            username: "jojo",
            _id: "6343eaf79",
            userId: "444dcd33",
            accessToken: "eyJhbGcfdsnR5cgdfgdfsg",
            id: "6g4gvb",
          },
          cart: {
            isLoading: true,
            products: [],
            quantity: 0,
            total: 0,
          },
    });
  });



})
