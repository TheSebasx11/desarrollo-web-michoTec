<template>
  <div class="w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#CDF2E5] to-[#CEE6F0]">
    <div class="">
      <h2 class="text-center font-bold font-sans my-4 text-3xl">
        Lista de Distribuidores
      </h2>
    </div>
    <table
      id="tabla2"
      class="w-11/12 mt-2 border-collapse border-2 border-black"
    >
      <thead>
        <tr class="bg-[#9AEED8] border">
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
                v-on:click="showDeleteAlert(dist.id)"
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
                  goEdit(dist.id, dist.name, dist.equipment, dist.category)
                "
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
    goEdit(id, name, equipment, category) {
      this.$router.push({
        name: "Editar Distribuidores",
        params: {
          id: id,
          name: name,
          equipment: equipment,
          category: category,
        },
      });
    },
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
          this.deleteDist(id);
          this.$swal("Eliminado!", "El registro ha sido borrado", "success");
        }
      });
    },
  },
};
</script>