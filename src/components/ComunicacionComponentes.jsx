import {Component} from "react";

export default class ComunicacionComponentes extends Component{
    state={
        estadoPadre:0
    }

    //Este metodo lo ejecuta el hijo haciendo que cambie el estado de su padre
    incrementarEstadoPadre = (e) =>{
        this.setState({
            estadoPadre: this.state.estadoPadre+1
        })
    }

    render() {
        return(
            <div>
                <h3>Comunicacion entre Componentes</h3>
                <Hijo
                    mensaje="Mensaje para el Hijo 1"
                    incrementarContador={this.incrementarEstadoPadre}
                />
                <Hijo
                    mensaje="Mensaje para el Hijo 2"
                    incrementarContador={this.incrementarEstadoPadre}
                />
                <h4>Contador Padre: {this.state.estadoPadre}</h4>
            </div>
        );
    }
}

const Hijo = (props) => {
    return(
        <div>
            <h4>{props.mensaje}</h4>
            <button onClick={props.incrementarContador}>+</button>
        </div>
    );
}