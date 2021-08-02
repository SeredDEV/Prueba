

import React, { useState, useRef } from 'react';

export default function Formulario() {

    const options = useRef() as React.MutableRefObject<HTMLSelectElement>

    const [optionsFlujo, setOptionsFlujo] = useState([""]);

    const changeOptions = () => {
        if (options.current.value === "value1") {
            setOptionsFlujo(['Completo', 'Responde y atiende', 'Atiende']);
        }
        if (options.current.value === "value2") {
            setOptionsFlujo(['Clasifica y responde', 'Responde']);
        }
        if (options.current.value === "value3") {
            setOptionsFlujo(['Clasifica y responde', 'Responde']);
        }
    }

    const [optionsAuto, setOptionsAuto] = useState([""]);
    const [optionFlujo, setOptionFlujo] = useState("");

    const changeautomatico = (resp: any) => {
        let valor = resp.target.value;
        setOptionFlujo(valor)
        
        if (valor === "Responde y atiende") {
            setOptionsAuto(['Deshabilitado', 'Pedir datos y derivar', 'Manejo automático']);
        }
        if (valor === "Responde") {
            setOptionsAuto(['Deshabilitado', 'Clasificación automática']);
        }
    }


    return (<div >
        <label >Nombre de empresa:</label>
        <input type="text" />
        <br />
        <label >Tipo de empresa:</label>
        <select onChange={changeOptions} ref={options}>
            <option value="value1">Delivery</option>
            <option value="value2" selected>Social Listening</option>
            <option value="value3">Mensajería</option>
        </select>
        <br />
        <label >Flujo:</label>
        <select name="select" onChange={changeautomatico}>
            {optionsFlujo.map(datos =>
                <option>{datos}</option>)}
        </select>
        <br />
        <label >Auto Respuesta:</label>
        {optionFlujo != "Completo" && optionFlujo != "Clasifica y responde" && optionFlujo != "Atiende"  &&
            <select name="select"> {optionsAuto.map(dato => <option>{dato}</option>)} </select>
        }
    </div>
    )
}