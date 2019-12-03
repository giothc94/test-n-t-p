<template>
  <div class="home">
    <div class="mb-5">
      <ul class="nav justify-content-center">
        <li class="nav-item mr-2">
          <button class="btn btn-success" @click="setState(1)">Clientes</button>
        </li>
        <li class="nav-item mr-2">
          <button class="btn btn-primary" @click="setState(2)">
            Vehiculos
          </button>
        </li>
        <li class="nav-item">
          <button class="btn btn-info" @click="setState(3)">Trabajos</button>
        </li>
      </ul>
    </div>
    <ListClient
      :list="clientes"
      v-if="state == 1"
      v-on:delete="deleteCar"
    ></ListClient>
    <ListCar :list="carros" v-if="state == 2"></ListCar>
    <ListJobs
      v-if="state == 3"
      :listEncargados="empleados"
      :listClientes="clientes"
    ></ListJobs>
  </div>
</template>

<script>
// @ is an alias to /src
import ListCar from "@/components/ListCar.vue";
import ListClient from "@/components/ListClient.vue";
import ListJobs from "@/components/ListJobs.vue";
import { clientes, carros, empleados } from "@/mocks/list.js";
export default {
  name: "home",
  data() {
    return {
      carros: carros,
      clientes: clientes,
      empleados: empleados,
      state: Number
    };
  },
  methods: {
    setState(state) {
      this.state = state;
    },
    deleteCar(data) {
      this.carros.splice(data.idCar, 1);
      this.clientes.splice(data.idUser, 1);
    }
  },
  created() {
    this.clientes.map(cliente => {
      cliente.vahiculo = carros.find(carro => carro.id == cliente.idCarro);
    });
  },
  components: {
    ListCar,
    ListClient,
    ListJobs
  }
};
</script>
