# Alignment Mixins

Миксины для выравнивания элементов в flexbox и grid контейнерах. Управляют позиционированием контента по главной и поперечной осям.

## Содержание

- [justify-content](#justify-content)
- [justify-items](#justify-items)
- [justify-self](#justify-self)
- [align-content](#align-content)
- [align-items](#align-items)
- [align-self](#align-self)
- [place-content](#place-content)
- [place-items](#place-items)
- [place-self](#place-self)

---

## justify-content

**Назначение:** Выравнивает содержимое контейнера по главной оси (горизонтально для flex-row, вертикально для flex-column). Распределяет свободное пространство между или вокруг элементов. Работает в flexbox и grid контейнерах.

**Базовый миксин:**
- `.justify-content(@value)` - режим выравнивания (flex-start, center, space-between и т.д.)

**Пресеты:**
- `.justify-content-initial()` - начальное значение
- `.justify-content-inherit()` - наследование от родителя
- `.justify-content-unset()` - комбинация inherit/initial
- `.justify-content-start()` - выравнивание к началу
- `.justify-content-end()` - выравнивание к концу
- `.justify-content-end-safe()` - безопасное выравнивание к концу (с fallback)
- `.justify-content-center()` - выравнивание по центру
- `.justify-content-center-safe()` - безопасное выравнивание по центру (с fallback)
- `.justify-content-between()` - равномерное распределение с прижатием к краям
- `.justify-content-around()` - равномерное распределение с отступами вокруг
- `.justify-content-evenly()` - равномерное распределение с одинаковыми отступами
- `.justify-content-stretch()` - растягивание для заполнения
- `.justify-content-baseline()` - выравнивание по базовой линии
- `.justify-content-normal()` - обычное выравнивание (по умолчанию)

---

## justify-items

**Назначение:** Выравнивает grid-элементы внутри их grid-областей по главной оси. Задаёт выравнивание по умолчанию для всех элементов в grid-контейнере. Не работает во flexbox - только в grid.

**Базовый миксин:**
- `.justify-items(@value)` - режим выравнивания (start, end, center, stretch)

**Пресеты:**
- `.justify-items-initial()` - начальное значение
- `.justify-items-inherit()` - наследование от родителя
- `.justify-items-unset()` - комбинация inherit/initial
- `.justify-items-start()` - выравнивание к началу области
- `.justify-items-end()` - выравнивание к концу области
- `.justify-items-end-safe()` - безопасное выравнивание к концу (с fallback)
- `.justify-items-center()` - выравнивание по центру области
- `.justify-items-center-safe()` - безопасное выравнивание по центру (с fallback)
- `.justify-items-stretch()` - растягивание для заполнения области
- `.justify-items-normal()` - обычное выравнивание (по умолчанию)

---

## justify-self

**Назначение:** Выравнивает отдельный grid-элемент или flex-элемент внутри его области по главной оси. Переопределяет justify-items для конкретного элемента. Работает в grid для изменения выравнивания отдельного элемента.

**Базовый миксин:**
- `.justify-self(@value)` - режим выравнивания (auto, start, end, center, stretch)

**Пресеты:**
- `.justify-self-initial()` - начальное значение
- `.justify-self-inherit()` - наследование от родителя
- `.justify-self-unset()` - комбинация inherit/initial
- `.justify-self-auto()` - автоматическое выравнивание (наследует justify-items)
- `.justify-self-start()` - выравнивание к началу области
- `.justify-self-end()` - выравнивание к концу области
- `.justify-self-end-safe()` - безопасное выравнивание к концу (с fallback)
- `.justify-self-center()` - выравнивание по центру области
- `.justify-self-center-safe()` - безопасное выравнивание по центру (с fallback)
- `.justify-self-stretch()` - растягивание для заполнения области

---

## align-content

**Назначение:** Выравнивает ряды содержимого контейнера по поперечной оси (вертикально для flex-row, горизонтально для flex-column). Работает только в многострочных flexbox и grid контейнерах. Распределяет пространство между рядами элементов.

**Базовый миксин:**
- `.align-content(@value)` - режим выравнивания (flex-start, center, space-between и т.д.)

**Пресеты:**
- `.align-content-initial()` - начальное значение
- `.align-content-inherit()` - наследование от родителя
- `.align-content-unset()` - комбинация inherit/initial
- `.align-content-normal()` - обычное выравнивание (по умолчанию)
- `.align-content-center()` - выравнивание по центру
- `.align-content-start()` - выравнивание к началу
- `.align-content-end()` - выравнивание к концу
- `.align-content-between()` - равномерное распределение с прижатием к краям
- `.align-content-around()` - равномерное распределение с отступами вокруг
- `.align-content-evenly()` - равномерное распределение с одинаковыми отступами
- `.align-content-baseline()` - выравнивание по базовой линии
- `.align-content-stretch()` - растягивание для заполнения

---

## align-items

**Назначение:** Выравнивает элементы по поперечной оси внутри их строки (вертикально для flex-row, горизонтально для flex-column). Задаёт выравнивание по умолчанию для всех элементов в контейнере. Работает в flexbox и grid.

**Базовый миксин:**
- `.align-items(@value)` - режим выравнивания (flex-start, center, stretch и т.д.)

**Пресеты:**
- `.align-items-initial()` - начальное значение
- `.align-items-inherit()` - наследование от родителя
- `.align-items-unset()` - комбинация inherit/initial
- `.align-items-start()` - выравнивание к началу
- `.align-items-end()` - выравнивание к концу
- `.align-items-end-safe()` - безопасное выравнивание к концу (с fallback)
- `.align-items-center()` - выравнивание по центру
- `.align-items-center-safe()` - безопасное выравнивание по центру (с fallback)
- `.align-items-baseline()` - выравнивание по базовой линии
- `.align-items-baseline-last()` - выравнивание по последней базовой линии
- `.align-items-stretch()` - растягивание для заполнения (по умолчанию)

---

## align-self

**Назначение:** Выравнивает отдельный элемент по поперечной оси. Переопределяет align-items для конкретного flex-элемента или grid-элемента. Позволяет задать уникальное выравнивание для одного элемента среди других.

**Базовый миксин:**
- `.align-self(@value)` - режим выравнивания (auto, flex-start, center, stretch и т.д.)

**Пресеты:**
- `.align-self-initial()` - начальное значение
- `.align-self-inherit()` - наследование от родителя
- `.align-self-unset()` - комбинация inherit/initial
- `.align-self-auto()` - автоматическое выравнивание (наследует align-items)
- `.align-self-start()` - выравнивание к началу (flex-start для Flexbox)
- `.align-self-end()` - выравнивание к концу (flex-end для Flexbox)
- `.align-self-end-safe()` - безопасное выравнивание к концу (с fallback)
- `.align-self-center()` - выравнивание по центру
- `.align-self-center-safe()` - безопасное выравнивание по центру (с fallback)
- `.align-self-stretch()` - растягивание для заполнения
- `.align-self-baseline()` - выравнивание по базовой линии
- `.align-self-baseline-last()` - выравнивание по последней базовой линии

---

## place-content

**Назначение:** Краткая форма для одновременной установки align-content и justify-content. Выравнивает содержимое контейнера одновременно по обеим осям. Упрощает центрирование и распределение контента в grid контейнерах.

**Базовый миксин:**
- `.place-content(@value)` - режим выравнивания для обеих осей (center, start, space-between и т.д.)

**Пресеты:**
- `.place-content-initial()` - начальное значение
- `.place-content-inherit()` - наследование от родителя
- `.place-content-unset()` - комбинация inherit/initial
- `.place-content-center()` - центрирование по обеим осям
- `.place-content-center-safe()` - безопасное центрирование (с fallback)
- `.place-content-start()` - выравнивание к началу по обеим осям
- `.place-content-end()` - выравнивание к концу по обеим осям
- `.place-content-end-safe()` - безопасное выравнивание к концу (с fallback)
- `.place-content-between()` - равномерное распределение с прижатием к краям
- `.place-content-around()` - равномерное распределение с отступами вокруг
- `.place-content-evenly()` - равномерное распределение с одинаковыми отступами
- `.place-content-baseline()` - выравнивание по базовой линии
- `.place-content-stretch()` - растягивание для заполнения

---

## place-items

**Назначение:** Краткая форма для одновременной установки align-items и justify-items. Выравнивает элементы одновременно по обеим осям внутри их областей. Работает в grid контейнерах для одновременного управления выравниванием всех элементов.

**Базовый миксин:**
- `.place-items(@value)` - режим выравнивания для обеих осей (start, center, stretch и т.д.)

**Пресеты:**
- `.place-items-initial()` - начальное значение
- `.place-items-inherit()` - наследование от родителя
- `.place-items-unset()` - комбинация inherit/initial
- `.place-items-start()` - выравнивание к началу по обеим осям
- `.place-items-end()` - выравнивание к концу по обеим осям
- `.place-items-end-safe()` - безопасное выравнивание к концу (с fallback)
- `.place-items-center()` - центрирование по обеим осям
- `.place-items-center-safe()` - безопасное центрирование (с fallback)
- `.place-items-baseline()` - выравнивание по базовой линии
- `.place-items-stretch()` - растягивание для заполнения (по умолчанию)

---

## place-self

**Назначение:** Краткая форма для одновременной установки align-self и justify-self. Выравнивает отдельный элемент одновременно по обеим осям внутри его области. Работает в grid для индивидуального позиционирования элемента.

**Базовый миксин:**
- `.place-self(@value)` - режим выравнивания для обеих осей (auto, start, center, stretch и т.д.)

**Пресеты:**
- `.place-self-initial()` - начальное значение
- `.place-self-inherit()` - наследование от родителя
- `.place-self-unset()` - комбинация inherit/initial
- `.place-self-auto()` - автоматическое выравнивание (наследует place-items)
- `.place-self-start()` - выравнивание к началу по обеим осям
- `.place-self-end()` - выравнивание к концу по обеим осям
- `.place-self-end-safe()` - безопасное выравнивание к концу (с fallback)
- `.place-self-center()` - центрирование по обеим осям
- `.place-self-center-safe()` - безопасное центрирование (с fallback)
- `.place-self-stretch()` - растягивание для заполнения

---
