function Eventos ({numero}){
    function meuEvento(){
        console.log(`click ativado: ${numero}`)
    }
    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}
export default Eventos;