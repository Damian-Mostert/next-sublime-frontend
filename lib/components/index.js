"use client";


//general;
import { Accordion } from "./accordion/accordion";
import { Button } from "./button/button";
import { Form } from "./form/form";
import { Input } from "./input/input";
import { Layout } from "./layout/layout";
import { Nav } from "./nav/nav";
import { Parallax } from "./parallax/parallax";
import { Slider } from "./slider/slider";
import { Table } from "./table/table";
import { Title } from "./title/title";
import { Text } from "./text/text";
import { List } from "./list/list";
import { Md, Lg } from "./tools/Md&Lg";
import { A, Img } from "./tools/A&Img";

//tools;
//modals for popup;
export { Build } from "./tools/build";
export { Popup } from "./popup/popup";
//global components;
export {
  Accordion,
  Button,
  Form,
  Input,
  Layout,
  Nav,
  Parallax,
  Slider,
  Table,
  Text,
  Title,
  List,
  Md,
  Lg,
  Img,
  A,
};

//build sections;
export default {
  Accordion,
  Button,
  Form,
  Input,
  Layout,
  Nav,
  Parallax,
  Slider,
  Table,
  Text,
  Title,
  List,
  Md,
  Lg,
  Img,
  A,
  Null({ children }) {
    return <>{children}</>;
  },
};
