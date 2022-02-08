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
          v-model="p_number"
          class="border-2 mb-2 border-black w-72"
          type="textname"
          placeholder=""
        />
        <p class="email text-xl font-semibold">Precio de compra</p>
        <input
          v-model="p_price"
          class="border-2 mb-2 border-black w-72"
          type="emailtext"
          placeholder=""
        />
        <p class="Telefonodecontacto text-xl font-semibold">Cantidad</p>
        <input
          v-model="p_amount"
          class="border-2 mb-2 border-black w-72"
          type="textcontact"
        />
        <p class="age text-xl font-semibold">Fecha de compra</p>
        <input
          v-model="p_date"
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
          v-on:click="Registrar()"
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
          Registrar
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      p_number: "",
      p_price: "",
      p_amount: "",
      p_date: "",
    };
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
    Registrar() {
      let pur = this.createPurchase(
        0,
        this.p_number,
        this.p_price,
        this.p_amount,
        this.p_date
      );
      axios
        .post("https://61e762f3e32cd90017acbace.mockapi.io/Purchase", pur)
        .then((response) => {
          this.request = response.status;
          this.goList();
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>