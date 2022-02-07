<template>
  <div class="w-full flex justify-center">
    <table class="w-11/12 mt-10">
      <thead>
        <tr class="bg-grey-100 border">
          <th class="text-left border p-2 border-black">ID</th>
          <th class="text-left border p-2 border-black">Nombre</th>
          <th class="text-left border p-2 border-black">Email</th>
          <th class="text-left border p-2 border-black">Telefono</th>
          <th class="text-left border p-2 border-black">Edad</th>
          <th class="text-left border p-2 border-black">Codigo Postal</th>
          <th class="text-left border p-2 border-black">Acciones</th>
        </tr>
      </thead>
      <tr v-for="user in users" :key="user.id">
        <td class="text-black border border-black p-2">{{ user.id }}</td>
        <td class="text-black border border-black p-2">{{ user.name }}</td>
        <td class="text-black border border-black p-2">{{ user.email }}</td>
        <td class="text-black border border-black p-2">{{ user.phone }}</td>
        <td class="text-black border border-black p-2">{{ user.age }}</td>
        <td class="text-black border border-black p-2">
          {{ user.postal_code }}
        </td>
        <td class="text-black border border-black">
          <div class="flex flex-row justify-center items-center gap-x-2">
            <button
              v-on:click="showDeleteAlert(user.id)"
              onclick=""
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
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
//import Swal from 'vue-sweetalert2';
import axios from "axios";
export default {
  name: "ListarUsuario",
  data: () => {
    return {
      users: null,
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get("https://61e762f3e32cd90017acbace.mockapi.io/User")
        .then((response) => {
          //console.log(response);
          this.users = response.data;
        })
        .catch((e) => console.log(e));
    },
    async deleteUser(id) {
      await axios.delete(
        "https://61e762f3e32cd90017acbace.mockapi.io/User/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      this.getUsers();
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
          this.deleteUser(id);
          this.$swal("Eliminado!", "El registro ha sido borrado", "success");
        }
      });
    },
    showAlert() {
      // Use sweetalert2
      this.$swal('Hello Vue world!!!');
    },
  },
};
</script>
