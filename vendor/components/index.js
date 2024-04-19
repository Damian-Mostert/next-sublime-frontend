"use client";

//general;
import { Button } from "./button/button";
import { Form } from "./form/form";
import { Input } from "./input/input";
import { Layout } from "./layout/layout";
import { Parallax } from "./parallax/parallax";
import { Slider } from "./slider/slider";
import { Table } from "./table/table";
import { Title } from "./title/title";
import { Text } from "./text/text";
import { List } from "./list/list";
import { Md, Lg } from "./tools/Md&Lg";
import { A, Img } from "./tools/A&Img";
import { Icon, Icons } from "./icon/icon";
import { Banner } from "./banner/banner";
//tools;
//popups for popup;
export { Build } from "./tools/build";
export { Popup } from "./popup/popup";
//global components;
export {
  Banner,
  Button,
  Form,
  Input,
  Layout,
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
  Icon,
  Icons,
};

//web sections;
export default {
  Banner,
  Button,
  Form,
  Input,
  Layout,
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
  Icon,
  Icons,
  Null({ children }) {
    return <>{children}</>;
  },
};
