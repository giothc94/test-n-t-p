<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="d-flex flex-column text-left">
          <div class="form-group">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01"
                  >Encargado</label
                >
              </div>
              <select
                class="custom-select"
                id="inputGroupSelect01"
                v-model="encargado"
              >
                <option
                  v-for="encargado in listEncargados"
                  :key="encargado.id"
                  :value="{ ...encargado }"
                  >{{ encargado.nombre }}</option
                >
              </select>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01"
                  >Cliente</label
                >
              </div>
              <select
                class="custom-select"
                id="inputGroupSelect01"
                v-model="cliente"
              >
                <option
                  v-for="cliente in listClientes"
                  :key="cliente.id"
                  :value="{ ...cliente }"
                  >{{ cliente.nombre }}</option
                >
              </select>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01"
                  >Trabajo uno</label
                >
              </div>
              <select
                v-model="tr1"
                class="custom-select"
                id="inputGroupSelect01"
              >
                <option v-for="t in trabajoUno" :key="t.precio" :value="t"
                  >{{ t.nombre }} - ${{ t.precio }}</option
                >
              </select>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01"
                  >Trabajo dos</label
                >
              </div>
              <select
                v-model="tr2"
                class="custom-select"
                id="inputGroupSelect01"
              >
                <option v-for="t in trabajoDos" :key="t.precio" :value="t"
                  >{{ t.nombre }} - ${{ t.precio }}</option
                >
              </select>
            </div>
          </div>
          <button @click="add" class="btn btn-success">Agregar</button>
        </div>
      </div>
    </div>
    <div class="mt-5" v-if="listJobs.length > 0">
      <table class="table">
        <thead>
          <th>Encargado</th>
          <th>Cliente</th>
          <th>Vehiculo</th>
          <th>Detalle</th>
          <th>Total</th>
        </thead>
        <tbody>
          <tr v-for="t in listJobs" :key="t.id">
            <td>{{ t.encargado.nombre }}</td>
            <td>{{ t.cliente.nombre }}</td>
            <td>{{ t.auto.marca }} - {{ t.auto.modelo }} - {{ t.auto.año }}</td>
            <td>
              ({{ t.tr1.nombre }} ${{ t.tr1.precio }}) ({{ t.tr2.nombre }} ${{
                t.tr2.precio
              }})
            </td>
            <td>${{ t.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { trabajoUno, trabajoDos } from "@/mocks/list.js";
export default {
  name: "ListJobs",
  data() {
    return {
      trabajoUno: trabajoUno,
      trabajoDos: trabajoDos,
      listJobs: [],
      encargado: "",
      cliente: null,
      tr1: null,
      tr2: null
    };
  },
  props: {
    list: Array,
    listEncargados: Array,
    listClientes: Array
  },
  methods: {
    add() {
      const order = {
        encargado: this.encargado,
        cliente: this.cliente,
        auto: this.cliente.vahiculo,
        tr1: this.tr1,
        tr2: this.tr2,
        total: this.tr1.precio + this.tr2.precio
      };
      this.listJobs.push(order);
      this.clear();
    },
    clear() {
      this.encargado = "";
      this.cliente = {};
      this.tr1 = {};
      this.tr2 = {};
    }
  }
};
</script>
<style scoped>
.input-group-text{
  width: 120px;
}
</style>
