# Here you can set global styles or url's for API's

# @services

### example.json

```jsx
{
  "sub_service_name": "path_in_api",
}
```

then run

```sh
  npm run fix
```
this will update services;

### usage

make sure that .env contains a API_URL, this will be used for the base of all requests;

```env
API_URL=https://localhost:8001/api/
```

```jsx
import services from "@services";

services.example
  .sub_service_name(
    {
      /*data to send to api*/
    },
    {
      fire:true,//if false popup wont fire;
      //optional handlers for popups;
      success: (message) => ({
        icon: "success",
        title: "Success X",
        paragraphs: [message],
        background: "blur",
        canClose: true,
      }),
      error: (message) => ({
        icon: "success",
        title: "Whoops",
        paragraphs: [message],
        background: "blur",
        canClose: true,
      }),
    }
  )
  .then((response) => {
    //will return null if fail or if success data from api;
  });
```

# @styles

this will update css variables, make sure to restart the server once files here have been edited.
<br>
This updates css variables, tailwind and scss variables;

### colors

set colors in "./styles/colors.json".

### fonts

set colors in "./styles/colors.json".

### screens

set colors in "./styles/screens.json".

### sizes

set screens in "./styles/sizes.json".

### variants

variants is a configuration file for general components, like "Button" or "Input", here you can control there styles globally with scss;
