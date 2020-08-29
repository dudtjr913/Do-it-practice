import React from "react";
import { storiesOf } from "@storybook/react";
import CountParent from "../CountParent";

storiesOf("NewCounter", module).add("기본 설정", () => <CountParent />);
