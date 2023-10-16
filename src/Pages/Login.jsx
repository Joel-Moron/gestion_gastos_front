import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

import { Divider } from 'primereact/divider';
        
        

const Login = () => {

    return(
        <div className="flex w-full h-screen justify-center items-center">
            <div className="w-[80%] max-w-[1025px] h-[500px] bg-[#5f6769] flex p-10 gap-14 rounded-lg">
                <div className='flex flex-col items-center justify-center gap-5 p-5 md:items-center md:justify-center w-full md:w-auto'>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="usuario">Usuario</label>
                        <InputText id='usuario' placeholder='ingrese su usuario o correo'/>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="password">Contraseña</label>
                        <Password id='password' placeholder='ingrese su contraseña' feedback={false} toggleMask className=' [&>input]:w-full'/>
                    </div>
                    
                    <Button label='Iniciar sesión' className='bg-[#dfcdc3] border-[#dfcdc3]'/>
                    <div className='flex flex-col text-center md:hidden'>
                        <a href="recuperar">¿Perdiste tu contraseña?</a>
                        <span>¿No tienes cuenta? <a href="login">Registrate!</a></span>
                    </div>

                </div>
                <div className='flex-col flex-1 text-center items-center justify-center h-full p-5 hidden md:flex'>
                    <h2>Bienvenido</h2>
                    <Divider className='w-full'/>
                    <p>Tu web mas confiafle</p>
                    <Divider/>
                    <a href="recuperar">¿Perdiste tu contraseña?</a>
                    <span>¿No tienes cuenta? <a href="registro">Registrate!</a></span>
                </div>
            </div>
        </div>
    )
}

export default Login;