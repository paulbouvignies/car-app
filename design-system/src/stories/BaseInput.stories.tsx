// @ts-ignore
import {BaseInput} from "./BaseInput";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import '../style/index.css'
export default {
  title: 'Component Web/Form/Partial/Base Input',
  component: BaseInput,
} as ComponentMeta<typeof BaseInput>;

const Template: ComponentStory<typeof BaseInput> = (args) => <BaseInput {...args} />;
export const base_input = Template.bind({});
base_input.args = {
  type: "text",
  label: "Nom",
  required: true,
}
