// @ts-ignore
import {BackLink} from "./BackLink";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
  title: 'Component Web/Link',
  component: BackLink,
} as ComponentMeta<typeof BackLink>;

const Template: ComponentStory<typeof BackLink> = (args) => <BackLink {...args} />;
export const back_link = Template.bind({});
back_link.args = {
  label: "about us",
  destination: "https://www.google.com",
  title: "link to the about us page",
}
