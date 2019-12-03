const empleados = [
  {
    id: 1,
    nombre: "Dylan Arguello"
  },
  {
    id: 2,
    nombre: "Andres Arguello"
  },
  {
    id: 3,
    nombre: "Diego Arguello"
  },
  {
    id: 4,
    nombre: "Jose Arguello"
  },
  {
    id: 5,
    nombre: "Julio Arguello"
  }
];

const clientes = [
  {
    id: 1,
    nombre: "Gabriel Costta",
    edad: 25,
    idCarro: 1
  },
  {
    id: 2,
    nombre: "Gardenia Costta",
    edad: 30,
    idCarro: 2
  },
  {
    id: 3,
    nombre: "Dayana Costta",
    edad: 18,
    idCarro: 3
  },
  {
    id: 4,
    nombre: "Giovanny Costta",
    edad: 42,
    idCarro: 4
  },
  {
    id: 5,
    nombre: "Vicente Costta",
    edad: 65,
    idCarro: 5
  }
];
const carros = [
  {
    id: 1,
    año: 2018,
    marca: "chevrolet",
    modelo: "aveo"
  },
  {
    id: 2,
    año: 2018,
    marca: "nissan",
    modelo: "gt"
  },
  {
    id: 3,
    año: 2018,
    marca: "mitsubishi",
    modelo: "2019"
  },
  {
    id: 4,
    año: 2018,
    marca: "ford",
    modelo: "f-150"
  },
  {
    id: 5,
    año: 2018,
    marca: "chevrolet",
    modelo: "sail"
  }
];

const trabajoUno = [
  {
    nombre: "Limpieza",
    precio: 10
  },
  {
    nombre: "Lavado",
    precio: 15
  },
  {
    nombre: "Secado",
    precio: 20
  },
  {
    nombre: "ABC",
    precio: 50
  }
];
const trabajoDos = [
  {
    nombre: "golpe",
    precio: 10
  },
  {
    nombre: "roto",
    precio: 15
  },
  {
    nombre: "vidrio",
    precio: 20
  }
];

module.exports = {
  empleados,
  clientes,
  carros,
  trabajoUno,
  trabajoDos
};
