import React from "react";

export default function Dados(props) {
    const n1 = 10
    const n2 = 20
    return (
        <section>

            <p>Insta 
                {props.Insta()}
            </p>
            <p>Github
                {props.Github}
            </p>
            <p>Linkdiln
                {props.Linkdiln}
            </p>
            <p>{'A soma de ' + n1 + ' com ' + n2  + ' é igual ' +  props.somar(10,20) }</p>

        </section>
    )
}