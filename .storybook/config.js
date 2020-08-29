import { configure } from "@storybook/react";
import interopRequireDefault from "../node_modules/babel-runtime/helpers/interopRequireDefault";

function loadStories() {
  const context = require.context("../src/stories", true, /Story\.js$/);
  context.keys().forEach((srcFile) => {
    interopRequireDefault(context(srcFile));
  });
}

configure(loadStories, module);
