import {useState} from 'react'

function Condicional() {

    const[email, setEmail] = useState()
    const[userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail('')
    }
    return (
        <div>
            <h2>Cadastre seu email</h2>
            <form action="">
                <input type="email" placeholder="ex@gmail.com" onChange={(e)=> setEmail(e.target.value)} />
                <button onClick={enviarEmail}>Enviar email</button>
                {userEmail && (
                    <div>
                        <p>Email: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )}
            </form>
        </div>
    )
}
export default Condicional;