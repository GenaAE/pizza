# pizza

1.Сделать страничку главную =
1.1. хедер спсок блюд
1.2. футер контакты и тд
1.3. бади категория пицц

2.  WARN

- главная стр категории плашки
- карусель
-

- навигация выполнена на useNavigate
  = как сделать на NavLink без потерь = что лучше использовать
  ПРИБЛУДЫ:
  чтобы вписывать названия продуктов вместо id в параметры
  WARN errorBoundary
  import { ErrorBoundary } from 'react-error-boundary';

  <ErrorBoundary fallback={<div>Something went wrong</div>}>

SCSS
Позиционирование
Блочная модель
Типографика
Оформление
Анимация
Разное
.selector-item {
/_ Позиционирование _/
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 100;

/_ Блочная модель _/
display: inline-block;
float: left;
width: 150px;
height: 150px;
margin: 25px;
padding: 25px;

/_ Типографика _/
font: normal 13px/1.5 "Helvetica", sans-serif;
font-style: normal;
font-size: 13px;
line-height: 1.5;
font-family: "Helvetica", sans-serif;
text-align: start;

/_ Оформление _/
color: #999999;
background-color: #e3e3e3;
border: 1px solid #333333;
border-radius: 5px;
opacity: 1;

/_ Анимация _/
transition: all 0.8s;

/_ Разное _/
will-change: auto;
}
