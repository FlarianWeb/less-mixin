# Typography Mixins

Миксины для управления типографикой и текстовым оформлением.

## Содержание

- [font-family](#font-family)
- [font-size](#font-size)
- [font-stretch](#font-stretch)
- [font-style](#font-style)
- [font-variant-numeric](#font-variant-numeric)
- [font-weight](#font-weight)
- [letter-spacing](#letter-spacing)
- [line-clamp](#line-clamp)
- [line-height](#line-height)
- [list-style](#list-style)
- [text-align](#text-align)

---

## font-family

**Назначение:** Устанавливает семейство шрифтов для элемента. Определяет приоритетный список шрифтов, которые браузер попытается использовать для отображения текста. Первый доступный шрифт из списка будет применён. Обычно список завершается generic-family (serif, sans-serif, monospace и т.д.) в качестве fallback.

**Базовый миксин:**
- `.font-family(...)` - принимает переменное количество аргументов через запятую

**Глобальные пресеты:**
- `.font-family-initial()` - начальное значение
- `.font-family-inherit()` - наследование от родителя
- `.font-family-unset()` - комбинация inherit/initial

---

## font-size

**Назначение:** Устанавливает размер шрифта для текста элемента. Может быть задан в абсолютных единицах (px), относительных единицах (rem, em, %), процентах, viewport-единицах (vw, vh) или ключевыми словами (small, medium, large и т.д.). Относительные единицы масштабируются относительно размера шрифта родителя (em) или корневого элемента (rem).

**Базовый миксин:**
- `.font-size(@value)` - принимает значение размера шрифта

**Глобальные пресеты:**
- `.font-size-initial()` - начальное значение
- `.font-size-inherit()` - наследование от родителя
- `.font-size-unset()` - комбинация inherit/initial

---

## font-stretch

**Назначение:** Управляет шириной (растяжением/сжатием) шрифта. Позволяет использовать узкие или широкие начертания шрифта, если они доступны в font-family. Может быть задано процентным значением (50% - 200%) или ключевыми словами. Значение 100% (normal) соответствует стандартной ширине шрифта.

**Базовый миксин:**
- `.font-stretch(@value)` - принимает значение растяжения шрифта

**Дополнительные пресеты:**
- `.font-stretch-ultra-condensed()` - 50% (максимально узкий)
- `.font-stretch-extra-condensed()` - 62.5% (экстра узкий)
- `.font-stretch-condensed()` - 75% (узкий)
- `.font-stretch-semi-condensed()` - 87.5% (полуузкий)
- `.font-stretch-normal()` - 100% (обычная ширина)
- `.font-stretch-semi-expanded()` - 112.5% (полурасширенный)
- `.font-stretch-expanded()` - 125% (расширенный)
- `.font-stretch-extra-expanded()` - 150% (экстра расширенный)
- `.font-stretch-ultra-expanded()` - 200% (максимально широкий)

**Глобальные пресеты:**
- `.font-stretch-initial()` - начальное значение
- `.font-stretch-inherit()` - наследование от родителя
- `.font-stretch-unset()` - комбинация inherit/initial

---

## font-style

**Назначение:** Устанавливает стиль шрифта - обычное (normal), курсивное (italic) или наклонное (oblique) начертание. `italic` использует специально разработанное курсивное начертание шрифта, если оно доступно в font-family. `oblique` создает наклонный эффект путем искусственного наклона обычного начертания, также поддерживает указание угла наклона (например, `oblique 14deg`).

**Базовый миксин:**
- `.font-style(@value)` - принимает значение стиля шрифта

**Дополнительные пресеты:**
- `.font-style-normal()` - обычное начертание
- `.font-style-italic()` - курсивное начертание

**Глобальные пресеты:**
- `.font-style-initial()` - начальное значение
- `.font-style-inherit()` - наследование от родителя
- `.font-style-unset()` - комбинация inherit/initial

---

## font-variant-numeric

**Назначение:** Управляет отображением цифр, дробей и порядковых номеров. Позволяет использовать альтернативные глифы для чисел, если они доступны в шрифте. Полезно для типографического оформления чисел в таблицах, финансовых документах и текстах с математическими выражениями. Значения можно комбинировать (например, `tabular-nums slashed-zero`).

**Базовый миксин:**
- `.font-variant-numeric(@value)` - принимает значение вариантов отображения цифр

**Дополнительные пресеты:**
- `.font-variant-numeric-normal()` - стандартное отображение
- `.font-variant-numeric-ordinal()` - для порядковых номеров (1st, 2nd, 3rd)
- `.font-variant-numeric-slashed-zero()` - ноль с косой чертой
- `.font-variant-numeric-lining-nums()` - цифры одинаковой высоты (как заглавные буквы)
- `.font-variant-numeric-oldstyle-nums()` - цифры разной высоты (как строчные буквы)
- `.font-variant-numeric-proportional-nums()` - цифры пропорциональной ширины
- `.font-variant-numeric-tabular-nums()` - цифры одинаковой ширины (для таблиц)
- `.font-variant-numeric-diagonal-fractions()` - диагональные дроби (1/2)
- `.font-variant-numeric-stacked-fractions()` - вертикальные дроби

**Глобальные пресеты:**
- `.font-variant-numeric-initial()` - начальное значение
- `.font-variant-numeric-inherit()` - наследование от родителя
- `.font-variant-numeric-unset()` - комбинация inherit/initial

---

## font-weight

**Назначение:** Устанавливает толщину (насыщенность) шрифта. Может быть задано числовым значением от 100 до 900 (с шагом 100), где 400 соответствует normal, а 700 — bold. Также поддерживает ключевые слова normal, bold и относительные значения lighter, bolder, которые делают шрифт светлее или жирнее относительно родительского элемента.

**Базовый миксин:**
- `.font-weight(@value)` - принимает значение толщины шрифта

**Дополнительные пресеты:**
- `.font-weight-hairline()` - 100 (тончайший)
- `.font-weight-thin()` - 200 (тонкий)
- `.font-weight-light()` - 300 (светлый)
- `.font-weight-regular()` - 400 (обычный)
- `.font-weight-medium()` - 500 (средний)
- `.font-weight-semibold()` - 600 (полужирный)
- `.font-weight-bold()` - 700 (жирный)
- `.font-weight-heavy()` - 800 (тяжелый)
- `.font-weight-black()` - 900 (самый жирный)
- `.font-weight-lighter()` - тоньше чем у родителя
- `.font-weight-bolder()` - жирнее чем у родителя

**Глобальные пресеты:**
- `.font-weight-initial()` - начальное значение
- `.font-weight-inherit()` - наследование от родителя
- `.font-weight-unset()` - комбинация inherit/initial

---

## letter-spacing

**Назначение:** Свойство CSS letter-spacing используется для настройки расстояния между символами (буквами, цифрами, знаками) в тексте, то есть для управления трекингом. Оно позволяет увеличивать или уменьшать стандартный интервал, улучшая читаемость, создавая акценты в заголовках или меняя стиль оформления элементов.

**Базовый миксин:**
- `.letter-spacing(@value)` - принимает значение межбуквенного интервала

**Дополнительные пресеты:**
- `.letter-spacing-hairline()` -0.06em (тончайший)
- `.letter-spacing-thin()` -0.04em (тонкий)
- `.letter-spacing-light()` -0.02em (светлый)
- `.letter-spacing-regular()` 0 (обычный)
- `.letter-spacing-medium()` 0.02em (средний)
- `.letter-spacing-semibold()` 0.04em (полужирный)
- `.letter-spacing-bold()` 0.06em (жирный)
- `.letter-spacing-heavy()` 0.08em (тяжелый)
- `.letter-spacing-black()` 0.1em (самый жирный)

**Глобальные пресеты:**
- `.letter-spacing-initial()` - начальное значение
- `.letter-spacing-inherit()` - наследование от родителя
- `.letter-spacing-unset()` - комбинация inherit/initial

---

## line-clamp

**Назначение:** Ограничивает текст определенным количеством строк с автоматическим добавлением многоточия (...) в конце. Это комбинация нескольких CSS свойств для создания эффекта обрезки текста. Полезно для карточек товаров, списков новостей, превью статей и других UI элементов с ограниченным пространством.

**Базовый миксин:**
- `.line-clamp(@value)` - принимает количество строк для отображения

**Дополнительные пресеты:**
- `.line-clamp-none()` - отменяет ограничение строк, возвращает обычное отображение текста

**Глобальные пресеты:**
- `.line-clamp-initial()` - начальное значение
- `.line-clamp-inherit()` - наследование от родителя
- `.line-clamp-unset()` - комбинация inherit/initial

---

## line-height

**Назначение:** Устанавливает высоту строки текста (межстрочный интервал, интерлиньяж). Определяет расстояние между базовыми линиями соседних строк текста. Может быть задано числовым множителем (рекомендуется, масштабируется с размером шрифта), абсолютными единицами (px, rem) или процентами. Влияет на читаемость текста и визуальную плотность блоков.

**Базовый миксин:**
- `.line-height(@value)` - принимает значение высоты строки

**Глобальные пресеты:**
- `.line-height-initial()` - начальное значение
- `.line-height-inherit()` - наследование от родителя
- `.line-height-unset()` - комбинация inherit/initial

---

## list-style

**Назначение:** Управляет оформлением маркеров списков (ul, ol). Объединяет три свойства: тип маркера (list-style-type), позицию маркера относительно текста (list-style-position) и возможность использования изображения вместо маркера (list-style-image). Позволяет настраивать визуальное представление списков для улучшения читаемости и соответствия дизайну.

**Базовые миксины:**
- `.list-style(@value)` - shorthand для всех list-style свойств (например `disc inside`)
- `.list-style-type(@value)` - устанавливает тип маркера
- `.list-style-position(@value)` - устанавливает позицию маркера
- `.list-style-image(@value)` - устанавливает изображение маркера

**Пресеты для position:**
- `.list-style-inside()` - маркер внутри блока текста
- `.list-style-outside()` - маркер снаружи (по умолчанию)

**Пресеты для type:**
- `.list-style-none()` - без маркера
- `.list-style-disc()` - заполненный круг (по умолчанию для ul)
- `.list-style-circle()` - пустой круг
- `.list-style-square()` - квадрат
- `.list-style-decimal()` - числа (по умолчанию для ol)
- `.list-style-decimal-leading-zero()` - числа с нулем впереди (01, 02, 03)
- `.list-style-lower-alpha()` - строчные буквы (a, b, c)
- `.list-style-upper-alpha()` - заглавные буквы (A, B, C)
- `.list-style-lower-roman()` - строчные римские (i, ii, iii)
- `.list-style-upper-roman()` - заглавные римские (I, II, III)

**Глобальные пресеты:**
- `.list-style-initial()` / `.list-style-type-initial()` / `.list-style-position-initial()` / `.list-style-image-initial()` - начальные значения
- `.list-style-inherit()` / `.list-style-type-inherit()` / `.list-style-position-inherit()` / `.list-style-image-inherit()` - наследование от родителя
- `.list-style-unset()` / `.list-style-type-unset()` / `.list-style-position-unset()` / `.list-style-image-unset()` - комбинация inherit/initial

---

## text-align

**Назначение:** Устанавливает горизонтальное выравнивание текста внутри блочного элемента. Определяет, как строки текста распределяются относительно краев контейнера. Поддерживает выравнивание по левому/правому краю, по центру, по ширине (justify), а также логические значения start/end, которые учитывают направление текста (ltr/rtl).

**Базовый миксин:**
- `.text-align(@value)` - принимает значение выравнивания текста

**Дополнительные пресеты:**
- `.text-align-left()` - выравнивание по левому краю
- `.text-align-center()` - выравнивание по центру
- `.text-align-right()` - выравнивание по правому краю
- `.text-align-justify()` - выравнивание по ширине (по обоим краям)
- `.text-align-start()` - по началу направления текста (left для ltr, right для rtl)
- `.text-align-end()` - по концу направления текста (right для ltr, left для rtl)

**Глобальные пресеты:**
- `.text-align-initial()` - начальное значение
- `.text-align-inherit()` - наследование от родителя
- `.text-align-unset()` - комбинация inherit/initial

---
