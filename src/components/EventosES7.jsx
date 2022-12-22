import {Component} from "react";

class EventosES7 extends Component{
    //Ya no es necesario en las ultimas versiones el metodo constructor
    state ={
        contador:0
    }

    //Al declararlas como funciones flechas ya quedan enlazadas directamente al contexto de la clase
    //que nos encontramos
    sumar = () =>{
        this.setState({
            contador: this.state.contador+1
        })
    }

    restar = () =>{
        this.setState({
            contador: this.state.contador-1
        })
    }


    render() {
        return(
            <div>
                <h3>Eventos en Componentes de React ES7</h3>
                <p><b>{this.state.contador}</b></p>

                <button onClick={this.sumar}>Sumar</button>
                <button onClick={this.restar}>Restar</button>
            </div>
        )
    }

}

export default EventosES7;