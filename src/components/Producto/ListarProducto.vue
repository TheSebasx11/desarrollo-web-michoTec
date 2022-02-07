<template>
  <div class="flex items-center justify-center">
    <table
      id="tabla2"
      class="w-11/12 mt-2 border-collapse border-2 border-black"
    >
      <thead>
        <tr class="bg-grey-100 border">
          <th class="text-left border p-2 border-black">ID</th>
          <th class="text-left border p-2 border-black">Nombre</th>
          <th class="text-left border p-2 border-black">Descripcion</th>
          <th class="text-left border p-2 border-black">Precio</th>
          <th class="text-left border p-2 border-black">Stock</th>
          <th class="text-left border p-2 border-black">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in Products" :key="product.id">
          <td class="text-black border border-black p-2">{{ product.id }}</td>
          <td class="text-black border border-black p-2">{{ product.name }}</td>
          <td class="text-black border border-black p-2">
            {{ product.description }}
          </td>
          <td class="text-black border border-black p-2">
            {{ product.price }}
          </td>
          <td class="text-black border border-black p-2">
            {{ product.stock }}
          </td>
          <td class="text-black border border-black p-2">
            <div class="flex flex-row justify-center items-center gap-x-2">
              <button
                v-on:click="deleteProduct(product.id)"
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
                onclick="EditarProducto(${element.id})"
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
  name: "Listar Productos",
  data: () => {
    return {
      Products: null,
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios
        .get("https://61e762f3e32cd90017acbace.mockapi.io/Product")
        .then((response) => {
          this.Products = response.data;
        })
        .catch((e) => console.log(e));
    },
    async deleteProduct(id) {
      await axios.delete(
        "https://61e762f3e32cd90017acbace.mockapi.io/Product/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      this.getProducts();
    },
  },
};
</script>