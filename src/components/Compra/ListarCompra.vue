<template>
  <div class="w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#CDF2E5] to-[#CEE6F0]">
    <div class="">
      <h2 class="text-center font-bold font-sans my-4 text-3xl">
        Lista de Compras
      </h2>
    </div>
    <table
      id="tabla2"
      class="w-11/12 mt-2 border-collapse border-2 border-black"
    >
      <thead>
        <tr class="bg-[#9AEED8] border">
          <th class="text-center border p-2 border-black">ID</th>
          <th class="text-center border p-2 border-black">Numero de compra</th>
          <th class="text-center border p-2 border-black">Cantidad</th>
          <th class="text-center border p-2 border-black">Total</th>
          <th class="text-center border p-2 border-black">Fecha</th>
          <th class="text-center border p-2 border-black">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="com in Compras" :key="com.id">
          <td class="text-black text-center border border-black p-2">{{ com.id }}</td>
          <td class="text-black text-center border border-black p-2">{{ com.number }}</td>
          <td class="text-black text-center border border-black p-2">{{ com.amount }}</td>
          <td class="text-black text-center border border-black p-2">
            {{ com.totalprice }}
          </td>
          <td class="text-black text-center border border-black p-2">{{ com.date }}</td>
          <td class="text-black border border-black">
            <div class="flex flex-row justify-center items-center gap-x-2">
              <button
                v-on:click="showDeleteAlert(com.id)"
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
                    com.id,
                    com.number,
                    com.amount,
                    com.totalprice,
                    com.date
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
    goEdit(id, number, totalprice, amount, date) {
      this.$router.push({
        name: "Editar Compra",
        params: {
          id: id,
          number: number,
          totalprice: totalprice,
          amount: amount,
          date: date,
        },
      });
    },
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
          this.deleteCompra(id);
          this.$swal("Eliminado!", "El registro ha sido borrado", "success");
        }
      });
    },
  },
};
</script>