# HOW TO ORGANIZE CSS

##  :one: SASS INHERITANCE

```css
@extend @mixin,e.g.clearfix
```

## :two: GENERATED CONTENT

```css
content
```



##  :three: POSITION AND LAYOUT

```css
position z-index top bottom left right Flexbox properties float clear
```

## :four: DISPLAY AND VISIBILITY

```css
display opacity transform
```

## :five: CLIPPING

```css
overflow clip
```

## :six: ANIMATION

```css
animation transition
```

## :seven: BOX MODEL (FROM OUTSIDE IN)

```css
margin box-shadow border border-radius box-sizing width height padding
```

##  :eight: BACKGROUND

```css
background cursor
```

##  :nine: TYPOGRAPHY

```css
font-size line-height font-family font-weight font-style text-align text-transform word-spacing color
```

##  :keycap_ten: PSEUDO-CLASSES & PSEUDO-ELEMENTS (NESTED RULES)

```css
:hover :focis :active :before :after :first-child :last-child
```

## :innocent:would be like this

```css
.selector {
  /* Positioning */
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;

  /* Display & Box Model */
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 10px solid #333;
  margin: 10px;

  /* Color */
  background: #000;
  color: #fff
  
  /* Text */
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.4;
  text-align: right;

  /* Other */
  cursor: pointer;
}
```



