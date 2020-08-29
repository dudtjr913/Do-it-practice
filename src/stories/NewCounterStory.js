import React from "react";
import { storiesOf } from "@storybook/react";
import CountParent from "../CountParent";

storiesOf("NewCounter", module).addWithJSX("기본 설정", () => <CountParent />);
