import { useState } from 'react';
import styles from './index.module.css';

export default function Atividade04 () {
    const [qtd, setQtd] = useState('');
    const [produto, setProduto] = useState('');
    const [lista, setLista] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!qtd || !produto) return;

        const novoItem = {
            id: Date.now(),
            qtd,
            produto
        };

        setLista([...lista, novoItem]);


        setQtd('');
        setProduto('');
    };

    return (
        <div className={styles.container}>
            <h1>Atividade 4 - Lista de compra</h1>

            <form onSubmit={handleSubmit} className={styles.formulario}>
                <div className={styles.linha}>
                    <input
                        type="number"
                        placeholder="Qtd"
                        value={qtd}
                        onChange={(e) => setQtd(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Produto..."
                        value={produto}
                        onChange={(e) => setProduto(e.target.value)}
                    />

                    <button type="submit">Adicionar</button>
                </div>
            </form>

            <div className={styles.lista}>
                {lista.map(item => (
                    <p key={item.id}>
                        {item.qtd}x {item.produto}
                    </p>
                ))}
            </div>
        </div>
    );
}