

import Link from 'next/link'
import {BackLink, BaseInput, Button} from "design-system";


const Login = () => {
    return (
        <main className="loginPage">
            <div className='loginPage__link'>
                <BackLink href="/" label="retour"/>
            </div>
            <div className="loginPage__center">
                <h1 className="loginPage__center__title">Connexion</h1>
                <form className="loginPage__center__form" action="">
                    <BaseInput type='text' label='identifiant' required/>
                    <BaseInput type='password' label='mot de passe' required/>
                    <Button type="submit" label="Se connecter" />
                </form>
            </div>

        </main>
    )
}
export default Login