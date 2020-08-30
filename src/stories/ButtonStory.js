import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../Button";

storiesOf("Story", module)
  .addWithJSX("기본 설정", () => <Button>전송하기</Button>)
  .addWithJSX("large예제", () => <Button large>large예제</Button>)
  .addWithJSX("xlarge예제", () => <Button xlarge>xlarge예제</Button>)
  .addWithJSX("small예제", () => <Button small>small예제</Button>)
  .addWithJSX("xsmall예제", () => <Button xsmall>xsmall예제</Button>)
  .addWithJSX("primary예제", () => <Button primary>primary예제</Button>)
  .addWithJSX("secondary예제", () => <Button secondary>secondary예제</Button>)
  .addWithJSX("large와 primary를 함께 쓰는 예제", () => (
    <Button large primary>
      large와 primary를 함께 쓰는 예제
    </Button>
  ))
  .addWithJSX("onPress예제", () => (
    <Button onPress={action("onPress이벤트 발생")}>onPress예제</Button>
  ));
