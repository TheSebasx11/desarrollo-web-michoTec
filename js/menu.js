const menu = document.getElementById("menu");
var statusMenu = true;
function desplegar() {
  if (!statusMenu) {
    menu.className =
      "lg:flex lg:w-fit lg:flex-row lg:items-center absolute left-0 w-30 py-4 pr-3 gap-y-3 flex flex-col bg-blue-800 rounded-xl" +
      " top-16";
    statusMenu = true;
  } else {
    menu.className =
      "lg:flex lg:w-fit lg:flex-row lg:items-center absolute left-0 -top-120 w-30 py-4 pr-3 gap-y-3 flex flex-col bg-blue-800 rounded-xl";
    statusMenu = false;
  }
}



