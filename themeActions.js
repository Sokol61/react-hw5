// Определяем тип действия
export const TOGGLE_THEME = 'TOGGLE_THEME';

// Создаем действие для переключения темы
export const toggleTheme = () => {
  return {
    type: TOGGLE_THEME
  };
};
