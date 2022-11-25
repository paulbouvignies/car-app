// @ts-ignore
import {Button} from "./Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
  title: 'Component Web/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Primary= Template.bind({});
Primary.args = {
  label: 'component button',
}
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'component button',
  variant: 'secondary',
}
