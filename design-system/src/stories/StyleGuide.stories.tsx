// @ts-ignore
import {StyleGuide} from "./StyleGuide";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
  title: 'Style Guide',
  component: StyleGuide,
} as ComponentMeta<typeof StyleGuide>;

const Template: ComponentStory<typeof StyleGuide> = (args) => <StyleGuide {...args} />;

export const Color = Template.bind({});
Color.args = {
  category: 'color'
}
export const Font = Template.bind({});
Font.args = {
  category: 'font'
}
