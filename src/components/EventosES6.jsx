import {Component} from "react";

export default class EventosES6 extends Component{
    constructor(props) {
        super(props);
        this.state={
            contador:0
        }

        //Hay que hacer el bind cada que usemos componentes de clase
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }

    sumar(){
        console.log("Sumando")
        console.log(this)
        this.setState({
            contador:this.state.contador+1
        })
    }

    restar(){
        console.log("Restando")
        console.log(this)
        this.setState({
            contador:this.state.contador-1
        })
    }

    render() {

        return(
            <div>
                <h3>Eventos en Componentes de React ES6</h3>
                <p><b>{this.state.contador}</b></p>

                <button onClick={this.sumar}>Sumar</button>
                <button onClick={this.restar}>Restar</button>
            </div>
        );
    }
}