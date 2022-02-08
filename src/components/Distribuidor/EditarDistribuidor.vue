<template>
  <div
    class="
      bg-whitepx-16
      py-8
      rounded-md
      flex
      justify-center
      text-center
      items-center
    "
  >
    <section class="w-fit rounded-xl border border-black">
      <div class="distri_tittle">
        <h2 class="text-3xl font-bold m-4">Datos del Distribuidor</h2>
      </div>
      <div class="distri_data mx-4 mb-4">
        <p class="distri_name text-xl font-semibold">Nombre de la compañia</p>
        <input
          v-bind:value="name"
          ref="d_name"
          class="border-2 mb-2 border-black w-72"
          type="namedistri"
        />
        <p class="distri_description text-xl font-semibold">
          Equipo distribuido
        </p>
        <textarea
          v-bind:value="equipment"
          ref="d_equip"
          name=""
          placeholder="Ingrese aqui la descripcion del producto"
          class="p-2 description border-2 mb-1 border-black resize-none w-72"
          cols="30"
          rows="10"
        ></textarea>
        <p class="distri_price text-xl font-semibold">Categorias</p>
        <input
          v-bind:value="category"
          ref="d_category"
          class="border-2 mb-2 border-black w-72"
          type="priceproduct"
        />
      </div>
      <div class="button_class mx-4 mb-10">
        <button
          v-on:click="goList()"
          class="
            cancel
            border-2
            px-4
            border-black
            font-semibold
            bg-white
            p-1
            transition
            hover:bg-red-500 hover:text-white
          "
        >
          Cancelar
        </button>
        <button
          v-on:click="Registrar()"
          class="
            register
            ml-20
            px-4
            border-2 border-black
            font-semibold
            bg-white
            p-1
            transition
            hover:bg-blue-400 hover:text-white
          "
        >
          Editar
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    id: String,
    name: String,
    equipment: String,
    category: String,
  },
  methods: {
    goList() {
      this.$router.push("listDist");
    },
    createDistri(id, name, equipment, category) {
      let Distri = {
        id: id,
        name: name,
        equipment: equipment,
        category: category,
      };
      return Distri;
    },
    Registrar() {
      let distri = this.createDistri(
        0,
        this.$refs.d_name.value,
        this.$refs.d_equip.value,
        this.$refs.d_category.value
      );
      axios
        .put(
          "https://61e762f3e32cd90017acbace.mockapi.io/Distributor/" + this.id,
          distri
        )
        .then((response) => {
          this.request = response.status;
          this.goList();
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>