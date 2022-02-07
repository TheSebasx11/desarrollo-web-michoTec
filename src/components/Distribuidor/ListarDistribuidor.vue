<template>
  <div class="flex justify-center">
    <table
      id="tabla2"
      class="w-11/12 mt-2 border-collapse border-2 border-black"
    >
      <thead>
        <tr class="bg-grey-100 border">
          <th class="text-left border p-2 border-black">ID</th>
          <th class="text-left border p-2 border-black">Nombre</th>
          <th class="text-left border p-2 border-black">Equipo</th>
          <th class="text-left border p-2 border-black">Categoria</th>
          <th class="text-left border p-2 border-black">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dist in Dist" :key="dist.id">
          <td class="text-black border border-black p-2">{{ dist.id }}</td>
          <td class="text-black border border-black p-2">{{ dist.name }}</td>
          <td class="text-black border border-black p-2">
            {{ dist.equipment }}
          </td>
          <td class="text-black border border-black p-2">
            {{ dist.category }}
          </td>
          <td class="text-black border border-black">
            <div class="flex flex-row justify-center items-center gap-x-2">
              <button
                v-on:click="deleteDist(dist.id)"
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
                v-on:click="showAlert()"
                onclick="EditarDistribuidores(${element.id})"
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
  name: "Listar Distribuidores",
  data: () => {
    return {
      Dist: null,
    };
  },
  mounted() {
    this.getDist();
  },
  methods: {
    getDist() {
      axios
        .get("https://61e762f3e32cd90017acbace.mockapi.io/Distributor")
        .then((response) => {
          this.Dist = response.data;
        })
        .catch((e) => console.log(e));
    },
    async deleteDist(id) {
      await axios.delete(
        "https://61e762f3e32cd90017acbace.mockapi.io/Distributor/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      this.getDist();
    },
    
  },
};
</script>