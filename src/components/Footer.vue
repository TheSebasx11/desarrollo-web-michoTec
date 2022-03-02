<template>
  <footer class="pt-4 flex flex-row w-full justify-between bg-blue-800">
    <section class="footer_right ml-7 mb-4">
      <div class="div_address flex justify-center items-center my-4">
        <img
          class="border-double border-2 border-white"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Colombia_-_Córdoba_-_Planeta_Rica.svg/250px-Colombia_-_Córdoba_-_Planeta_Rica.svg.png"
          alt=""
        />
      </div>
      <div
        class="
          div_address_name
          flex
          justify-center
          items-center
          text-white
          font-sans font-bold
        "
      >
        <p>Planeta Rica, Cordoba, Colombia</p>
      </div>
    </section>
    <section
      class="
        flex flex-col
        w-1/2
        gap-y-2
        p-2
        mb-7
        mt-4
        border border-dashed border-white
        items-center
      "
    >
      <p class="title text-white">¿Dudas? Escribenos</p>
      <button
        class="
          border-dotted border-2
          w-20
          border-white
          rounded-tl-xl rounded-br-xl
          p-2
          transition
          bg-blue-700
          text-white
          hover:rounded-xl hover:scale-110
        "
      >
        Enviar
      </button>
      <div class="inputs flex flex-col items-center w-full gap-y-2">
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          class="w-11/12 border-gray-500 border"
          id=""
        />
        <input
          type="email"
          placeholder="Ingresa tu Email"
          class="w-11/12 border-gray-500 border"
        />
        <textarea
          name=""
          placeholder="Describenos tu mensaje"
          class="resize-none w-11/12 h-40 border-gray-500 border mb-4"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </section>
    <div class="mb-5 mr-7 w-1/6 h-fit flex flex-row self-end justify-center">
      <ul class="lg:flex lg:flex-row lg:gap-x-2">
        <li
          class="
            flex flex-col
            items-center
            pt-2
            px-2
            transition
            hover:font-bold hover:scale-110 hover:bg-white hover:text-blue-400
          "
        >
          <img
            class="w-8"
            src="https://img.icons8.com/ios-glyphs/30/000000/facebook.png"
          />
          <a href="javascript:void(0)">Facebook</a>
        </li>
        <li
          class="
            flex flex-col
            items-center
            pt-2
            px-2
            transition-colors
            hover:rounded-xl
            hover:scale-110
            hover:bg-gradient-to-r
            hover:from-pink-500
            hover:to-yellow-500
          "
        >
          <img
            class="w-8"
            src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"
          />
          <a href="javascript:void(0)">Instagram</a>
        </li>
        <li
          class="
            flex flex-col
            items-center
            px-2
            transition
            hover:scale-110 hover:bg-blue-500 hover:text-white
            pt-2
          "
        >
          <img
            class="w-8"
            src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"
          />
          <a href="javascript:void(0)">Twitter</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
    
}
</script>