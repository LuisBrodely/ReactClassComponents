import {Component} from "react";
import data from "../helpers/data.json"
console.log(data)

function ListaDeElementos(props) {
    return(
        <li>{props.nombre}</li>
    );
}

class RenderizadoElementos extends Component{
    constructor(props) {
        super(props);
        this.state={
            estaciones:["Angel","Oscar","Brodely","Axel","Chomi"]
        }
    }

    render() {
        return(
            <div>
                <h3>Renderizado de Elementos</h3>
                <ul>
                    {this.state.estaciones.map((elemento,index)=><li key={index}>{elemento}</li>)}
                </ul>

                <ol>
                    {data.RedesSociales.map(el=><ListaDeElementos nombre={el.nombre} key={el.id}/>)}
                </ol>
            </div>
        );
    }
}

export default RenderizadoElementos;