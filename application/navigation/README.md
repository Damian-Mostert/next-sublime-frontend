# NEXT SUPER FRONTEND BOILER PLATE

## @components

#### Accordion

usage

```jsx
<Accordion variant="default" titles={["A", "B"]}>
  <div>A</div>
  <div>B</div>
</Accordion>
```

#### Button

types

```jsx
<Button label="test" onClick={onClick}/>
<button onClick={onClick}>test</button>
```

```jsx
<Button label="test" href={href} />
<a href={href}>test</a>
```

```jsx
<Button label="test" target={for}/>
<label for={for}>test<label>
```

#### Form

```jsx
<Form
    variant=""
    text={/*text config*/}
    fields={[
        //array of input config.
    ]}
    onSubmit={(values)=>{
        //do something with values, values are set in fields names
    }}
>
```

alternatively you can also just use it like this

```jsx
export const LoginForm = () => Form.new(text, fields, handle, variant);

<LoginForm />;
```

#### Input

```jsx
<Input type="" variant="" onChange={(value)=>{

}}>

```

#### Layout
```jsx
<Layout>
    test
</Layout>
<section>
    <div>
        test
    </div>
</section>
```
#### List

#### Nav

#### Parallax

#### Popup

#### Slider

#### Table

#### Text

```jsx
<Text
title={/*title props*/}
paragraphs=[
    "I make a p tag"
]
/>
```

### Title

```jsx
<Title
pre="pre"
text="some text "
extra="different style text"
>
```

## @services

## @styles

imports global styles, keep in layout.js

## @sass-variables

## @static

## @forms

## @modules

## @navigation
