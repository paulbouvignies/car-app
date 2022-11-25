
import React from "react";

import {BaseInput} from "./BaseInput";
import {Button} from "./Button";


export const LoginForm:React.FC = () => {
  return (
    <section className="login">
      <h1 className='login__title'>Connexion</h1>
      <form className="login__form">
        <div className="login__form__user">
          <BaseInput
            type="text"
            label="identifiant"
            required={true}
          />
          <BaseInput
            type="password"
            label="mot de passe"
            required={true}
          />
        </div>
        <Button
          type="button"
          label='Connexion'
        />
      </form>
    </section>
  );
};
