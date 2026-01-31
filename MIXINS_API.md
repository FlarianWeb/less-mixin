# LESS Mixins API Reference

Полная типизированная документация всех базовых миксинов для автодополнения.

## Legend

- **Type: enum** - фиксированный набор значений
- **Type: length** - числовые значения с единицами (px, rem, em, %, vh, vw и т.д.)
- **Type: number** - числовое значение без единиц
- **Type: integer** - целое число
- **Type: string** - текстовая строка
- **Type: ratio** - соотношение (например, 16 / 9)

---

## Layout Mixins

### aspect-ratio

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.aspect(@ratio)` | **enum** \| **number** \| **ratio** | `auto`, `<number>`, `<width> / <height>` |

### box-decoration-break

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.box-decoration-break(@value)` | **enum** | `slice`, `clone` |

### box-sizing

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.box-sizing(@value)` | **enum** | `border-box`, `content-box` |

### break-after / break-before

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.break-after(@value)` | **enum** | `auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column` |
| `.break-before(@value)` | **enum** | `auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column` |

### break-inside

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.break-inside(@value)` | **enum** | `auto`, `avoid`, `avoid-page`, `avoid-column` |

### clear

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.clear(@value)` | **enum** | `left`, `right`, `both`, `none`, `inline-start`, `inline-end` |

### columns

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.columns(@count)` | **enum** \| **integer** | `auto`, `<integer>` |

### display

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.display(@value)` | **enum** | `block`, `inline`, `inline-block`, `flex`, `inline-flex`, `grid`, `inline-grid`, `flow-root`, `none`, `contents`, `table`, `table-row`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row-group`, `table-caption`, `list-item` |

### float

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.float(@value)` | **enum** | `left`, `right`, `none`, `inline-start`, `inline-end` |

### inset / positioning

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.inset(@value)` | **enum** \| **length** | `auto`, `<length>`, `<percentage>` |
| `.top(@value)` | **enum** \| **length** | `auto`, `<length>`, `<percentage>` |
| `.right(@value)` | **enum** \| **length** | `auto`, `<length>`, `<percentage>` |
| `.bottom(@value)` | **enum** \| **length** | `auto`, `<length>`, `<percentage>` |
| `.left(@value)` | **enum** \| **length** | `auto`, `<length>`, `<percentage>` |
| `.inset-inline(@value)` | **enum** \| **length** | `auto`, `<length>`, `<percentage>` |
| `.inset-inline-start(@value)` | **enum** \| **length** | `auto`, `<length>`, `<percentage>` |
| `.inset-inline-end(@value)` | **enum** \| **length** | `auto`, `<length>`, `<percentage>` |
| `.inset-block(@value)` | **enum** \| **length** | `auto`, `<length>`, `<percentage>` |
| `.inset-block-start(@value)` | **enum** \| **length** | `auto`, `<length>`, `<percentage>` |
| `.inset-block-end(@value)` | **enum** \| **length** | `auto`, `<length>`, `<percentage>` |

### isolation

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.isolation(@value)` | **enum** | `isolate`, `auto` |

### object-fit

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.object-fit(@value)` | **enum** | `contain`, `cover`, `fill`, `none`, `scale-down` |

### object-position

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.object-position(@value)` | **enum** \| **length** | `top`, `bottom`, `left`, `right`, `center`, `<length>`, `<percentage>`, `<position-combination>` |

### overflow

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.overflow(@value)` | **enum** | `auto`, `hidden`, `visible`, `scroll`, `clip` |
| `.overflow-x(@value)` | **enum** | `auto`, `hidden`, `visible`, `scroll`, `clip` |
| `.overflow-y(@value)` | **enum** | `auto`, `hidden`, `visible`, `scroll`, `clip` |

### overscroll-behavior

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.overscroll-behavior(@value)` | **enum** | `auto`, `contain`, `none` |
| `.overscroll-behavior-x(@value)` | **enum** | `auto`, `contain`, `none` |
| `.overscroll-behavior-y(@value)` | **enum** | `auto`, `contain`, `none` |

### position

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.position(@value)` | **enum** | `static`, `relative`, `absolute`, `fixed`, `sticky` |

### visibility

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.visibility(@value)` | **enum** | `visible`, `hidden`, `collapse` |

### z-index

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.z-index(@value)` | **enum** \| **integer** | `auto`, `<integer>` |

---

## Flexbox Mixins

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.flex-basis(@value)` | **enum** \| **length** | `auto`, `<length>`, `<percentage>` |
| `.flex-direction(@value)` | **enum** | `row`, `row-reverse`, `column`, `column-reverse` |
| `.flex-grow(@value)` | **number** | `<number>` (обычно 0-1+) |
| `.flex-shrink(@value)` | **number** | `<number>` (обычно 0-1+) |
| `.flex-wrap(@value)` | **enum** | `nowrap`, `wrap`, `wrap-reverse` |
| `.order(@value)` | **integer** | `<integer>` (может быть отрицательным) |

---

## Grid Mixins

