const ApiControl = (function () {
  const url = "https://61e762f3e32cd90017acbace.mockapi.io/";

  const _getUsers = async () => {
    try {
      const result = await fetch(url + "User");
      if (result.status == 200) {
        const data = await result.json();
        return data;
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  const _getUserById = async (ID) => {
    try {
      const result = await fetch(url + "User/" + ID);
      if (result.status == 200) {
        const data = await result.json();
        return data;
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  const _getProducts = async () => {
    try {
      const result = await fetch(url + "Product");
      if (result.status == 200) {
        const data = await result.json();
        return data;
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  const _getProductById = async (Id) => {
    try {
      const result = await fetch(url + "Product/" + Id);
      if (result.status == 200) {
        const data = await result.json();
        return data;
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  const _getDistri = async () => {
    try {
      const result = await fetch(url + "/Distributor");
      if (result.status == 200) {
        const data = await result.json();
        return data;
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  const _getDistriById = async (ID) => {
    try {
      const result = await fetch(url + "Distributor/" + ID);
      if (result.status == 200) {
        const data = await result.json();
        return data;
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  const _getPurchase = async () => {
    try {
      const result = await fetch(url + "/Purchase");
      if (result.status == 200) {
        const data = await result.json();
        return data;
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  const _getPurchaseById = async (Id) => {
    try {
      const result = await fetch(url + "Purchase/" + Id);
      if (result.status == 200) {
        const data = await result.json();
        return data;
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  const _editUser = async (id, User) => {
    try {
      const result = await fetch(url + "User/" + `${id}`, {
        method: "PUT",
        body: JSON.stringify(User),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await result.json();
      if (result.status == 200) {
        console.log("Registro editado!");
        return data;
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const _editProduct = async (id, Product) => {
    try {
      const result = await fetch(url + "Product/" + `${id}`, {
        method: "PUT",
        body: JSON.stringify(Product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await result.json();
      if (result.status == 200) {
        console.log("Registro editado!");
        return data;
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const _editDistri = async (id, Distri) => {
    try {
      const result = await fetch(url + "Distributor/" + `${id}`, {
        method: "PUT",
        body: JSON.stringify(Distri),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await result.json();
      if (result.status == 200) {
        console.log("Registro editado!");
        return data;
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const _editPurchase = async (id, Purchase) => {
    try {
      const result = await fetch(url + "/Purchase/" + `${id}`, {
        method: "PUT",
        body: JSON.stringify(Purchase),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await result.json();
      if (result.status == 200) {
        console.log("Registro editado!");
        return data;
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const _setUser = async (User) => {
    try {
      const result = await fetch(url + "User", {
        method: "POST",
        body: JSON.stringify(User),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await result.json();
      if (result.status == 201) {
        console.log("Registro creado!");
        return data;
      }
    } catch (error) {
      console.log("Error" + error);
    }
  };

  const _setProduct = async (Product) => {
    try {
      const result = await fetch(url + "Product", {
        method: "POST",
        body: JSON.stringify(Product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await result.json();
      if (result.status == 201) {
        console.log("Registro creado!");
        return data;
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const _setDistri = async (Distri) => {
    try {
      const result = await fetch(url + "/Distributor", {
        method: "POST",
        body: JSON.stringify(Distri),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await result.json();
      if (result.status == 201) {
        console.log("Registro creado!");
        return data;
      }
    } catch (error) {
      console.log("Error" + error);
    }
  };

  const _setPurchase = async (Purchase) => {
    try {
      const result = await fetch(url + "/Purchase", {
        method: "POST",
        body: JSON.stringify(Purchase),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await result.json();
      if (result.status == 201) {
        console.log("Registro creado!");
        return data;
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const _deleteUser = async (id) => {
    try {
      const result = await fetch(url + "User/" + `${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await result.json();
      if (result.status == 200) {
        console.log("Registro eliminado " + data);
        let item = document.getElementById(id);
        item.parentNode.removeChild(item);
        alert("Registro Eliminado");
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const _deleteProduct = async (id) => {
    try {
      const result = await fetch(url + "Product/" + `${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await result.json();
      if (result.status == 200) {
        console.log("Registro eliminado " + data);
        let item = document.getElementById(id);
        item.parentNode.removeChild(item);
        alert("Registro Eliminado");
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const _deleteDistri = async (id) => {
    try {
      const result = await fetch(url + "Distributor/" + `${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await result.json();
      if (result.status == 200) {
        console.log("Registro eliminado " + data);
        let item = document.getElementById(id);
        item.parentNode.removeChild(item);
        alert("Registro Eliminado");
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const _deletePurchase = async (id) => {
    try {
      const result = await fetch(url + "Purchase/" + `${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await result.json();
      if (result.status == 200) {
        console.log("Registro eliminado " + data);
        let item = document.getElementById(id);
        item.parentNode.removeChild(item);
        alert("Registro Eliminado");
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  return {
    getUsers() {
      return _getUsers();
    },
    getProducts() {
      return _getProducts();
    },
    getUserById(id) {
      return _getUserById(id);
    },
    getProductById(id) {
      return _getProductById(id);
    },
    getDistri() {
      return _getDistri();
    },
    getPurchase() {
      return _getPurchase();
    },
    getDistriById(id) {
      return _getDistriById(id);
    },
    getPurchaseById(id) {
      return _getPurchaseById(id);
    },
    setDistri(Distri) {
      return _setDistri(Distri);
    },
    setPurchase(Purchase) {
      return _setPurchase(Purchase);
    },
    editDistri(id, Distri) {
      return _editDistri(id, Distri);
    },
    editPurchase(id, Purchase) {
      return _editPurchase(id, Purchase);
    },
    deleteDistri(id, Distri) {
      return _deleteDistri(id, Distri);
    },
    deletePurchase(id, Purchase) {
      return _deletePurchase(id, Purchase);
    },
    setUser(User) {
      return _setUser(User);
    },
    setProduct(Product) {
      return _setProduct(Product);
    },
    editUser(id, User) {
      return _editUser(id, User);
    },
    editProduct(id, Product) {
      return _editProduct(id, Product);
    },
    deleteUser(id) {
      return _deleteUser(id);
    },
    deleteProduct(id) {
      return _deleteProduct(id);
    },
  };
})();

const inputs = (function () {
  const buttonsInput = document.getElementById("target");
  const table_container = document.getElementById("table_container");
  const modal = document.getElementById("modal");
  return {
    buttonsInput,
    table_container,
    modal,
  };
})();

const distriInputs = () => {
  const d_name = document.getElementById("d_name");
  const d_equip = document.getElementById("d_equip");
  const d_category = document.getElementById("d_category");
  return {
    d_name,
    d_equip,
    d_category,
  };
};

const purchInputs = () => {
  const number = document.getElementById("p_id");
  const price = document.getElementById("p_price");
  const amount = document.getElementById("p_amount");
  const date = document.getElementById("p_date");
  return {
    number,
    price,
    amount,
    date,
  };
};

function User(id_, name_, email_, phone_, age_, postal_code_) {
  var User = {
    id: id_,
    name: name_,
    email: email_,
    phone: phone_,
    age: age_,
    postal_code: postal_code_,
  };
  return User;
}

function Product(id_, name_, description_, price_, stock_) {
  let Product = {
    id: id_,
    name: name_,
    description: description_,
    price: price_,
    stock: stock_,
  };
  return Product;
}

function Distri(id, name, equipment, category) {
  let Distri = {
    id: id,
    name: name,
    equipment: equipment,
    category: category,
  };
  return Distri;
}

function Purchase(id, number, totalprice, amount, date) {
  let Purchase = {
    id: id,
    number: number,
    totalprice: totalprice,
    amount: amount,
    date: date,
  };
  return Purchase;
}

function Conjunto(nombre) {
  let buttons = `<div class="flex flex-row justify-center items-center gap-x-3">
  <button onclick="Listar${nombre}()" class="border-2 border-black rounded-xl p-2 transition text-white bg-blue-800 hover:rounded-xl hover:scale-110">Mostrar ${nombre}</button>
  <button onclick="Agregar${nombre}()" class="border-2 border-black rounded-xl p-2 transition text-white bg-blue-800 hover:rounded-xl hover:scale-110">Añadir ${nombre}</button>
    </div>`;
  return buttons;
}

MostrarDistriButtons = async () => {
  const element = document.createElement("div");
  element.innerHTML = Conjunto("Distribuidores");
  if (inputs.buttonsInput.childElementCount > 0) {
    inputs.buttonsInput.innerHTML = "";
  }
  inputs.buttonsInput.appendChild(element);
};

MostrarPurchaseButtons = async () => {
  const element = document.createElement("div");
  element.innerHTML = Conjunto("Compras");
  if (inputs.buttonsInput.childElementCount > 0) {
    inputs.buttonsInput.innerHTML = "";
  }
  inputs.buttonsInput.appendChild(element);
};

MostrarUserButtons = async () => {
  const div = document.getElementById("target");
  const element = document.createElement("div");
  element.innerHTML = Conjunto("Usuarios");
  if (div.childElementCount > 0) {
    div.innerHTML = "";
  }
  div.appendChild(element);
};

MostrarProductButtons = async () => {
  const div = document.getElementById("target");
  const element = document.createElement("div");
  element.innerHTML = Conjunto("Productos");
  if (div.childElementCount > 0) {
    div.innerHTML = "";
  }
  div.appendChild(element);
};

ListarCompras = async () => {
  const element = document.createElement("div");
  element.className = "flex justify-center items-center";
  const compras = await ApiControl.getPurchase();
  let html = `
  <table id="tabla2" class="w-11/12 mt-2 border-collapse border-2 border-black">
    <thead>
        <tr class="bg-grey-100 border">
            <th class="text-left border p-2 border-black">ID</th>
            <th class="text-left border p-2 border-black">Numero de compra</th>
            <th class="text-left border p-2 border-black">Cantidad</th>
            <th class="text-left border p-2 border-black">Total</th>
            <th class="text-left border p-2 border-black">Fecha</th>
            <th class="text-left border p-2 border-black">Acciones</th>
        </tr>
    </thead>
    <tbody>  
  `;
  compras.forEach((element) => {
    html += `
        <tr id="${element.id}">
            <td class="text-black border border-black p-2 ">${element.id}</td>
            <td class="text-black border border-black p-2">${element.number}</td>
            <td class="text-black border border-black p-2">${element.amount}</td>
            <td class="text-black border border-black p-2">${element.totalprice}</td>
            <td class="text-black border border-black p-2">${element.date}</td>
            <td class="text-black border border-black">
                <div class="flex flex-row justify-center items-center gap-x-2 "><button onclick="EliminarCompra(${element.id})" class="bg-red-500 px-2 py-2 rounded-xl text-sm text-white font-semibold">Eliminar</button>
                <button onclick="EditarCompra(${element.id})" class="bg-green-500  px-2 py-2 rounded-xl text-sm text-black font-semibold">Editar</button>
                </div>
            </td>
        </tr>
      `;
  });
  html += `</tbody></table>`;
  element.innerHTML = html;
  if (inputs.table_container.childElementCount > 0) {
    inputs.table_container.innerHTML = "";
  }
  inputs.table_container.className += " border-2 border-black";
  inputs.table_container.appendChild(element);
};

ListarDistribuidores = async () => {
  const element = document.createElement("div");
  element.className = "flex justify-center items-center";
  const distri = await ApiControl.getDistri();
  let html = `
  <table id="tabla2" class="w-11/12 mt-2 border-collapse border-2 border-black">
    <thead>
        <tr class="bg-grey-100 border">
            <th class="text-left border p-2 border-black">ID</th>
            <th class="text-left border p-2 border-black">Nombre</th>
            <th class="text-left border p-2 border-black">Equipo</th>
            <th class="text-left border p-2 border-black">Categoria</th>
            <th class="text-left border p-2 border-black">Acciones</th>
        </tr>
    </thead>
    <tbody>  
  `;
  distri.forEach((element) => {
    html += `
        <tr id="${element.id}">
            <td class="text-black border border-black p-2 ">${element.id}</td>
            <td class="text-black border border-black p-2">${element.name}</td>
            <td class="text-black border border-black p-2">${element.equipment}</td>
            <td class="text-black border border-black p-2">${element.category}</td>
            <td class="text-black border border-black">
                <div class="flex flex-row justify-center items-center gap-x-2 "><button onclick="EliminarDistri(${element.id})" class="bg-red-500 px-2 py-2 rounded-xl text-sm text-white font-semibold">Eliminar</button>
                <button onclick="EditarDistribuidores(${element.id})" class="bg-green-500  px-2 py-2 rounded-xl text-sm text-black font-semibold">Editar</button>
                </div>
            </td>
        </tr>
      `;
  });
  html += `</tbody></table>`;
  element.innerHTML = html;
  if (inputs.table_container.childElementCount > 0) {
    inputs.table_container.innerHTML = "";
  }
  inputs.table_container.className += " border-2 border-black";
  inputs.table_container.appendChild(element);
};

AgregarDistribuidores = async () => {
  inputs.modal.className = "block";
  const element = document.createElement("div");
  ocultar();
  let html = `
  <div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
    <div class="bg-white px-16 py-14 rounded-md text-center">
      <section class="distri_container">
        <div class="distri_tittle">
            <h2 class="text-3xl font-bold m-4">
                Datos del Distribuidor
            </h2>
        </div>
        <div class="distri_data mx-4 mb-4">
            <p class="distri_name text-xl font-semibold">
                Nombre de la compañia
            </p>
            <input id="d_name" class="border-2 mb-2 border-black w-72" type="namedistri">
            <p class="distri_description text-xl font-semibold ">
                Equipo distribuido
            </p>
            <textarea id="d_equip" name="" placeholder="Ingrese aqui la descripcion del producto" class="p-2 description border-2 mb-1 border-black resize-none w-72" cols="30" rows="10"></textarea>
            <p class="distri_price text-xl font-semibold">
                Categorias
            </p>
            <input id="d_category" class="border-2 mb-2 border-black w-72" type="priceproduct">
        </div>
        <div class="button_class mx-4 mb-20">
            <button onclick="ocultar(); closeModal();" class="cancel border-2 px-4 border-black font-semibold bg-white p-1 transition hover:bg-red-500 hover:text-white">
                Cancelar
            </button>
            <button onclick="ocultar(); RegistrarDistri();" class="register ml-20 px-4 border-2 border-black font-semibold bg-white p-1 transition hover:bg-blue-400 hover:text-white">
                Registrar
            </button>
        </div>
        </section>
    </div>
  </div>
  `;
  element.innerHTML = html;
  if (inputs.modal.childElementCount > 0) {
    inputs.modal.innerHTML = "";
  }
  inputs.modal.appendChild(element);
};

function RegistrarDistri() {
  const inputs = distriInputs();
  Distrib = Distri(
    0,
    inputs.d_name.value,
    inputs.d_equip.value,
    inputs.d_category.value
  );
  ApiControl.setDistri(Distrib);
  closeModal();
  ListarDistribuidores();
}

AgregarCompras = async () => {
  inputs.modal.className = "block";
  const element = document.createElement("div");
  ocultar();
  let html = `
  <div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
  <div class="bg-white px-16 py-14 rounded-md text-center">
  <section class="purch_container">
  <div class="purch_tittle">
      <h1 class="text-3xl font-bold m-4">
          Datos de Compra
      </h1>
  </div>
  <div class="user_info mx-4 mb-4">
      <p class="name text-xl font-semibold">
          Numero de compra
      </p>
      <input id="p_id" class="border-2 mb-2 border-black w-72" type="textname" placeholder="">
      <p class="email text-xl font-semibold">
          Precio de compra
      </p>
      <input id="p_price" class="border-2 mb-2 border-black w-72" type="emailtext" placeholder="">
      <p class="Telefonodecontacto text-xl font-semibold">
          Cantidad
      </p>
      <input id="p_amount" class="border-2 mb-2 border-black w-72" type="textcontact">
      <p class="age text-xl font-semibold">
          Fecha de compra
      </p>
      <input id="p_date" class="border-2 mb-2 border-black w-72" type="textage">
  </div>
  <div class="button_class mx-4 mb-20 flex flex-row">
      <button onclick="ocultar(); closeModal();" class="cancel border-2 px-4 border-black font-semibold bg-white p-1 hover:bg-red-500 hover:text-white transition">
          Cancelar
      </button>
      <button onclick="ocultar(); RegistrarPurch();" class="register px-4 ml-20 border-2 border-black font-semibold bg-white p-1 hover:bg-blue-400 hover:text-white transition">
          Registrar
      </button>
  </div>
</section>
  </div>
  </div>
  `;

  element.innerHTML = html;
  if (inputs.modal.childElementCount > 0) {
    inputs.modal.innerHTML = "";
  }
  inputs.modal.appendChild(element);
};

function RegistrarPurch() {
  const inputs = purchInputs();
  pur = Purchase(
    0,
    inputs.number.value,
    inputs.price.value,
    inputs.amount.value,
    inputs.date.value
  );
  ApiControl.setPurchase(pur);
  closeModal();
}

EditarCompra = async (id) => {
  const element = document.createElement("div");
  inputs.modal.className = "block";
  ocultar();
  let html = `
  <div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
  <div class="bg-white px-16 py-14 rounded-md text-center">
  <section class="purch_container">
  <div class="purch_tittle">
      <h1 class="text-3xl font-bold m-4">
          Datos de Compra
      </h1>
  </div>
  <div class="user_info mx-4 mb-4">
      <p class="name text-xl font-semibold">
          Numero de compra
      </p>
      <input id="p_id" class="border-2 mb-2 border-black w-72" type="textname" placeholder="">
      <p class="email text-xl font-semibold">
          Precio de compra
      </p>
      <input id="p_price" class="border-2 mb-2 border-black w-72" type="emailtext" placeholder="">
      <p class="Telefonodecontacto text-xl font-semibold">
          Cantidad
      </p>
      <input id="p_amount" class="border-2 mb-2 border-black w-72" type="textcontact">
      <p class="age text-xl font-semibold">
          Fecha de compra
      </p>
      <input id="p_date" class="border-2 mb-2 border-black w-72" type="textage">
  </div>
  <div class="button_class mx-4 mb-20 flex flex-row">
      <button onclick="ocultar(); closeModal();" class="cancel border-2 px-4 border-black font-semibold bg-white p-1 hover:bg-red-500 hover:text-white transition">
          Cancelar
      </button>
      <button onclick="ocultar(); EnviarCompra(${id}); " class="register px-4 ml-20 border-2 border-black font-semibold bg-white p-1 hover:bg-blue-400 hover:text-white transition">
          Registrar
      </button>
  </div>
</section>
  </div>
</div>
  `;
  element.innerHTML = html;
  if (inputs.modal.childElementCount > 0) {
    inputs.modal.innerHTML = "";
  }
  inputs.modal.appendChild(element);
  const purch = await ApiControl.getPurchaseById(id);
  const purchI = purchInputs();
  purchI.number.value = purch.number;
  purchI.price.value = purch.totalprice;
  purchI.amount.value = purch.amount;
  purchI.date.value = purch.date;
};

EditarDistribuidores = async (id) => {
  const element = document.createElement("div");
  inputs.modal.className = "block";
  ocultar();
  let html = `
  <div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
    <div class="bg-white px-16 py-14 rounded-md text-center">
      <section class="distri_container">
        <div class="distri_tittle">
            <h2 class="text-3xl font-bold m-4">
                Datos del Distribuidor
            </h2>
        </div>
        <div class="distri_data mx-4 mb-4">
            <p class="distri_name text-xl font-semibold">
                Nombre de la compañia
            </p>
            <input id="d_name" class="border-2 mb-2 border-black w-72" type="namedistri">
            <p class="distri_description text-xl font-semibold ">
                Equipo distribuido
            </p>
            <textarea id="d_equip" name="" placeholder="Ingrese aqui la descripcion del producto" class="p-2 description border-2 mb-1 border-black resize-none w-72" cols="30" rows="10"></textarea>
            <p class="distri_price text-xl font-semibold">
                Categorias
            </p>
            <input id="d_category" class="border-2 mb-2 border-black w-72" type="priceproduct">
        </div>
        <div class="button_class mx-4 mb-20">
            <button onclick="ocultar(); closeModal();" class="cancel border-2 px-4 border-black font-semibold bg-white p-1 transition hover:bg-red-500 hover:text-white">
                Cancelar
            </button>
            <button onclick="ocultar(); EnviarDistribuidores(${id});" class="register ml-20 px-4 border-2 border-black font-semibold bg-white p-1 transition hover:bg-blue-400 hover:text-white">
                Registrar
            </button>
        </div>
        </section>
    </div>
  </div>
  `;
  element.innerHTML = html;
  if (inputs.modal.childElementCount > 0) {
    inputs.modal.innerHTML = "";
  }
  inputs.modal.appendChild(element);

  const dist = await ApiControl.getDistriById(id);
  const distI = distriInputs();
  distI.d_name.value = dist.name;
  distI.d_equip.value = dist.equipment;
  distI.d_category.value = dist.category;


};

EnviarCompra = async (id) => {
  const inputs = purchInputs();
  pur = Purchase(
    0,
    inputs.number.value,
    inputs.price.value,
    inputs.amount.value,
    inputs.date.value
  );
  ApiControl.editPurchase(id, pur);
  closeModal();
};

EnviarDistribuidores = async (id) => {
  const inputs = distriInputs();
  Distrib = Distri(
    0,
    inputs.d_name.value,
    inputs.d_equip.value,
    inputs.d_category.value
  );
  ApiControl.editDistri(id, Distrib);
  closeModal();
  ListarDistribuidores();
};

EliminarCompra = async (id) => {
  ApiControl.deletePurchase(id);
};

EliminarDistri = async (id) => {
  ApiControl.deleteDistri(id);
};

ListarUsuarios = async () => {
  const div = document.getElementById("table_container");
  const element = document.createElement("div");
  element.className = "flex justify-center items-center";
  const users = await ApiControl.getUsers();
  let html = `
  <table id="tabla2" class="w-11/12 mt-2 border-collapse border-2 border-black">
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
<tbody>  
  `;

  users.forEach((element) => {
    html += `
        <tr id="${element.id}">
            <td class="text-black border border-black p-2 ">${element.id}</td>
            <td class="text-black border border-black p-2">${element.name}</td>
            <td class="text-black border border-black p-2">${element.email}</td>
            <td class="text-black border border-black p-2">${element.phone}</td>
            <td class="text-black border border-black p-2">${element.age}</td>
            <td class="text-black border border-black p-2">${element.postal_code}</td>
            <td class="text-black border border-black">
                <div class="flex flex-row justify-center items-center gap-x-2 "><button onclick="EliminarUsuario(${element.id})" class="bg-red-500 px-2 py-2 rounded-xl text-sm text-white font-semibold">Eliminar</button>
                <button onclick="EditarUsuario(${element.id})" class="bg-green-500  px-2 py-2 rounded-xl text-sm text-black font-semibold">Editar</button>
                </div>
            </td>
        </tr>
      `;
  });

  html += `</tbody></table>`;

  element.innerHTML = html;
  if (div.childElementCount > 0) {
    div.innerHTML = "";
  }
  div.className += " border-2 border-black";
  div.appendChild(element);
};

ListarProductos = async () => {
  const div = document.getElementById("table_container");
  const element = document.createElement("div");
  element.className = "flex justify-center items-center";
  const products = await ApiControl.getProducts();
  let html = `
  <table id="tabla2" class="w-11/12 mt-2 border-collapse border-2 border-black">
    <thead>
        <tr class="bg-grey-100 border">
            <th class="text-left border p-2 border-black">ID</th>
            <th class="text-left border p-2 border-black">Nombre</th>
            <th class="text-left border p-2 border-black">Descripcion</th>
            <th class="text-left border p-2 border-black">Precio</th>
            <th class="text-left border p-2 border-black">Stock</th>
            <th class="text-left border p-2 border-black">Acciones</th>
        </tr>
    </thead>
<tbody>  
  `;

  products.forEach((element) => {
    html += `
        <tr id="${element.id}">
            <td class="text-black border border-black p-2 ">${element.id}</td>
            <td class="text-black border border-black p-2">${element.name}</td>
            <td class="text-black border border-black p-2">${element.description}</td>
            <td class="text-black border border-black p-2">${element.price}</td>
            <td class="text-black border border-black p-2">${element.stock}</td>
            <td class="text-black border border-black p-2">
            <div class="flex flex-row justify-center items-center gap-x-2 "><button onclick="EliminarProducto(${element.id})" class="bg-red-500 px-2 py-2 rounded-xl text-sm text-white font-semibold">Eliminar</button>
            <button onclick="EditarProducto(${element.id})" class="bg-green-500  px-2 py-2 rounded-xl text-sm text-black font-semibold">Editar</button>
            </div>
            </td>
            
        </tr>
  `;
  });

  element.innerHTML = html;
  if (div.childElementCount > 0) {
    div.innerHTML = "";
  }
  div.appendChild(element);
};

function closeModal() {
  const divApp = document.getElementById("modal");
  divApp.className = "hidden";
}

AgregarUsuarios = async () => {
  const divApp = document.getElementById("modal");
  const element = document.createElement("div");
  divApp.className = "block";
  ocultar();
  let html = `<div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
  <div class="bg-white px-16 py-14 rounded-md text-center">
  <section class="user_info_container">
  <div class="user_tittle">
      <h1 class="text-3xl font-bold m-4">
          Datos del Usuario
      </h1>
  </div>
  <div class="user_info mx-4 mb-4">
      <p class="name text-xl font-semibold">
          Nombre
      </p>
      <input id="name_i" class="border-2 mb-2 border-black w-72" type="textname" placeholder="Nombre del usuario">
      <p class="email text-xl font-semibold">
          Correo
      </p>
      <input id="email_i" class="border-2 mb-2 border-black w-72" type="emailtext" placeholder="@example.com">
      <p class="Telefonodecontacto text-xl font-semibold">
          Telefono de contacto
      </p>
      <input id="phone_i" class="border-2 mb-2 border-black w-72" type="textcontact">
      <p class="age text-xl font-semibold">
          Edad
      </p>
      <input id="age_i" class="border-2 mb-2 border-black w-72" type="textage">
      <p class="postalcode text-xl font-semibold">
          Codigo postal
      </p>
      <input id="postal_i" class="border-2 border-black w-72" type="postaltext">
    </div>
    <div class="button_class mx-4 mb-2 flex flex-row">
      <button onclick="closeModal(); ocultar();" class="cancel border-2 px-4 border-black font-semibold bg-white p-1 hover:bg-red-500 hover:text-white transition">
          Cancelar
      </button>
      <button onclick="RegistrarUser(); ocultar();" class="register px-4 ml-20 border-2 border-black font-semibold bg-white p-1 hover:bg-blue-400 hover:text-white transition">
          Registrar
      </button>
  </div>
</section>    
</div>
</div>`;
  element.innerHTML = html;
  if (divApp.childElementCount > 0) {
    divApp.innerHTML = "";
  }
  divApp.appendChild(element);
};

function RegistrarUser() {
  name_i = document.getElementById("name_i").value;
  email_i = document.getElementById("email_i").value;
  phone_i = document.getElementById("phone_i").value;
  age_i = document.getElementById("age_i").value;
  postal_i = document.getElementById("postal_i").value;
  Usuario = new User(0, name_i, email_i, phone_i, age_i, postal_i);
  ApiControl.setUser(Usuario);
  closeModal();
  ListarUsuarios();
}

AgregarProducto = async () => {
  const div = document.getElementById("modal");
  const element = document.createElement("div");
  div.className = "block";
  ocultar();
  let html = `<div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
  <div class="bg-white px-16 py-14 rounded-md text-center">
  <section class="product_container">
        <div class="product_tittle">
            <h2 class="text-3xl font-bold m-4">
                Registrar producto
            </h2>
        </div>
        <div class="product_data mx-4 mb-4">
            <p class="product_name text-xl font-semibold">
                Nombre del Producto
            </p>
            <input id="name_p" class="border-2 mb-2 border-black w-72" type="nameproduct">
            <p class="product_description text-xl font-semibold ">
                Descripcion
            </p>
            <textarea id="desc_p" placeholder="Ingrese aqui la descripcion del producto" class="description border-2 mb-2 border-black resize-none w-72 h-32" cols="30" rows="10"></textarea>
            <p class="product_price text-xl font-semibold">
                Precio del Producto
            </p>
            <input id="price_p" class="border-2 mb-2 border-black w-72" type="priceproduct">
            <p class="product_stock text-xl font-semibold">
                Stock
            </p>
            <input id="stock_p" class="border-2 mb-2 border-black w-72" type="stockproduct">
        </div>
        <div class="button_class mx-4 mb-2">
            <button onclick="closeModal(); ocultar();" class="cancel border-2 px-4 border-black font-semibold bg-white p-1 transition hover:bg-red-500 hover:text-white">
                Cancelar
            </button>
            <button onclick="RegistrarProductos(); ocultar();" class="register ml-20 px-4 border-2 border-black font-semibold bg-white p-1 transition hover:bg-blue-400 hover:text-white">
                Registrar
            </button>
        </div>
    </section>  
</div>
</div>`;

  element.innerHTML = html;
  if (div.childElementCount > 0) {
    div.innerHTML = "";
  }
  div.appendChild(element);
};

function RegistrarProductos() {
  name_ip = document.getElementById("name_p").value;
  description_ip = document.getElementById("desc_p").value;
  price_ip = document.getElementById("price_p").value;
  stock_ip = document.getElementById("stock_p").value;
  pro = Product(0, name_ip, description_ip, price_ip, stock_ip);
  ApiControl.setProduct(pro);
  closeModal();
  ListarProducto();
}

EditarUsuario = async (id) => {
  const divApp = document.getElementById("modal");
  const element = document.createElement("div");
  divApp.className = "block";
  ocultar();
  let html = `<div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
    <div class="bg-white px-16 py-14 rounded-md text-center">
    <section class="user_info_container">
    <div class="user_tittle">
        <h1 class="text-3xl font-bold m-4">
            Datos del Usuario
        </h1>
    </div>
    <div class="user_info mx-4 mb-4">
        <p class="name text-xl font-semibold">
            Nombre
        </p>
        <input id="name_i" class="border-2 mb-2 border-black w-72" type="textname" placeholder="Nombre del usuario">
        <p class="email text-xl font-semibold">
            Correo
        </p>
        <input id="email_i" class="border-2 mb-2 border-black w-72" type="emailtext" placeholder="@example.com">
        <p class="Telefonodecontacto text-xl font-semibold">
            Telefono de contacto
        </p>
        <input id="phone_i" class="border-2 mb-2 border-black w-72" type="textcontact">
        <p class="age text-xl font-semibold">
            Edad
        </p>
        <input id="age_i" class="border-2 mb-2 border-black w-72" type="textage">
        <p class="postalcode text-xl font-semibold">
            Codigo postal
        </p>
        <input id="postal_i" class="border-2 border-black w-72" type="postaltext">
      </div>
      <div class="button_class mx-4 mb-2 flex flex-row">
        <button onclick="closeModal(); ocultar();" class="cancel border-2 px-4 border-black font-semibold bg-white p-1 hover:bg-red-500 hover:text-white transition">
            Cancelar
        </button>
        <button onclick="EnviarUser(${id}); ocultar();" class="register px-4 ml-20 border-2 border-black font-semibold bg-white p-1 hover:bg-blue-400 hover:text-white transition">
            Editar
        </button>
    </div>
  </section>    
  </div>
  </div>`;
  element.innerHTML = html;
  if (divApp.childElementCount > 0) {
    divApp.innerHTML = "";
  }
  divApp.appendChild(element);

  const user = await ApiControl.getUserById(id);
  const name_i = document.getElementById("name_i");
  const email_i = document.getElementById("email_i");
  const phone_i = document.getElementById("phone_i");
  const age_i = document.getElementById("age_i");
  const postal_i = document.getElementById("postal_i");

  name_i.value = user.name;
  email_i.value = user.email;
  phone_i.value = user.phone;
  age_i.value = user.age;
  postal_i.value = user.postal_code;
};

EditarProducto = async (id) => {
  const div = document.getElementById("modal");
  const element = document.createElement("div");
  div.className = "block";
  ocultar();
  const product = await ApiControl.getProductById(id);
  let html = `<div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
  <div class="bg-white px-16 py-14 rounded-md text-center">
  <section class="product_container">
        <div class="product_tittle">
            <h2 class="text-3xl font-bold m-4">
                Registrar producto
            </h2>
        </div>
        <div class="product_data mx-4 mb-4">
            <p class="product_name text-xl font-semibold">
                Nombre del Producto
            </p>
            <input id="name_p" class="border-2 mb-2 border-black w-72" type="nameproduct">
            <p class="product_description text-xl font-semibold ">
                Descripcion
            </p>
            <textarea id="desc_p" placeholder="Ingrese aqui la descripcion del producto" class="description border-2 mb-2 border-black resize-none w-72 h-32" cols="30" rows="10"></textarea>
            <p class="product_price text-xl font-semibold">
                Precio del Producto
            </p>
            <input id="price_p" class="border-2 mb-2 border-black w-72" type="priceproduct">
            <p class="product_stock text-xl font-semibold">
                Stock
            </p>
            <input id="stock_p" class="border-2 mb-2 border-black w-72" type="stockproduct">
        </div>
        <div class="button_class mx-4 mb-2">
            <button onclick="closeModal(); ocultar();" class="cancel border-2 px-4 border-black font-semibold bg-white p-1 transition hover:bg-red-500 hover:text-white">
                Cancelar
            </button>
            <button onclick="EnviarProducto(${id}); ocultar();" class="register ml-20 px-4 border-2 border-black font-semibold bg-white p-1 transition hover:bg-blue-400 hover:text-white">
                Registrar
            </button>
        </div>
    </section>  
</div>
</div>`;

  element.innerHTML = html;
  if (div.childElementCount > 0) {
    div.innerHTML = "";
  }
  div.appendChild(element);

  const name_ip = document.getElementById("name_p");
  const description_ip = document.getElementById("desc_p");
  const price_ip = document.getElementById("price_p");
  const stock_ip = document.getElementById("stock_p");
  name_ip.value = product.name;
  description_ip.value = product.description;
  price_ip.value = product.price;
  stock_ip.value = product.stock;
};

function EnviarProducto(id) {
  name_ip = document.getElementById("name_p").value;
  description_ip = document.getElementById("desc_p").value;
  price_ip = document.getElementById("price_p").value;
  stock_ip = document.getElementById("stock_p").value;
  pro = Product(0, name_ip, description_ip, price_ip, stock_ip);
  ApiControl.editProduct(id, pro);
  closeModal();
  ListarProductos().then();
}

function EnviarUser(id) {
  name_i = document.getElementById("name_i").value;
  email_i = document.getElementById("email_i").value;
  phone_i = document.getElementById("phone_i").value;
  age_i = document.getElementById("age_i").value;
  postal_i = document.getElementById("postal_i").value;
  Usuario = new User(0, name_i, email_i, phone_i, age_i, postal_i);
  ApiControl.editUser(id, Usuario);
  closeModal();
  ListarUsuarios();
}

EliminarUsuario = async (id) => {
  ApiControl.deleteUser(id);
};

EliminarProducto = async (id) => {
  ApiControl.deleteProduct(id);
};
