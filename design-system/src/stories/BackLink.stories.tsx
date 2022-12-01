// @ts-ignore
import {BackLink} from "./BackLink";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

import '../style/index.css'

export default {
  title: 'Component Web/Link',
  component: BackLink,
} as ComponentMeta<typeof BackLink>;

const Template: ComponentStory<typeof BackLink> = (args) => <BackLink {...args} />;
export const back_link = Template.bind({});
back_link.args = {
  label: "about us",
  href: "https://www.google.com",
}
