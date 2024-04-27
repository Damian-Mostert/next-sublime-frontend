# USAGE

Using with form component

```jsx
<div>
  {Form.new({
    variant,
    fields,
    text,
    button,
    "forms.contact",//"forms.contact::client if you want the request to not pass through the backend",
    successText,
    button,
  })}
</div>
```

Usage in script

```jsx
import services from "@services";
//import services from "@services/client"; for straight client requests

services.forms.contact(message,{/*popup configuration*/}).then((response) => {
  if (response.data && response.success) {
    Popup.fire({
      ...response.data,
      modal: popups[response.data.popup],
    });
  }
});
```

application/services/forms.js

```js
export default {
  contact: "forms/contact",
};
```
