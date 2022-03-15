import Layout from "../components/Layout"
import Listado from "../components/Listado"
import ListadoBlog from "../components/ListadoBlog"



const Blog = ({entradas}) => {


    return (
        <div>
           <Layout
           pagina="Blog"
           >
           
            <main className="contenedor">
                <ListadoBlog
                entradas={entradas}
                />
            </main>
            
           </Layout> 
        </div>
    )
}

export async function getStaticProps() {

    const url=`${process.env.API_URL}/blogs`
    const respuesta=await fetch(url)
    const entradas=await respuesta.json()

    return{
        props:{
            entradas
        }
    }
}

export default Blog