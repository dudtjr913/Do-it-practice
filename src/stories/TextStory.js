import { storiesOf } from "@storybook/react";
import React from "react";

import Text from "../Text";

storiesOf("Text", module)
  .add("기본 설정", () => <Text>안녕하세요</Text>)
  .add("large예제", () => <Text large>안녕하세요</Text>)
  .add("xlarge예제", () => <Text xlarge>안녕하세요</Text>)
  .add("small예제", () => <Text small>안녕하세요</Text>)
  .add("xsmall예제", () => <Text xsmall>안녕하세요</Text>)
  .add("primary예제", () => <Text primary>안녕하세요</Text>)
  .add("secondary예제", () => <Text secondary>안녕하세요</Text>)
  .add("primary와 large를 함께 쓰는 예제", () => (
    <Text large primary>
      안녕하세요
    </Text>
  ));
