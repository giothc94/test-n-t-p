<template>
    <div class="container">
        <table class="table">
            <thead>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Año</th>
            </thead>
            <tbody>
                <tr v-for="carro in list" :key="carro.id" >
                    <td>{{carro.marca}}</td>
                    <td>{{carro.modelo}}</td>
                    <td>{{carro.año}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name:'ListCar',
    props:{
        list:Array
    }
}
</script>