### grid-template-areas / grid-area

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.grid-areas(@value)` | **enum** \| **string** | `none`, `<string>` (multiline grid area names) |
| `.grid-area(@value)` | **enum** \| **string** \| **integer** | `auto`, `<custom-ident>`, `<integer>`, `span <integer>` |

### grid-auto-columns / grid-auto-rows

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.grid-auto-cols(@value)` | **enum** \| **length** \| **string** | `auto`, `min-content`, `max-content`, `<length>`, `<percentage>`, `minmax()`, `<fr>` |
| `.grid-auto-rows(@value)` | **enum** \| **length** \| **string** | `auto`, `min-content`, `max-content`, `<length>`, `<percentage>`, `minmax()`, `<fr>` |

### grid-auto-flow

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.grid-flow(@value)` | **enum** | `row`, `column`, `dense`, `row dense`, `column dense` |

### grid-column / grid-row

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.grid-col(@value)` | **enum** \| **integer** \| **string** | `auto`, `<integer>`, `<integer> / <integer>`, `span <integer>` |
| `.grid-col-start(@value)` | **enum** \| **integer** | `auto`, `<integer>` |
| `.grid-col-end(@value)` | **enum** \| **integer** | `auto`, `<integer>` |
| `.grid-row(@value)` | **enum** \| **integer** \| **string** | `auto`, `<integer>`, `<integer> / <integer>`, `span <integer>` |
| `.grid-row-start(@value)` | **enum** \| **integer** | `auto`, `<integer>` |
| `.grid-row-end(@value)` | **enum** \| **integer** | `auto`, `<integer>` |

### grid-template-columns / grid-template-rows

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.grid-cols(@value)` | **enum** \| **string** | `none`, `subgrid`, `<track-list>` (например: `repeat(3, 1fr)`, `200px 1fr 100px`) |
| `.grid-rows(@value)` | **enum** \| **string** | `none`, `subgrid`, `<track-list>` (например: `repeat(3, 1fr)`, `200px 1fr 100px`) |

---

## Spacing Mixins

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.gap(@value)` | **length** | `<length>`, `<percentage>` (например: `16px`, `1rem`, `2%`) |
| `.gap-x(@value)` | **length** | `<length>`, `<percentage>` (column-gap, горизонталь) |
| `.gap-y(@value)` | **length** | `<length>`, `<percentage>` (row-gap, вертикаль) |
| `.m(@value)` | **length** | `<length>`, `<percentage>`, `auto` (margin со всех сторон) |
| `.mt(@value)` | **length** | `<length>`, `<percentage>`, `auto` (margin-top) |
| `.mr(@value)` | **length** | `<length>`, `<percentage>`, `auto` (margin-right) |
| `.mb(@value)` | **length** | `<length>`, `<percentage>`, `auto` (margin-bottom) |
| `.ml(@value)` | **length** | `<length>`, `<percentage>`, `auto` (margin-left) |
| `.mx(@value)` | **length** | `<length>`, `<percentage>`, `auto` (margin horizontal) |
| `.my(@value)` | **length** | `<length>`, `<percentage>`, `auto` (margin vertical) |
| `.ms(@value)` | **length** | `<length>`, `<percentage>`, `auto` (margin-inline-start) |
| `.me(@value)` | **length** | `<length>`, `<percentage>`, `auto` (margin-inline-end) |
| `.p(@value)` | **length** | `<length>`, `<percentage>` (padding со всех сторон) |
| `.pt(@value)` | **length** | `<length>`, `<percentage>` (padding-top) |
| `.pr(@value)` | **length** | `<length>`, `<percentage>` (padding-right) |
| `.pb(@value)` | **length** | `<length>`, `<percentage>` (padding-bottom) |
| `.pl(@value)` | **length** | `<length>`, `<percentage>` (padding-left) |
| `.px(@value)` | **length** | `<length>`, `<percentage>` (padding horizontal) |
| `.py(@value)` | **length** | `<length>`, `<percentage>` (padding vertical) |
| `.ps(@value)` | **length** | `<length>`, `<percentage>` (padding-inline-start) |
| `.pe(@value)` | **length** | `<length>`, `<percentage>` (padding-inline-end) |

---

## Sizing Mixins

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.w(@value)` | **enum** \| **length** | `auto`, `<length>`, `<percentage>`, `<viewport-units>` (например: `100%`, `50vw`, `100dvh`, `min-content`, `max-content`, `fit-content`) |
| `.min-w(@value)` | **enum** \| **length** | `auto`, `<length>`, `<percentage>`, `<viewport-units>` |
| `.max-w(@value)` | **enum** \| **length** | `none`, `auto`, `<length>`, `<percentage>`, `<viewport-units>` |
| `.h(@value)` | **enum** \| **length** | `auto`, `<length>`, `<percentage>`, `<viewport-units>` (например: `100%`, `50vh`, `100dvh`, `min-content`, `max-content`, `fit-content`) |
| `.min-h(@value)` | **enum** \| **length** | `auto`, `<length>`, `<percentage>`, `<viewport-units>` |
| `.max-h(@value)` | **enum** \| **length** | `none`, `auto`, `<length>`, `<percentage>`, `<viewport-units>` |
| `.size(@value)` | **enum** \| **length** | `auto`, `<length>`, `<percentage>`, `<viewport-units>` (одно значение для width и height) |
| `.size(@width; @height)` | **enum** \| **length** | Два значения: width и height (перегрузка миксина) |

---

## Alignment Mixins

### align-content

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.align-content(@value)` | **enum** | `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`, `stretch`, `baseline`, `normal` |

