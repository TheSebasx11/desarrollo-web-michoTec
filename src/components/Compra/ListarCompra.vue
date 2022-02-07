<template>
  <div class="flex justify-center">
    <table
      id="tabla2"
      class="w-11/12 mt-2 border-collapse border-2 border-black"
    >
      <thead>
        <tr class="bg-grey-100 border">
          <th class="text-left border p-2 border-black">ID</th>
          <th class="text-left border p-2 border-black">Numero de compra</th>
          <th class="text-left border p-2 border-black">Cantidad</th>
          <th class="text-left border p-2 border-black">Total</th>
          <th class="text-left border p-2 border-black">Fecha</th>
          <th class="text-left border p-2 border-black">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="com in Compras" :key="com.id">
          <td class="text-black border border-black p-2">{{com.id}}</td>
          <td class="text-black border border-black p-2">{{com.number}}</td>
          <td class="text-black border border-black p-2">{{com.amount}}</td>
          <td class="text-black border border-black p-2">
            {{com.totalprice}}
          </td>
          <td class="text-black border border-black p-2">{{com.date}}</td>
          <td class="text-black border border-black">
            <div class="flex flex-row justify-center items-center gap-x-2">
              <button
                v-on:click="deleteCompra(com.id)"
                class="
                  bg-red-500
                  px-2
                  py-2
                  rounded-xl
                  text-sm text-white
                  font-semibold
                "
              >
                Eliminar
              </button>
              <button
                onclick="EditarCompra(${element.id})"
                class="
                  bg-green-500
                  px-2
                  py-2
                  rounded-xl
                  text-sm text-black
                  font-semibold
                "
              >
                Editar
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Listar Compra",
  data: () => {
    return {
      Compras: null,
    };
  },
  mounted() {
    this.getCompras();
  },
  methods: {
    getCompras() {
      axios
        .get("https://61e762f3e32cd90017acbace.mockapi.io/Purchase")
        .then((response) => {
          //console.log(response);
          this.Compras = response.data;
        })
        .catch((e) => console.log(e));
    },
    async deleteCompra(id) {
      await axios.delete(
        "https://61e762f3e32cd90017acbace.mockapi.io/Purchase/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      this.getCompras();
    },
  },
};
</script>