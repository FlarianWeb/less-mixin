# Grid Mixins

Миксины для управления CSS Grid Layout - создания сеток и позиционирования элементов внутри них.

## Содержание

- [grid-template-columns](#grid-template-columns)
- [grid-template-rows](#grid-template-rows)
- [grid-template-areas](#grid-template-areas)
- [grid-column](#grid-column)
- [grid-row](#grid-row)
- [grid-auto-flow](#grid-auto-flow)
- [grid-auto-columns](#grid-auto-columns)
- [grid-auto-rows](#grid-auto-rows)

---

## grid-template-columns

**Назначение:** Определяет количество и размеры колонок в grid-сетке. Задаёт структуру grid-контейнера по горизонтали, включая ширину каждой колонки. Поддерживает различные единицы измерения, fr-единицы для гибких колонок и функции repeat(), minmax().

**Базовый миксин:**
- `.grid-cols(@value)` - определение колонок (px, %, fr, repeat(), minmax() и т.д.)

**Пресеты:**
- `.grid-cols-initial()` - начальное значение
- `.grid-cols-inherit()` - наследование от родителя
- `.grid-cols-unset()` - комбинация inherit/initial
- `.grid-cols-none()` - без явной сетки колонок
- `.grid-cols-subgrid()` - наследование сетки от родительского grid

---

## grid-template-rows

**Назначение:** Определяет количество и размеры рядов (строк) в grid-сетке. Задаёт структуру grid-контейнера по вертикали, включая высоту каждого ряда. Поддерживает различные единицы измерения, fr-единицы для гибких рядов и функции repeat(), minmax().

**Базовый миксин:**
- `.grid-rows(@value)` - определение рядов (px, %, fr, repeat(), minmax() и т.д.)

**Пресеты:**
- `.grid-rows-initial()` - начальное значение
- `.grid-rows-inherit()` - наследование от родителя
- `.grid-rows-unset()` - комбинация inherit/initial
- `.grid-rows-none()` - без явной сетки рядов
- `.grid-rows-subgrid()` - наследование сетки от родительского grid

---

## grid-template-areas

**Назначение:** Определяет именованные области grid-сетки с помощью визуального ASCII-представления структуры. Позволяет создавать семантическую разметку сетки с понятными названиями областей (header, sidebar, content и т.д.) вместо использования номеров линий. Элементы затем размещаются в этих областях с помощью grid-area.

**Базовые миксины:**
- `.grid-areas(@value)` - определение именованных областей (строка с названиями областей)
- `.grid-area(@value)` - назначение элемента в именованную область (имя области, номер линии или span)

**Глобальные пресеты grid-template-areas:**
- `.grid-areas-initial()` - начальное значение
- `.grid-areas-inherit()` - наследование от родителя
- `.grid-areas-unset()` - комбинация inherit/initial
- `.grid-areas-none()` - без именованных областей

**Глобальные пресеты grid-area:**
- `.grid-area-initial()` - начальное значение
- `.grid-area-inherit()` - наследование от родителя
- `.grid-area-unset()` - комбинация inherit/initial
- `.grid-area-auto()` - автоматическое размещение

---

## grid-column

**Назначение:** Управляет позицией и размером grid-элемента по колонкам. Определяет, на каких колонках сетки размещается элемент - где начинается, где заканчивается, или сколько колонок занимает. Объединяет функциональность grid-column-start и grid-column-end.

**Базовые миксины:**
- `.grid-col(@value)` - полное определение (start / end или span)
- `.grid-col-start(@value)` - стартовая линия колонки (номер линии)
- `.grid-col-end(@value)` - конечная линия колонки (номер линии)

**Глобальные пресеты:**
- `.grid-col-initial()` / `.grid-col-start-initial()` / `.grid-col-end-initial()` - начальное значение
- `.grid-col-inherit()` / `.grid-col-start-inherit()` / `.grid-col-end-inherit()` - наследование от родителя
- `.grid-col-unset()` / `.grid-col-start-unset()` / `.grid-col-end-unset()` - комбинация inherit/initial

**Пресеты grid-column:**
- `.grid-col-auto()` - автоматическое размещение

---

## grid-row

**Назначение:** Управляет позицией и размером grid-элемента по рядам. Определяет, на каких рядах сетки размещается элемент - где начинается, где заканчивается, или сколько рядов занимает. Объединяет функциональность grid-row-start и grid-row-end.

**Базовые миксины:**
- `.grid-row(@value)` - полное определение (start / end или span)
- `.grid-row-start(@value)` - стартовая линия ряда (номер линии)
- `.grid-row-end(@value)` - конечная линия ряда (номер линии)

**Глобальные пресеты:**
- `.grid-row-initial()` / `.grid-row-start-initial()` / `.grid-row-end-initial()` - начальное значение
- `.grid-row-inherit()` / `.grid-row-start-inherit()` / `.grid-row-end-inherit()` - наследование от родителя
- `.grid-row-unset()` / `.grid-row-start-unset()` / `.grid-row-end-unset()` - комбинация inherit/initial

**Пресеты grid-row:**
- `.grid-row-auto()` - автоматическое размещение

---

## grid-auto-flow

**Назначение:** Определяет алгоритм автоматического размещения grid-элементов, которым не задана явная позиция. Контролирует направление потока (по рядам или колонкам) и использование алгоритма плотной упаковки для заполнения пропусков.

**Базовый миксин:**
- `.grid-flow(@value)` - алгоритм размещения (row, column, dense, row dense, column dense)

**Пресеты:**
- `.grid-flow-initial()` - начальное значение
- `.grid-flow-inherit()` - наследование от родителя
- `.grid-flow-unset()` - комбинация inherit/initial
- `.grid-flow-row()` - размещать по рядам (по умолчанию)
- `.grid-flow-col()` - размещать по колонкам
- `.grid-flow-dense()` - плотная упаковка
- `.grid-flow-row-dense()` - размещать по рядам с плотной упаковкой
- `.grid-flow-col-dense()` - размещать по колонкам с плотной упаковкой

---

## grid-auto-columns

**Назначение:** Определяет размер автоматически создаваемых колонок в grid-сетке. Когда grid-элементы размещаются вне явно определённых колонок, их ширина задаётся этим свойством. Полезно для динамических сеток с неизвестным количеством колонок.

**Базовый миксин:**
- `.grid-auto-cols(@value)` - размер автоколонок (px, %, fr, min-content, max-content и т.д.)

**Пресеты:**
- `.grid-auto-cols-initial()` - начальное значение
- `.grid-auto-cols-inherit()` - наследование от родителя
- `.grid-auto-cols-unset()` - комбинация inherit/initial
- `.grid-auto-cols-auto()` - автоматический размер
- `.grid-auto-cols-min()` - минимальный контент (min-content)
- `.grid-auto-cols-max()` - максимальный контент (max-content)
- `.grid-auto-cols-fr()` - гибкий размер (minmax(0, 1fr))

---

## grid-auto-rows

**Назначение:** Определяет размер автоматически создаваемых рядов в grid-сетке. Когда grid-элементы размещаются вне явно определённых рядов, их высота задаётся этим свойством. Полезно для динамических сеток с неизвестным количеством рядов.

**Базовый миксин:**
- `.grid-auto-rows(@value)` - размер авторядов (px, %, fr, min-content, max-content и т.д.)

**Пресеты:**
- `.grid-auto-rows-initial()` - начальное значение
- `.grid-auto-rows-inherit()` - наследование от родителя
- `.grid-auto-rows-unset()` - комбинация inherit/initial
- `.auto-rows-auto()` - автоматический размер
- `.auto-rows-min()` - минимальный контент (min-content)
- `.auto-rows-max()` - максимальный контент (max-content)
- `.auto-rows-fr()` - гибкий размер (minmax(0, 1fr))

---
