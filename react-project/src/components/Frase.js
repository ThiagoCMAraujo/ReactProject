import styles from './Frase.module.css'
function Frase() {
    return(
    <div className={styles.fraseContainer}>
        <p className={styles.fraseContent}>Componente de Frase</p>
    </div>
    )
}
export default Frase;