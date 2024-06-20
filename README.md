# react-hw5
homework react 5



actions/themeActions.js:

Определяем тип действия TOGGLE_THEME и создаем действие toggleTheme, которое возвращает объект действия.
reducers/themeReducer.js:

Создаем редьюсер themeReducer, который обрабатывает действие TOGGLE_THEME и изменяет состояние темы в зависимости от текущего состояния.
store.js:

Создаем Redux store с использованием нашего редьюсера темы.
ThemeSwitcher.jsx:

Используем useSelector для доступа к текущей теме из состояния Redux и useDispatch для отправки действия toggleTheme.
Используем компоненты ThemeProvider и CssBaseline из Material UI для применения темы.
Добавляем кнопку, которая переключает тему при нажатии.
App.jsx:

Оборачиваем наше приложение в Provider из react-redux и передаем ему наш Redux store.
Рендерим компонент ThemeSwitcher.
index.js:

Импортируем основной компонент приложения (App) и рендерим его в корневой элемент HTML.
