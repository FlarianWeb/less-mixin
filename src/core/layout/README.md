# Layout Mixins

Миксины для управления компоновкой и позиционированием элементов.

## Содержание

- [aspect-ratio](#aspect-ratio)
- [columns](#columns)
- [break-after](#break-after)
- [break-before](#break-before)
- [break-inside](#break-inside)
- [box-decoration-break](#box-decoration-break)
- [box-sizing](#box-sizing)
- [display](#display)
- [float](#float)
- [clear](#clear)
- [isolation](#isolation)
- [object-fit](#object-fit)
- [object-position](#object-position)
- [overflow](#overflow)
- [overscroll-behavior](#overscroll-behavior)
- [position](#position)
- [inset / top / right / bottom / left](#inset--top--right--bottom--left)
- [visibility](#visibility)
- [z-index](#z-index)

---

## aspect-ratio

**Назначение:** Устанавливает соотношение сторон элемента (ширина/высота). Полезно для создания адаптивных контейнеров для видео, изображений и карточек, которые должны сохранять пропорции при изменении размера.

**Базовый миксин:**
- `.aspect(@ratio)` - соотношение сторон (число, дробь или `auto`)

**Пресеты:**
- `.aspect-square()` - квадрат 1:1
- `.aspect-video()` - видео 16:9 (использует CSS переменную)
- `.aspect-initial()` - начальное значение
- `.aspect-inherit()` - наследование от родителя
- `.aspect-unset()` - комбинация inherit/initial
- `.aspect-auto()` - автоматическое соотношение

**Конфигурация:**
- `--aspect-video` - соотношение сторон для видео (по умолчанию: `16 / 9`)

---

## columns

**Назначение:** Задаёт количество колонок для многоколоночной вёрстки текста (CSS Multi-column Layout). Используется для создания газетной вёрстки, где контент автоматически распределяется по колонкам.

**Базовый миксин:**
- `.columns(@count)` - количество колонок (число или `auto`)

**Пресеты:**
- `.columns-initial()` - начальное значение
- `.columns-inherit()` - наследование от родителя
- `.columns-unset()` - комбинация inherit/initial
- `.columns-auto()` - автоматическое определение

---

## break-after

**Назначение:** Определяет поведение разрыва страницы, колонки или региона после элемента. Используется при печати или в многоколоночной вёрстке для контроля того, где происходят разрывы.

**Базовый миксин:**
- `.break-after(@value)` - тип разрыва (auto, avoid, all, avoid-page, page, left, right, column)

**Пресеты:**
- `.break-after-initial()` - начальное значение
- `.break-after-inherit()` - наследование от родителя
- `.break-after-unset()` - комбинация inherit/initial
- `.break-after-auto()` - автоматическое определение
- `.break-after-avoid()` - избегать разрывов
- `.break-after-all()` - разрыв везде где возможно
- `.break-after-avoid-page()` - избегать разрыва страницы
- `.break-after-page()` - всегда разрыв страницы
- `.break-after-left()` - разрыв с переходом на левую страницу
- `.break-after-right()` - разрыв с переходом на правую страницу
- `.break-after-column()` - разрыв колонки

---

## break-before

**Назначение:** Определяет поведение разрыва страницы, колонки или региона перед элементом. Используется при печати или в многоколоночной вёрстке для контроля того, где происходят разрывы.

**Базовый миксин:**
- `.break-before(@value)` - тип разрыва (auto, avoid, all, avoid-page, page, left, right, column)

**Пресеты:**
- `.break-before-initial()` - начальное значение
- `.break-before-inherit()` - наследование от родителя
- `.break-before-unset()` - комбинация inherit/initial
- `.break-before-auto()` - автоматическое определение
- `.break-before-avoid()` - избегать разрывов
- `.break-before-all()` - разрыв везде где возможно
- `.break-before-avoid-page()` - избегать разрыва страницы
- `.break-before-page()` - всегда разрыв страницы
- `.break-before-left()` - разрыв с переходом на левую страницу
- `.break-before-right()` - разрыв с переходом на правую страницу
- `.break-before-column()` - разрыв колонки

---

## break-inside

**Назначение:** Определяет поведение разрыва страницы, колонки или региона внутри элемента. Используется для предотвращения разрыва элемента при печати или в многоколоночной вёрстке.

**Базовый миксин:**
- `.break-inside(@value)` - тип разрыва (auto, avoid, avoid-page, avoid-column)

**Пресеты:**
- `.break-inside-initial()` - начальное значение
- `.break-inside-inherit()` - наследование от родителя
- `.break-inside-unset()` - комбинация inherit/initial
- `.break-inside-auto()` - автоматическое определение
- `.break-inside-avoid()` - избегать разрывов внутри элемента
- `.break-inside-avoid-page()` - избегать разрыва страницы внутри элемента
- `.break-inside-avoid-column()` - избегать разрыва колонки внутри элемента

---

## box-decoration-break

**Назначение:** Определяет, как применяются фон, padding, border, border-radius, box-shadow и margin к элементу, который разбит на несколько строк или фрагментов (например, инлайн-элемент на нескольких строках).

**Базовый миксин:**
- `.box-decoration-break(@value)` - режим декорации (slice, clone)

**Пресеты:**
- `.box-decoration-break-initial()` - начальное значение
- `.box-decoration-break-inherit()` - наследование от родителя
- `.box-decoration-break-unset()` - комбинация inherit/initial
- `.box-decoration-break-clone()` - каждый фрагмент получает полную копию декорации
- `.box-decoration-break-slice()` - декорация растягивается по всем фрагментам (по умолчанию)

---

## box-sizing

**Назначение:** Определяет, как вычисляется общая ширина и высота элемента - включать ли в неё padding и border, или только content.

**Базовый миксин:**
- `.box-sizing(@value)` - режим вычисления размера (border-box, content-box)

**Пресеты:**
- `.box-sizing-initial()` - начальное значение
- `.box-sizing-inherit()` - наследование от родителя
- `.box-sizing-unset()` - комбинация inherit/initial
- `.box-sizing-border()` - размер включает padding и border
- `.box-sizing-content()` - размер только для содержимого (по умолчанию в CSS)

---

## display

**Назначение:** Устанавливает тип отображения элемента. Определяет, как элемент участвует в потоке документа и как отображаются его дочерние элементы. Включает Tailwind-like пресеты с короткими названиями без префикса "display-".

**Базовый миксин:**
- `.display(@value)` - тип отображения (block, inline, flex, grid и т.д.)

**Глобальные пресеты:**
- `.display-initial()` - начальное значение
- `.display-inherit()` - наследование от родителя
- `.display-unset()` - комбинация inherit/initial

**Блочные и строчные:**
- `.block()` - display: block
- `.inline-block()` - display: inline-block
- `.inline()` - display: inline
- `.flow-root()` - display: flow-root (создаёт новый блочный контекст форматирования)

**Flex и Grid:**
- `.flex()` - display: flex
- `.inline-flex()` - display: inline-flex
- `.grid()` - display: grid
- `.inline-grid()` - display: inline-grid

**Табличные:**
- `.table()` - display: table
- `.inline-table()` - display: inline-table
- `.table-caption()` - display: table-caption
- `.table-cell()` - display: table-cell
- `.table-column()` - display: table-column
- `.table-column-group()` - display: table-column-group
- `.table-footer-group()` - display: table-footer-group
- `.table-header-group()` - display: table-header-group
- `.table-row-group()` - display: table-row-group
- `.table-row()` - display: table-row

**Специальные:**
- `.contents()` - display: contents (элемент "прозрачен" для layout)
- `.list-item()` - display: list-item
- `.hidden()` - display: none (полностью скрывает элемент)

---

## float

**Назначение:** Определяет обтекание элемента текстом. Элемент с float извлекается из нормального потока документа и прижимается к левой или правой стороне контейнера, а текст и инлайн-элементы обтекают его. Часто используется для создания колоночных макетов и обтекания изображений текстом.

**Базовый миксин:**
- `.float(@value)` - направление обтекания (left, right, inline-start, inline-end, none)

**Пресеты:**
- `.float-initial()` - начальное значение
- `.float-inherit()` - наследование от родителя
- `.float-unset()` - комбинация inherit/initial
- `.float-right()` - обтекание справа
- `.float-left()` - обтекание слева
- `.float-start()` - обтекание с начала (зависит от направления текста)
- `.float-end()` - обтекание с конца (зависит от направления текста)
- `.float-none()` - без обтекания (по умолчанию)

---

## clear

**Назначение:** Указывает, может ли элемент находиться рядом с плавающими (float) элементами или должен быть перемещён ниже них. Используется для управления обтеканием и очистки float-элементов. Часто применяется для предотвращения наложения контента на плавающие элементы.

**Базовый миксин:**
- `.clear(@value)` - сторона очистки (left, right, both, inline-start, inline-end, none)

**Пресеты:**
- `.clear-initial()` - начальное значение
- `.clear-inherit()` - наследование от родителя
- `.clear-unset()` - комбинация inherit/initial
- `.clear-left()` - запрет обтекания слева
- `.clear-right()` - запрет обтекания справа
- `.clear-both()` - запрет обтекания с обеих сторон
- `.clear-start()` - запрет обтекания с начала (зависит от направления текста)
- `.clear-end()` - запрет обтекания с конца (зависит от направления текста)
- `.clear-none()` - разрешить обтекание (по умолчанию)

---

## isolation

**Назначение:** Определяет, создаёт ли элемент новый stacking context (контекст наложения). Используется для изоляции элемента от эффектов смешивания (mix-blend-mode) и z-index родительских элементов. Полезно при работе со сложными композициями и эффектами наложения.

**Базовый миксин:**
- `.isolation(@value)` - режим изоляции (isolate, auto)

**Пресеты:**
- `.isolation-initial()` - начальное значение
- `.isolation-inherit()` - наследование от родителя
- `.isolation-unset()` - комбинация inherit/initial
- `.isolate()` - создать новый stacking context
- `.isolation-auto()` - не создавать новый stacking context (по умолчанию)

---

## object-fit

**Назначение:** Определяет, как содержимое замещаемого элемента (img, video) должно масштабироваться, чтобы соответствовать контейнеру. Управляет пропорциями и обрезкой изображений и видео внутри элемента с заданными размерами. Аналог background-size для замещаемых элементов.

**Базовый миксин:**
- `.object-fit(@value)` - режим масштабирования (contain, cover, fill, none, scale-down)

**Пресеты:**
- `.object-fit-initial()` - начальное значение
- `.object-fit-inherit()` - наследование от родителя
- `.object-fit-unset()` - комбинация inherit/initial
- `.object-contain()` - масштабировать с сохранением пропорций (вписать в контейнер)
- `.object-cover()` - масштабировать с сохранением пропорций (заполнить контейнер, обрезая излишки)
- `.object-fill()` - растянуть для заполнения контейнера (игнорируя пропорции)
- `.object-none()` - не масштабировать (исходный размер)
- `.object-scale-down()` - выбрать между none и contain (меньший размер)

---

## object-position

**Назначение:** Определяет позицию содержимого замещаемого элемента (img, video) внутри контейнера. Работает совместно с object-fit и позволяет точно контролировать, какая часть изображения или видео будет видна. Аналог background-position для замещаемых элементов.

**Базовый миксин:**
- `.object-position(@value)` - позиция (top, center, bottom, left, right, проценты, пиксели)

**Пресеты:**
- `.object-position-initial()` - начальное значение
- `.object-position-inherit()` - наследование от родителя
- `.object-position-unset()` - комбинация inherit/initial
- `.object-top-left()` - верхний левый угол
- `.object-top()` - верхний центр
- `.object-top-right()` - верхний правый угол
- `.object-left()` - центр слева
- `.object-center()` - центр (по умолчанию)
- `.object-right()` - центр справа
- `.object-bottom-left()` - нижний левый угол
- `.object-bottom()` - нижний центр
- `.object-bottom-right()` - нижний правый угол

---

## overflow

**Назначение:** Определяет, что происходит с содержимым, которое переполняет границы элемента. Управляет отображением и поведением прокрутки для содержимого, выходящего за пределы блока. Включает варианты для управления переполнением по горизонтали (overflow-x) и вертикали (overflow-y) отдельно.

**Базовые миксины:**
- `.overflow(@value)` - поведение переполнения для обеих осей
- `.overflow-x(@value)` - поведение переполнения по горизонтали
- `.overflow-y(@value)` - поведение переполнения по вертикали

**Глобальные пресеты:**
- `.overflow-initial()` / `.overflow-x-initial()` / `.overflow-y-initial()` - начальное значение
- `.overflow-inherit()` / `.overflow-x-inherit()` / `.overflow-y-inherit()` - наследование от родителя
- `.overflow-unset()` / `.overflow-x-unset()` / `.overflow-y-unset()` - комбинация inherit/initial

**Пресеты overflow (обе оси):**
- `.overflow-auto()` - прокрутка появляется при необходимости
- `.overflow-hidden()` - скрыть переполнение
- `.overflow-clip()` - обрезать переполнение (без прокрутки)
- `.overflow-visible()` - показать переполнение (по умолчанию)
- `.overflow-scroll()` - всегда показывать прокрутку

**Пресеты overflow-x (горизонталь):**
- `.overflow-x-auto()` - прокрутка по горизонтали при необходимости
- `.overflow-x-hidden()` - скрыть горизонтальное переполнение
- `.overflow-x-clip()` - обрезать горизонтальное переполнение
- `.overflow-x-visible()` - показать горизонтальное переполнение
- `.overflow-x-scroll()` - всегда показывать горизонтальную прокрутку

**Пресеты overflow-y (вертикаль):**
- `.overflow-y-auto()` - прокрутка по вертикали при необходимости
- `.overflow-y-hidden()` - скрыть вертикальное переполнение
- `.overflow-y-clip()` - обрезать вертикальное переполнение
- `.overflow-y-visible()` - показать вертикальное переполнение
- `.overflow-y-scroll()` - всегда показывать вертикальную прокрутку

---

## overscroll-behavior

**Назначение:** Определяет поведение браузера при достижении границы области прокрутки. Позволяет предотвратить нежелательное поведение типа "scroll chaining" (прокрутка родительского элемента) и "pull-to-refresh" на мобильных устройствах. Полезно для модальных окон и вложенных областей прокрутки.

**Базовые миксины:**
- `.overscroll-behavior(@value)` - поведение для обеих осей
- `.overscroll-behavior-x(@value)` - поведение по горизонтали
- `.overscroll-behavior-y(@value)` - поведение по вертикали

**Глобальные пресеты:**
- `.overscroll-behavior-initial()` / `.overscroll-behavior-x-initial()` / `.overscroll-behavior-y-initial()` - начальное значение
- `.overscroll-behavior-inherit()` / `.overscroll-behavior-x-inherit()` / `.overscroll-behavior-y-inherit()` - наследование от родителя
- `.overscroll-behavior-unset()` / `.overscroll-behavior-x-unset()` / `.overscroll-behavior-y-unset()` - комбинация inherit/initial

**Пресеты overscroll (обе оси):**
- `.overscroll-auto()` - стандартное поведение браузера (по умолчанию)
- `.overscroll-contain()` - предотвратить scroll chaining, оставить эффекты
- `.overscroll-none()` - отключить scroll chaining и bounce эффекты

**Пресеты overscroll-x (горизонталь):**
- `.overscroll-x-auto()` - стандартное поведение по горизонтали
- `.overscroll-x-contain()` - предотвратить горизонтальный scroll chaining
- `.overscroll-x-none()` - отключить горизонтальные эффекты

**Пресеты overscroll-y (вертикаль):**
- `.overscroll-y-auto()` - стандартное поведение по вертикали
- `.overscroll-y-contain()` - предотвратить вертикальный scroll chaining
- `.overscroll-y-none()` - отключить вертикальные эффекты (в т.ч. pull-to-refresh)

---

## position

**Назначение:** Определяет метод позиционирования элемента в документе. Влияет на то, как элемент размещается относительно нормального потока документа, родительского элемента или viewport. Основа для управления расположением элементов через top, right, bottom, left.

**Базовый миксин:**
- `.position(@value)` - метод позиционирования (static, relative, absolute, fixed, sticky)

**Пресеты:**
- `.position-initial()` - начальное значение
- `.position-inherit()` - наследование от родителя
- `.position-unset()` - комбинация inherit/initial
- `.static()` - статичное позиционирование (по умолчанию, в потоке документа)
- `.relative()` - относительное позиционирование (смещение от исходной позиции)
- `.absolute()` - абсолютное позиционирование (относительно ближайшего позиционированного предка)
- `.fixed()` - фиксированное позиционирование (относительно viewport)
- `.sticky()` - липкое позиционирование (гибрид relative и fixed)

---

## inset / top / right / bottom / left

**Назначение:** Определяет смещение позиционированного элемента от краёв содержащего блока. Работает только с элементами, у которых position отличается от static. Включает современные логические свойства (inset-inline, inset-block) для поддержки разных направлений письма.

**Базовые миксины:**
- `.inset(@value)` - смещение от всех четырёх сторон одновременно
- `.top(@value)` - смещение от верхнего края
- `.right(@value)` - смещение от правого края
- `.bottom(@value)` - смещение от нижнего края
- `.left(@value)` - смещение от левого края
- `.inset-inline(@value)` - смещение по горизонтальной оси (зависит от направления текста)
- `.inset-inline-start(@value)` - смещение от начала строки
- `.inset-inline-end(@value)` - смещение от конца строки
- `.inset-block(@value)` - смещение по вертикальной оси
- `.inset-block-start(@value)` - смещение от начала блока
- `.inset-block-end(@value)` - смещение от конца блока

**Глобальные пресеты (для каждого свойства):**
- `.*-initial()` - начальное значение
- `.*-inherit()` - наследование от родителя
- `.*-unset()` - комбинация inherit/initial

**Пресеты (для каждого свойства):**
- `.*-auto()` - автоматическое позиционирование
- `.*-full()` - 100% (полное смещение)

**Примеры использования:**
```less
// Центрирование абсолютно позиционированного элемента
.centered {
	.absolute();
	.inset(0);        // inset: 0 (все стороны)
	margin: auto;
}

// Прилипание к верхнему краю
.sticky-header {
	.sticky();
	.top(0);          // top: 0
}

// Позиционирование справа внизу
.bottom-right {
	.fixed();
	.right(20px);     // right: 20px
	.bottom(20px);    // bottom: 20px
}

// Растянуть на всю ширину
.full-width {
	.absolute();
	.left(0);         // left: 0
	.right(0);        // right: 0
}

// Использование логических свойств
.rtl-aware {
	.absolute();
	.inset-inline-start(10px);  // слева для LTR, справа для RTL
}
```

---

## visibility

**Назначение:** Определяет видимость элемента без изменения его места в layout. В отличие от display: none, элемент с visibility: hidden продолжает занимать место в документе, но становится невидимым. Полезно для скрытия элементов с сохранением их пространства или для таблиц.

**Базовый миксин:**
- `.visibility(@value)` - режим видимости (visible, hidden, collapse)

**Пресеты:**
- `.visibility-initial()` - начальное значение
- `.visibility-inherit()` - наследование от родителя
- `.visibility-unset()` - комбинация inherit/initial
- `.visible()` - элемент видим (по умолчанию)
- `.invisible()` - элемент скрыт, но занимает место
- `.collapse()` - для таблиц: скрыть строку/колонку без места

---

## z-index

**Назначение:** Определяет порядок наложения позиционированных элементов по оси Z. Элементы с большим z-index располагаются поверх элементов с меньшим значением. Работает только с позиционированными элементами (position отличается от static) и flex/grid элементами.

**Базовый миксин:**
- `.z-index(@value)` - уровень наложения (число или auto)

**Пресеты:**
- `.z-index-initial()` - начальное значение
- `.z-index-inherit()` - наследование от родителя
- `.z-index-unset()` - комбинация inherit/initial
- `.z-auto()` - автоматический порядок наложения (по умолчанию)

---
