import { useState } from 'react';
import styles from './index.module.css';

function Botao({ texto, aoClicar, acao, classe }) {
  return (
    <button
      className={`${styles.botao} ${classe}`}
      onClick={() => aoClicar(acao)}
    >
      {texto}
    </button>
  );
}

export default function Atividade03() {
  const [acao, setAcao] = useState('');

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Atividade 3</h1>

      <p className={styles.subtitulo}>
        Ação selecionada: <strong>{acao}</strong>
      </p>

 <div className={styles.botoes}>
<Botao texto="Cadastrar" aoClicar={setAcao} acao="Cadastrar" classe={styles.cadastrar} />
<Botao texto="Editar" aoClicar={setAcao} acao="Editar" classe={styles.editar} />
<Botao texto="Listar" aoClicar={setAcao} acao="Listar" classe={styles.listar} />
<Botao texto="Excluir" aoClicar={setAcao} acao="Excluir" classe={styles.excluir} />
<Botao texto="Cancelar" aoClicar={setAcao} acao="Cancelar" classe={styles.cancelar} />
</div>
</div>
    
  );
}