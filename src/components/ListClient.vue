<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Vehiculo</th>
      </thead>
      <tbody>
        <tr v-for="cliente in list" :key="cliente.id">
          <td>{{ cliente.nombre }}</td>
          <td>{{ cliente.edad }}</td>
          <td>
            {{ cliente.vahiculo.marca }} | {{ cliente.vahiculo.modelo }} |
            {{ cliente.vahiculo.año }}
          </td>
          <td>
            <button
              class="btn btn-danger"
              v-on:click="
                deleteCar({ idCar: cliente.vahiculo.id, idUser: cliente.id })
              "
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    list: Array
  },
  methods: {
    deleteCar(idCar, idUser) {
      this.$emit("delete", { idCar: idCar, idUser: idUser });
    }
  }
};
</script>
