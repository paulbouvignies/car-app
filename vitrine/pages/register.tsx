import Link from "next/link";
import {HeroBanner, BoolInput, BaseInput, Button} from "design-system";
import React, {useEffect, useState} from "react";




const Register:React.FC = () => {

    const [value, setValue] = useState('');
    const [userFirstName, setUserFirstName] = useState('');



    return (
        <main className="loginPage">
            <HeroBanner
                cover="https://www.turbo.fr/sites/default/files/2018-02/alpine_sports_car_63.jpg"
                content=" Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France /n (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...). /n Notre expérience est à votre service pour répondre à toutes vos demandes"
            />
            <section className="createAccount">
                <h1 className='createAccount__title'>Inscription</h1>
                <form className="createAccount__form">
                    <input type="text" value={value} onChange={ (e) => setValue(e.target.value)}/>
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
                            value={userFirstName}
                            onChange={(e) => setUserFirstName(e.target.value)}
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
                        type="submit"
                        label='Demander mon inscription'
                    />
                </form>
            </section>
        </main>
    )
}
export default Register