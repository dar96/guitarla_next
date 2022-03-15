import Image from "next/image"
import Layout from "../components/Layout"
import styles from "../styles/Nosotros.module.css"


const Nosotros = () => {
    return (
        <div>
           <Layout
           pagina="Nosotros"
           >
           
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>
                
                <div className={styles.contenido}>

                    <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre nosotros" />

                    <div>
                        <p>Morbi nisi nulla, pretium non condimentum ac, tempus ac odio. Phasellus a orci eget lectus tempus aliquet non in lorem. Sed rutrum bibendum fringilla. Nunc at quam leo. Nullam in quam vel ipsum malesuada ornare. Nullam nec enim varius lorem venenatis accumsan nec vel tortor. Cras id purus nec nisi bibendum convallis sed eu urna. Pellentesque a ante convallis, tincidunt nisl sed, fermentum mi. Morbi semper accumsan purus, vel dictum ligula commodo tincidunt. In tempor in libero eget fringilla. Sed dignissim enim nisl, eu tempor erat semper ut. Donec scelerisque suscipit consectetur. Aliquam faucibus a odio at egestas.</p>
                        <p>Maecenas auctor sem id elit eleifend, a sodales felis ultrices. Morbi nisi nulla, pretium non condimentum ac, tempus ac odio. Phasellus a orci eget lectus tempus aliquet non in lorem. Sed rutrum bibendum fringilla. Nunc at quam leo. Nullam in quam vel ipsum malesuada ornare. Nullam nec enim varius lorem venenatis accumsan nec vel tortor. Cras id purus nec nisi bibendum convallis sed eu urna. Pellentesque a ante convallis, tincidunt nisl sed, fermentum mi. Morbi semper accumsan purus, vel dictum ligula commodo tincidunt. In tempor in libero eget fringilla. Sed dignissim enim nisl, eu tempor erat semper ut. Donec scelerisque suscipit consectetur. Aliquam faucibus a odio at egestas.</p>

                    </div>
                </div>
            </main>
            
           </Layout> 
        </div>
    )
}

export default Nosotros
