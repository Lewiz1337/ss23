# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Список используемых библиотек

- React / ts
- Redux Toolkit
- Redux-saga
- React-router
- React-helmet
- sass/scss
- classNames
- axios

# Приложение задеплоено на natlify [Ссылка](https://fantastic-tarsier-53c599.netlify.app/)

# В приложении реализовано:

- Авторизация (access_token сохраняется в localStorage и добавляется ко всем запросам в header)
- Фильтрация
- Поиск
- Сохранение избранных вакансий в localStorage
- Loader (Loader на загрузку вакансий на главной странице заменен на скелетон)
- URL навигация (в url передаются searchParams, которые могут изменять фильтры, страницу и поиск. Это дает возможность пользователю переходить по ссылке с уже установленными фильтрами)
  # P.S URL НАВИГАЦИЯ НА ХОСТИНГЕ NATLIFY НЕ РАБОТАЕТ ! При переходе на конкретную страницу по url адресу реализован переход на главную страницу без searchParams (см. Файл public/\_redirects )
