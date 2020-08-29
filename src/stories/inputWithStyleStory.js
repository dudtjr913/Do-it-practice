import React from "react";
import { storiesOf } from "@storybook/react";

import InputWithStyle from "../inputWithStyle";

storiesOf("InputWithStyle", module)
  .add("기본 설정", () => <InputWithStyle name="name" />)
  .add("label 예제", () => <InputWithStyle name="name" label="이름" />)
  .add("value 예제", () => (
    <InputWithStyle name="name" label="이름" value="두잇" />
  ))
  .add("에러 예제", () => (
    <InputWithStyle
      name="name"
      label="이름"
      value="두잇"
      errorMessage="이름을 입력해주세요."
    />
  ));
