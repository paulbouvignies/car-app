
import React from "react";

import "../style/CreateAccountForm.css";
import {BoolInput} from "./BoolInput";
import {BaseInput} from "./BaseInput";
import {Button} from "./Button";


export const CreateAccountForm:React.FC = () => {
  return (
    <section className="createAccount">
      <h1 className='createAccount__title'>Inscription</h1>
      <form className="createAccount__form">
        <p className="createAccount__form__role">Je suis:</p>
        <div className="createAccount__form__role__options">
          <BoolInput
            type="radio"
            label="une entreprise"
          />
          <BoolInput
            type="radio"
            label="un particulier"
          />
        </div>
        <div className="createAccount__form__user">
          <BaseInput
            type="text"
            label="Nom"
            required={true}
          />
          <BaseInput
            type="text"
            label="Prénom"
            required={true}
          />
          <BaseInput
            type="email"
            label="E-mail"
            required={true}
          />
          <BaseInput
            type="tel"
            label="Numéro de téléphone"
            required={true}
          />
        </div>
        <BoolInput
          type={"checkbox"}
          label="j’atteste que je possède un permis de conduire valide."
        />
        <Button
          type="button"
          label='Demander mon inscription'
        />
      </form>
    </section>
  );
};
