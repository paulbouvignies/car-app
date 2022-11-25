// @ts-ignore
import {FooterLink} from "./FooterLink";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
  title: 'Component Web/Link',
  component: FooterLink,
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => <FooterLink {...args} />;
export const footer_link = Template.bind({});
footer_link.args = {
  label: "about us",
  target: "_blank",
  destination: "https://www.google.com",
  title: "link to the about us page",
}
