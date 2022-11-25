// @ts-ignore
import {CreateAccountForm} from "./CreateAccountForm";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import '../style/index.css'
export default {
  title: 'Component Web/Form',
  component: CreateAccountForm,
} as ComponentMeta<typeof CreateAccountForm>;

const Template: ComponentStory<typeof CreateAccountForm> = () => <CreateAccountForm />;
export const create_account = Template.bind({});
create_account.args = {
  type: "text",
  label: "Nom",
  required: true,
}
