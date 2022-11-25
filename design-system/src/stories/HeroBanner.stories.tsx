// @ts-ignore
import {HeroBanner} from "./HeroBanner";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import '../style/index.css'
export default {
  title: 'Component Web/Hero Banner',
  component: HeroBanner,
} as ComponentMeta<typeof HeroBanner>;

const Template: ComponentStory<typeof HeroBanner> = (args) => <HeroBanner {...args} />;
export const With_content = Template.bind({});
With_content.args = {
  cover: "https://www.turbo.fr/sites/default/files/2018-02/alpine_sports_car_63.jpg",
  content: `
    Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France
    /n
    (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...).
    /n
    Notre expérience est à votre service pour répondre à toutes vos demandes
  `
}

export const Without_content = Template.bind({});
Without_content.args = {
  cover: "https://www.turbo.fr/sites/default/files/2018-02/alpine_sports_car_63.jpg",
}