### align-items

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.align-items(@value)` | **enum** | `start`, `end`, `center`, `stretch`, `baseline`, `last baseline`, `safe start`, `safe end`, `safe center` |

### align-self

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.align-self(@value)` | **enum** | `auto`, `flex-start`, `flex-end`, `center`, `stretch`, `baseline`, `last baseline`, `safe flex-start`, `safe flex-end`, `safe center` |

### justify-content

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.justify-content(@value)` | **enum** | `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`, `stretch`, `baseline`, `normal`, `safe start`, `safe end`, `safe center` |

### justify-items

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.justify-items(@value)` | **enum** | `start`, `end`, `center`, `stretch`, `normal`, `safe start`, `safe end`, `safe center` |

### justify-self

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.justify-self(@value)` | **enum** | `auto`, `start`, `end`, `center`, `stretch`, `safe start`, `safe end`, `safe center` |

### place-content

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.place-content(@value)` | **enum** | `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`, `stretch`, `baseline`, `safe start`, `safe end`, `safe center` |

### place-items

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.place-items(@value)` | **enum** | `start`, `end`, `center`, `stretch`, `baseline`, `safe start`, `safe end`, `safe center` |

### place-self

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.place-self(@value)` | **enum** | `auto`, `start`, `end`, `center`, `stretch`, `safe start`, `safe end`, `safe center` |

---

## Typography Mixins

| Mixin | Parameter Type | Values |
|-------|---------------|---------|
| `.font-family(...)` | **string** \| **enum** | Переменное количество аргументов: имена шрифтов и generic-family (`Arial`, `'Roboto'`, `sans-serif`, `serif`, `monospace`, `cursive`, `fantasy`) |
| `.font-size(@value)` | **length** \| **enum** | Абсолютные единицы (`16px`, `14px`), относительные (`1rem`, `1.5em`, `120%`), viewport-единицы (`5vw`, `3vh`), ключевые слова (`small`, `medium`, `large`, `x-large`, `xx-large`, `smaller`, `larger`) |
| `.font-stretch(@value)` | **enum** | `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`, процентные значения (`50%`, `75%`, `100%`, `125%`, `200%`) |
| `.font-style(@value)` | **enum** | `normal`, `italic`, `oblique`, `oblique <angle>` (например `oblique 14deg`) |
| `.font-variant-numeric(@value)` | **enum** | `normal`, `ordinal`, `slashed-zero`, `lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions` (можно комбинировать) |
| `.font-weight(@value)` | **number** \| **enum** | Числовые значения `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, ключевые слова `lighter`, `bolder` |
| `.letter-spacing(@value)` | **length** | Любые единицы длины (`1px`, `0.05em`, `-0.02em`), где положительные значения увеличивают расстояние, отрицательные — уменьшают |
| `.line-clamp(@value)` | **number** | Количество строк для отображения (`1`, `2`, `3`, и т.д.) |
| `.line-height(@value)` | **number** \| **length** \| **enum** | Числовые множители (`1.5`, `2`), абсолютные единицы (`24px`, `1.75rem`), проценты (`150%`), ключевое слово `normal` |
| `.list-style(@value)` | **string** | Shorthand для list-style свойств (например `disc inside`, `square outside`) |
| `.list-style-type(@value)` | **enum** | `none`, `disc`, `circle`, `square`, `decimal`, `decimal-leading-zero`, `lower-alpha`, `upper-alpha`, `lower-roman`, `upper-roman` и другие |
| `.list-style-position(@value)` | **enum** | `inside`, `outside` |
| `.list-style-image(@value)` | **string** | `none`, `url(...)` |
| `.text-align(@value)` | **enum** | `left`, `center`, `right`, `justify`, `start`, `end` |

---

## Global Values

Все миксины также поддерживают глобальные CSS значения (доступны через отдельные пресеты):

- `initial` - начальное значение CSS свойства
- `inherit` - наследование от родителя
- `unset` - комбинация inherit/initial в зависимости от свойства

---

## Notes for VS Code Extension

1. **Enum values** должны предлагаться как автодополнение при вводе параметра
2. **Length values** требуют ввода числа + единицы измерения (px, rem, em, %, vh, vw, etc.)
3. **Number values** - чистые числа без единиц
4. **Integer values** - целые числа (могут быть отрицательными для order, z-index)
5. **String values** - произвольные строки (для grid-areas, например)
6. **Safe variants** - специальные значения с префиксом `safe` для безопасного выравнивания
