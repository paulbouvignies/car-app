// @ts-ignore
import {BigLink} from "./BigLink";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import '../style/index.css'

export default {
  title: 'Component Web/Link',
  component: BigLink,
} as ComponentMeta<typeof BigLink>;

const Template: ComponentStory<typeof BigLink> = (args) => <BigLink {...args} />;
export const large_link = Template.bind({});
large_link.args = {
  label: "about us",
  target: "_blank",
  destination: "https://www.google.com",
  title: "link to the about us page",
}
