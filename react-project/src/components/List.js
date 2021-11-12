
import Item from './Item'

function List() {
    return (
        <>
            <h1>Lista</h1>
            <ul>
                <Item marca="Fiat" anoLancamento={1985}/>
                <Item marca="Toytota" anoLancamento={1985}/>
                <Item/>

            </ul> 
        </>
    )
}

export default List;