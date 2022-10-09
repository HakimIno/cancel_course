import { combineReducers } from "redux";
// import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
// slices
import loadingReducer from "./slices/loading";

// ----------------------------------------------------------------------

const rootPersistConfig = {
    key: "root",
    storage,
    keyPrefix: "redux-",
    whitelist: [],
};

// const productPersistConfig = {
//   key: 'product',
//   storage,
//   keyPrefix: 'redux-',
//   whitelist: ['sortBy', 'checkout'],
// };

const rootReducer = combineReducers({
    loading: loadingReducer,
    // product: persistReducer(productPersistConfig, productReducer),
});

export { rootPersistConfig, rootReducer };
