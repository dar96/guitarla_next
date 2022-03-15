import { formatearFecha } from "../helpers"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Entrada.module.css"

const Entrada = ({entrada}) => {
    
    const {titulo, resumen, Imagen, published_at, id, url}= entrada

    return (
        <article>
            <Image layout="responsive" width="200" height="200" src={Imagen.url} alt={`imagen blog ${titulo}`} />

            <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.resumen}>{resumen}</p>
            <Link href={`/blog/${url}`}>
                <a className={styles.enlace}>
                    Leer entrada
                </a>
               
            </Link>
            </div>

        </article>
    )
}

export default Entrada
