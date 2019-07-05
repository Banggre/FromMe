import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'; // persist(save, 저장하다) 'redux store' on the local disk of the phone
/*  redux-persist 부연설명
    → On the 'React' application, 새로고침을 하면 initial state로 자동 초기화가 된다. 
    → Why? React application에서는 redux-persist를 사용하지 않기 때문이다. */
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk';
import userReducer from './modules/user'
import cardReducer from './modules/card'

const middlewares = [ thunk ];

const rootReducer = combineReducers({user: userReducer, card: cardReducer});

const persistConfig = {
    key: 'root', // 데이터베이스(disk)에 접근할 수 있기 위한 키를 생성
    storage: storage
    // blacklist: ['modules...'] -> persist(save, 저장하다)할 reducer를 선택가능!
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // returns an enhanced reducer

const configureStore = ()  => {
    let store = createStore(persistedReducer, applyMiddleware(...middlewares))
    let persistor = persistStore(store);
    return { store, persistor }
};

export default configureStore;