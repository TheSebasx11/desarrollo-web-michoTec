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
      <div class="purch_tittle">
        <h1 class="text-3xl font-bold m-4">Datos de Compra</h1>
      </div>
      <div class="user_info mx-4 mb-4">
        <p class="name text-xl font-semibold">Numero de compra</p>
        <input
          v-bind:value="number"
          ref="p_number"
          class="border-2 mb-2 border-black w-72"
          type="textname"
          placeholder=""
        />
        <p class="email text-xl font-semibold">Precio de compra</p>
        <input
          v-bind:value="totalprice"
          ref="p_price"
          class="border-2 mb-2 border-black w-72"
          type="emailtext"
          placeholder=""
        />
        <p class="Telefonodecontacto text-xl font-semibold">Cantidad</p>
        <input
          v-bind:value="amount"
          ref="p_amount"
          class="border-2 mb-2 border-black w-72"
          type="textcontact"
        />
        <p class="age text-xl font-semibold">Fecha de compra</p>
        <input
          v-bind:value="date"
          ref="p_date"
          class="border-2 mb-2 border-black w-72"
          type="textage"
        />
      </div>
      <div class="button_class mx-4 mb-10 flex flex-row">
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
            hover:bg-red-500 hover:text-white
            transition
          "
        >
          Cancelar
        </button>
        <button
          v-on:click="
            Editar();
            goList();
          "
          class="
            register
            px-4
            ml-20
            border-2 border-black
            font-semibold
            bg-white
            p-1
            hover:bg-blue-400 hover:text-white
            transition
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
    number: String,
    totalprice: String,
    amount: String,
    date: String,
  },
  methods: {
    goList() {
      this.$router.push("listPurch");
    },

    createPurchase(id, number, totalprice, amount, date) {
      let Purchase = {
        id: id,
        number: number,
        totalprice: totalprice,
        amount: amount,
        date: date,
      };
      return Purchase;
    },
    Editar() {
      let pur = this.createPurchase(
        0,
        this.$refs.p_number.value,
        this.$refs.p_price.value,
        this.$refs.p_amount.value,
        this.$refs.p_date.value
      );
      axios
        .put(
          "https://61e762f3e32cd90017acbace.mockapi.io/Purchase/" + this.id,
          pur
        )
        .then((response) => (this.request = response.status))
        .catch((e) => console.log(e));
    },
  },
};
</script>