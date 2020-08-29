import { configure, setAddon } from "@storybook/react";
import interopRequireDefault from "../node_modules/babel-runtime/helpers/interopRequireDefault";
import JSXAddon from "storybook-addon-jsx";

function loadStories() {
  const context = require.context("../src/stories", true, /Story\.js$/);
  context.keys().forEach((srcFile) => {
    interopRequireDefault(context(srcFile));
  });
}

setAddon(JSXAddon);
configure(loadStories, module);
