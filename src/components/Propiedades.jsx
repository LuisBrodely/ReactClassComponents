function Propiedades(props) {
    return(
        <div>
            <h2>Propiedades</h2>
            <h3>{props.porDefecto}</h3>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "Verdadero" : "Falso"}</li>
                <li>{props.arreglo.join(",")}</li>
                <li>{props.objeto.nombre + "-" + props.objeto.apellido}</li>
                <li>{props.elemento}</li>
                <li>{props.arreglo.map(props.funcion).join(",")}</li>
                <li>{props.componente}</li>
            </ul>
        </div>
    );
}

export default Propiedades;

//Propiedades por Defecto
Propiedades.defaultProps ={
    porDefecto:"Prop por Defecto"
}