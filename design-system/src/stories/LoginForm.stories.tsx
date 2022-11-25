// @ts-ignore
import {LoginForm} from "./LoginForm";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import '../style/index.css'
export default {
  title: 'Component Web/Form',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;
export const login = Template.bind({});
login.args = {
  type: "text",
  label: "Nom",
  required: true,
}
