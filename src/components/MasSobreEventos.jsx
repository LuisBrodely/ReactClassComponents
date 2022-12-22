import {Component} from "react";

/*const Boton = (props) => {
    //Evento personalizado (Recibiendo funcion flecha por medio de prop)
    return(
        <button onClick={props.myOnClick}>Boton Hecho Componente</button>
    );
}*/

//Desestructuración en prop myOnClick
const Boton = ({myOnClick}) => {
    //Evento personalizado (Recibiendo funcion flecha por medio de prop)
    return(
        <button onClick={myOnClick}>Boton Hecho Componente</button>
    );
}

export default class MasSobreEventos extends Component{
    handleClick = (evento, mensaje)=>{
        //Evento sintetico de REACT
        console.log(evento)
        console.log(evento.target)
        //Evento nativo de JS
        console.log(evento.nativeEvent)
        console.log(evento.nativeEvent.target)
        console.log(mensaje)
    }

    render() {
        return(
            <div>
                <h2>Mas Sobre Eventos</h2>
                <button onClick={(e)=>this.handleClick(e,"Pasando parametro desde evento")}>Saludar</button>
                <Boton myOnClick={(e)=> this.handleClick(e,"Boton personalizado")}/>
            </div>
        );
    }
}