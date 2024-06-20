import { createStore } from 'redux';
import themeReducer from './reducers/themeReducer';

// Создаем Redux store с использованием нашего редьюсера темы
const store = createStore(themeReducer);

export default store;
