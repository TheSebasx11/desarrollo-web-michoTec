<template>
  <div class="w-full flex justify-center bg-gradient-to-b from-[#CDF2E5] to-[#CEE6F0]">
    <table class="w-11/12 mt-10 border-collapse border-2 border-black">
      <thead>
        <tr class="bg-black text-white border-2 border-black">
          <th class="text-center border p-2 border-white">ID</th>
          <th class="text-center border p-2 border-white">Nombre</th>
          <th class="text-center border p-2 border-white">Email</th>
          <th class="text-center border p-2 border-white">Telefono</th>
          <th class="text-center border p-2 border-white">Edad</th>
          <th class="text-center border p-2 border-white">Codigo Postal</th>
          <th class="text-center border p-2 border-white">Acciones</th>
        </tr>
      </thead>
      <tr v-for="user in users" :key="user.id">
        <td class="text-black text-center border border-black p-2">{{ user.id }}</td>
        <td class="text-black text-center border border-black p-2">{{ user.name }}</td>
        <td class="text-black text-center border border-black p-2">{{ user.email }}</td>
        <td class="text-black text-center border border-black p-2">{{ user.phone }}</td>
        <td class="text-black text-center border border-black p-2">{{ user.age }}</td>
        <td class="text-black text-center border border-black p-2">
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
              v-on:click="
                goEdit(
                  user.id,
                  user.name,
                  user.email,
                  user.phone,
                  user.age,
                  user.postal_code
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
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
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
    goEdit(id_, name_, email_, phone_, age_, postal_code_) {
      this.$router.push({
        name: "Editar User",
        params: {
          id: id_,
          name: name_,
          email: email_,
          phone: phone_,
          age: age_,
          postal: postal_code_,
        },
      });
    },
    getUsers() {
      axios
        .get("https://61e762f3e32cd90017acbace.mockapi.io/User")
        .then((response) => {
          console.log(response.data);
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
  },
};
</script>
