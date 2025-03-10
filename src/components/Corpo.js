import React from "react";
import Dados from "./Dados";

export default function Corpo() {

    const inta = ()=>{
       return '@arielefont'
    };

    const somar = (v1, v2) => {
        return v1+v2
    }

    return (
        <section>
            <h2>@arielefront</h2>
            <p>Desenvolvedora Front-end</p>           
            <p> Me segui no insta</p>
        <Dados 
           Insta= {inta} 
           Github=' arielesilvaa ' 
           Linkdiln=' arielesilvaaa ' 

           somar={somar}
        />

        </section>
    )
}