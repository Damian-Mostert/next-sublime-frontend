# Tools

### Popup

```jsx
Popup.fire({
    canClose:true,
    bg:"blur",
    text:{
        title:"text title",
        paragraphs:[
            "I am a P tag."
        ]
    }
    confirmButton:{
        label:"",
        variant:""
    }
});
```

# General building components;

edit styles using "config/styles/variants", everything else should be good to go.
<br>
components only accept extra classNames for in depth styling, use tailwind classes.
<br>
you can use variant to select a variant; eg.

# examples;

## accordion;

```jsx
import { Nav } from "@components";

<Nav titles={["A", "B", "C"]}>
  <div>A</div>
  <div>B</div>
  <div>C</div>
</Nav>;
```
