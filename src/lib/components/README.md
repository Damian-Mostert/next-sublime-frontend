# forms;



# @modals

imports modal components, use as follows:

```jsx
import Example from "@modals/example";

import { Popup } from "@components";

//in use effect:
Popup.fire({
  modal: Example,
  //...other popup config;
  canClose: true,
  background: "blur",
});
```

# @navigation

just for navigation components, example:

```jsx
"use client";

import { Header } from "@navigation/header/header";
import { BreadCrumb } from "@navigation/breadcrumb/breadcrumb";
import { Footer } from "@navigation/footer/footer";

import { Popup } from "@components";

import "@styles";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <BreadCrumb />
        <main>{children}</main>
        <Footer />
        <Popup />
      </body>
    </html>
  );
}
```

# @static

generates static large components, example:

```jsx
import Static from "@static";

<Static
  type="Banner"
  data={{
    type: "Testimonials",
    data: [
      {
        title: "hello world",
        text: "test",
      },
      {
        title: "hello world",
        text: "test",
      },
      {
        title: "hello world",
        text: "test",
      },
    ],
  }}
/>;
```
