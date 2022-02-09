<template>
  <div class="w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#CDF2E5] to-[#CEE6F0]">
    <div class="">
      <h2 class="text-center font-bold font-sans my-4 text-3xl">
        Lista de Productos
      </h2>
    </div>
    <table
      id="tabla2"
      class="w-11/12 mt-2 border-collapse border-2 border-black"
    >
      <thead>
        <tr class="bg-[#9AEED8] border-2 border-black">
          <th class="text-center border p-2 border-black">ID</th>
          <th class="text-center border p-2 border-black">Nombre</th>
          <th class="text-center border p-2 border-black">Descripcion</th>
          <th class="text-center border p-2 border-black">Precio</th>
          <th class="text-center border p-2 border-black">Stock</th>
          <th class="text-center border p-2 border-black">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in Products" :key="product.id">
          <td class="text-black text-center border border-black p-2">{{ product.id }}</td>
          <td class="text-black text-center border border-black p-2">{{ product.name }}</td>
          <td class="text-black text-center border border-black p-2">
            {{ product.description }}
          </td>
          <td class="text-black text-center border border-black p-2">
            {{ product.price }}
          </td>
          <td class="text-black text-center border border-black p-2">
            {{ product.stock }}
          </td>
          <td class="text-black border border-black p-2">
            <div class="flex flex-row justify-center items-center gap-x-2">
              <button
                v-on:click="showDeleteAlert(product.id)"
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
                v-on:click="
                  goEdit(
                    product.id,
                    product.name,
                    product.description,
                    product.price,
                    product.stock
                  )
                "
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
    goEdit(id_, name_, description_, price_, stock_) {
      this.$router.push({
        name: "Editar Producto",
        params: {
          id: id_,
          name: name_,
          description: description_,
          price: price_,
          stock: stock_,
        },
      });
    },
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
    showDeleteAlert(id) {
      // Use sweetalert2
      this.$swal({
        title: "¿Estás seguro de hacerlo?",
        text: "No podrás revertirlo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, quiero borrarlo!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteProduct(id);
          this.$swal("Eliminado!", "El registro ha sido borrado", "success");
        }
      });
    },
  },
};
</script>