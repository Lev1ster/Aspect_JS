# Aspect_JS

Реляционная СУБД Postgres\MS SQL\MY SQL с таблицами table1, table2. table3.
В каждой таблице есть поля id, name, description. Тип - строка

# Задание
1. Написать функцию на JavaScript для поиска записей в таблице БД.
Входные параметры - наименование таблицы БД и строка поиска.

Функция должна найти записи в заданной таблице, в которой строка поиска встречается в полях name или description.
Функция должна сформировать и выполнить SQL - запрос на основе входных параметров.
Результат функции должен быть в виде объекта с 2-мя полями:
  * **data** - массив из первых 20 найденных записей, отсортированных по алфавиту;
  * **count** - общее количество найденных записей в таблице.

2. Написать тесты для проверки работы функции п.1. Чем больше, тем лучше. Минимальный набор:
  * проверка на пустой результат (ничего не найдено);
  * Проверка когда результирующий список = количество найденных записей (в результате 5 записей, весего найдено 5)
  * проверка когда результирующий список < количество найденных записей (в результате 20 записей, всего найдено 25)

Время выполнения задания - 1-2 дня
