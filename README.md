
## [](https://github.com/maxkleshchyonok/pallet-port#about-marketplace) О проекте

Маркетплейс Palletport создан в рамках задания RS-Clone и является клоном польского маркетплейса Allegro.pl. 

Ключевые особенности маркетплейса:
-   Поиск и сортировка предложений поставщиков с учётом особенностей запросов покупателей 
-   Возможность пользователям быть как поставщиками, так и покупателями и управление этим функционалом в универсальном интерфейсе 
-   Система администрирования и модерации контента

Дизайн главной страницы, страницы информации о продукте и часть фильтров взяты из проекта [](https://github.com/maxkleshchyonok/online-store)Online-store. 

Технические особенности проекта и их оценка:

-   Бекэнд на Node.js + авторизация пользователей + база данных MongoBD - 210 баллов
-   API в формате Swagger (Open API 3): [](https://app.swaggerhub.com/apis/FOTEEV_1/1234/1)ссылка на SwaggerHub, ссылка на Postman - 200 баллов
-  Каталог, корзина, личные кабинеты пользователей - 210 баллов

Фронтенд написан на Typescript, бэкенд на JavaScript.

## [](https://fastidious-sunshine-fdc597.netlify.app/)Деплой фронтенда

-  https://palletport.netlify.app/

## [](https://ppback.onrender.com/)Деплой бекэнда
## [](https://express-hello-world-production-0fc2.up.railway.app/)Еще один

-  https://ppback.onrender.com/


## [](https://github.com/maxkleshchyonok/pallet-port#server-requirements)Требования к серверу

-   Node JS (16.18 и выше)

## [](https://github.com/maxkleshchyonok/pallet-port#server-installation)Установка фронтенда

-   Клонируйте репозиторий и установите необходимые модули 
  
    ```
     npm install
    ```
    
-   Запустите сайт
    
    ```
    npm run dev
    ```
    
-   Сайт доступен по адресу 
    
    ```
    http://localhost:8080
    ```
    

## [](https://github.com/maxkleshchyonok/pallet-port#server-installation)Установка сервера

-   Клонируйте репозиторий, перейдите в папку "backend" и установите необходимые модули 
  
    ```
     npm install
    ```
    
-   Запустите сервер
    
    ```
    npm run start
    ```
    
-   Сервер доступен по адресу 
    
    ```
    http://localhost:5300
    ```
    
-   Перечень возможных запросов к серверу и схемы объектов
    
    ```
    https://app.swaggerhub.com/apis/FOTEEV_1/Palletport/1
    https://www.postman.com/planetary-moon-925275/workspace/my-workspace/collection/25385346-21033c95-ce5a-43b9-b2b7-8352587ae778?ctx=documentation
    ```

## []()Лицензия

[](https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F_MIT)MIT

## Команда

https://github.com/Surewek Виталий - бэкенд-разработка

https://github.com/maxkleshchyonok Максим - фронтенд-разработка 

https://github.com/foteev Андрей - UI/UX, логика.
