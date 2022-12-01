// @ts-ignore
import {BoolInput} from "./BoolInput";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import '../style/index.css'

export default {
  title: 'Component Web/Form/Boolean Input',
  component: BoolInput,
} as ComponentMeta<typeof BoolInput>;

const Template: ComponentStory<typeof BoolInput> = (args) => <BoolInput {...args} />;
export const boolean_input = Template.bind({});
boolean_input.args = {
  type: 'radio',
  label: 'une entreprise ',
}
