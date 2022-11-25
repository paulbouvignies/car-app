// @ts-ignore
import {BoolInput} from "./BoolInput";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
  title: 'Component Web/Form/Partial/Boolean Input',
  component: BoolInput,
} as ComponentMeta<typeof BoolInput>;

const Template: ComponentStory<typeof BoolInput> = (args) => <BoolInput {...args} />;
export const boolean_input = Template.bind({});
boolean_input.args = {
  type: 'radio',
  label: 'une entreprise ',
}
