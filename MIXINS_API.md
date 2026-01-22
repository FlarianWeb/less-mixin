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
