function Pessoa({nome, idade, profissao, foto}) {

    return (
        <div>
            <h1>Nome: {nome}</h1>
            <h2>Idade: {idade}</h2>
            <h2>Profissão: {profissao}</h2>
            <img src={foto} alt="Foto de {nome}" />
        </div>
    )
}
export default Pessoa;