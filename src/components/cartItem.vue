<template>
  <div className=" bg-[#6386fb] py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
    <div className="flex px-4 items-center w-full ">
      <div>
        <img :src="image" className="w-24 object-cover h-32" />
      </div>

      <div className="flex justify-between w-full items-center">
        <div className="text-lg font-semibold px-8 flex flex-col  w-1/2">
          <p>{{nombre}}</p>
          <p className="font-normal text-sm">{{desc}}</p>
          <p className="text-gray-700 text-base">COP {{precio}}</p>
        </div>
        <div
          className="text-lg font-semibold flex items-center justify-end  h-fit"
        >
          <p className="px-4">Cantidad: {{cantidad}}</p>
          <button
            className="focus:outline-none  hover:bg-gray-200 font-bold py-2 px-2 rounded-full inline-flex items-center "
          >
            <box-icon name="trash-alt" className="w-5 h-5"></box-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    nombre: String,
    cantidad: Number,
    precio: Number,
    desc: String,
  },
};
</script>