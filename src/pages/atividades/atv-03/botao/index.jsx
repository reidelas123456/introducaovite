import styles from './index.module.css';

function Botao({ texto, aoClicar, acao }) {
  return (
    <button
      className={`${styles.botao} ${styles[acao]}`}
      onClick={() => aoClicar(acao)}
    >
      {texto}
    </button>
  );
}

export default Botao;