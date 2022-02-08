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
      <div class="product_tittle">
        <h2 class="text-3xl font-bold m-4">Registrar producto</h2>
      </div>
      <div class="product_data mx-4 mb-4">
        <p class="product_name text-xl font-semibold">Nombre del Producto</p>
        <input
          v-bind:value="name"
          ref="name_p"
          class="border-2 mb-2 border-black w-72"
          type="nameproduct"
        />
        <p class="product_description text-xl font-semibold">Descripcion</p>
        <textarea
          v-bind:value="description"
          ref="desc_p"
          placeholder="Ingrese aqui la descripcion del producto"
          class="description border-2 mb-2 border-black resize-none w-72 h-32"
          cols="30"
          rows="10"
        ></textarea>
        <p class="product_price text-xl font-semibold">Precio del Producto</p>
        <input
          v-bind:value="price"
          ref="price_p"
          class="border-2 mb-2 border-black w-72"
          type="priceproduct"
        />
        <p class="product_stock text-xl font-semibold">Stock</p>
        <input
          v-bind:value="stock"
          ref="stock_p"
          class="border-2 mb-2 border-black w-72"
          type="stockproduct"
        />
      </div>
      <div class="button_class mx-4 mb-2">
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
          v-on:click="Editar()"
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
    description: String,
    price: String,
    stock: String,
  },
  data: () => {
    return {};
  },
  methods: {
    goList() {
      this.$router.push("listProd");
    },
    createProduct(id_, name_, description_, price_, stock_) {
      var Product = {
        id: id_,
        name: name_,
        description: description_,
        price: price_,
        stock: stock_,
      };
      return Product;
    },
    Editar() {
      let Product = this.createProduct(
        0,
        this.$refs.name_p.value,
        this.$refs.desc_p.value,
        this.$refs.price_p.value,
        this.$refs.stock_p.value
      );
      console.log(Product);
      axios
        .put(
          "https://61e762f3e32cd90017acbace.mockapi.io/Product/" + this.id,
          Product
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