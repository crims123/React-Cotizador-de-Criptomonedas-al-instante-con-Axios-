import React, { Component } from 'react';


class Cotizar extends Component {

  render() {


//llamamos los estados de resultado y creamos un objeto destrctor con los daos deseados


const {name,quotes} =this.props.resultado;

const monedaCotizada = this.props.moneda;


const {price} =quotes[monedaCotizada];

    return (
      <div>
		<p className="text-center">Precio</p>
		<p className="text-center">Nombre: </p>
		</div>
    );
  }
}

export default Cotizar;
