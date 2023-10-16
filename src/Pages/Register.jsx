import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { useFormValidation } from '../Hooks/hook/ValidationHook';



const Login = () => {



    return(
        <div className="flex w-full h-screen justify-center items-center">
            <div className="w-[80%] max-w-[1025px] lg:h-[500px] h-[auto] bg-[#5f6769] flex flex-col p-10 gap-3 rounded-lg">
                <h2 className='text-center'>Ingrese sus datos</h2>
                <div className='flex flex-wrap flex-1 items-center justify-center gap-5 p-5 md:items-center md:justify-center w-full'>
                    <div className='flex flex-col w-[350px]'>
                        <label htmlFor="nombre">Nombre</label>
                        <InputText id='nombre' placeholder='ingrese su nombre'/>
                    </div>
                    <div className='flex flex-col w-[350px]'>
                        <label htmlFor="apellidop">Apellido Paterno</label>
                        <InputText id='apellidop' placeholder='ingrese su apellido paterno'/>
                    </div>
                    <div className='flex flex-col w-[350px]'>
                        <label htmlFor="apellido">Apellido Materno</label>
                        <InputText id='apellido' placeholder='ingrese su apellido materno'/>
                    </div>
                    <div className='flex flex-col w-[350px]'>
                        <label htmlFor="correo">Correo</label>
                        <InputText id='correo' placeholder='ingrese su correo electronico'/>
                    </div>
                    <div className='flex flex-col w-[350px]'>
                        <label htmlFor="password">Contraseña</label>
                        <Password id='password' placeholder='ingrese su contraseña' toggleMask className=' [&>input]:w-full'/>
                    </div>
                    <div className='flex flex-col w-[350px]'>
                        <label htmlFor="verifipassword">Confirmar contraseña</label>
                        <Password id='verifipassword' placeholder='confirmar contraseña' feedback={false} className=' [&>input]:w-full'/>
                    </div>

                </div>
                
                <div className='flex flex-wrap justify-around items-center'>
                    <div className='flex flex-col text-center'>
                        <a href="recuperar">¿Perdiste tu contraseña?</a>
                        <span>¿Ya tienes cuenta? <a href="/">Inicia sesión!</a></span>
                    </div>
                    <Button label='Registrarme' className='bg-[#dfcdc3] border-[#dfcdc3] w-fit'/>
                </div>
            </div>
        </div>
    )
}

export default Login;