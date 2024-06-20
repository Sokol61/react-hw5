import { TOGGLE_THEME } from '../actions/themeActions';

// Начальное состояние темы (светлая тема по умолчанию)
const initialState = {
  isDarkTheme: false
};

// Редьюсер для обработки действия TOGGLE_THEME
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme
      };
    default:
      return state;
  }
};

export default themeReducer;
