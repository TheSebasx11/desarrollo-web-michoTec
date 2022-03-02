<template>
  <div className=" pt-10 md:h-screen">
    <div className="grid grid-cols-12 gap-6 ">
      <div
        className="col-span-12 h-[30rem] sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8 overflow-y-scroll"
      >
        <div v-if="Items != ''">
          <cart-item
            v-for="pro in Items"
            :key="pro.id"
            :cantidad="1"
            :desc="pro.description"
            :image="pro.url"
            :nombre="pro.name"
            :precio="pro.price"
          />
        </div>
        <div v-else class="flex justify-center items-center h-full">
          <div><p class=" font-bold text-2xl">Aun no hay elementos en el carrito</p></div>
        </div>
      </div>
      <div className="w-96 bg-[#1E40AF] h-[30rem] ">
        <div className="flex flex-col h-full px-4 py-6 justify-between ">
          <div>
            <p
              className="lg:text-4xl text-3xl font-black leading-9 text-white "
            >
              Resumen
            </p>
            <div className="flex items-center justify-between pt-16">
              <p className="text-base leading-none text-white ">Subtotal</p>
              <p className="text-base leading-none text-white ">
                {{ subtotal }}$
              </p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="text-base leading-none text-white ">Envio</p>
              <p className="text-base leading-none text-white ">{{ envio }}$</p>
            </div>
          </div>
          <div>
            <div
              className="flex items-center pb-6 justify-between lg:pt-5 pt-20"
            >
              <p className="text-2xl leading-normal text-white ">Total</p>
              <p
                className="text-2xl font-bold leading-normal text-right text-white "
              >
                {{ subtotal + envio }}$
              </p>
            </div>
            <div className="flex gap-x-5">
              <router-link
                to="/shop"
                className="text-base h-12 flex items-center justify-center font-semibold w-full py-2 bg-[#FF5A5A] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                Cancelar
              </router-link>
              <button
                className="text-base h-12 w-full py-2 bg-[#62FF5F] font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "../components/cartItem.vue";
export default {
  components: {
    CartItem,
  },
  data: () => {
    return {
      Items: [],
    };
  },
  mounted() {
    this.Items = this.$store.state.cartItems;
  },
  computed: {
    subtotal() {
      var sum = 0;
      this.Items.forEach((element) => {
        sum += parseInt(element.price);
      });
      return sum;
    },
    envio() {
      return this.subtotal * 0.1;
    },
  },
};
</script>