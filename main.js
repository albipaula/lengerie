/* 

1. Crea la estructura HTML: Define la estructura HTML para mostrar los productos y el carrito de compras. Puedes usar elementos como `div`, `ul`, `li`, etc., para organizar y mostrar la información relevante.

2. Crea una clase o constructor para representar los productos: Define una clase o un constructor para representar los productos disponibles en tu tienda. Esta clase puede tener propiedades como `nombre`, `precio`, `cantidad`, etc.

3. Crea una lista de productos: Crea una lista de productos disponibles en tu tienda. Puedes hacerlo manualmente o mediante una API o base de datos.

4. Maneja eventos de botones: Agrega eventos a los botones "Agregar al carrito" para que, cuando se haga clic en ellos, el producto correspondiente se agregue al carrito de compras.

5. Actualiza el carrito de compras: Cuando se agrega un producto al carrito, actualiza la representación visual del carrito para mostrar los productos agregados. Puedes usar JavaScript para manipular el DOM y mostrar los elementos del carrito.

6. Calcula el total: Mantén un registro del total de la compra actualizando el valor cada vez que se agrega un producto al carrito.

7. Permite modificar la cantidad de productos en el carrito: Agrega funcionalidad para permitir al usuario cambiar la cantidad de productos en el carrito, ya sea mediante botones de incremento/decremento o mediante una entrada de texto.

8. Implementa la funcionalidad de eliminar productos: Agrega la capacidad de eliminar productos individuales del carrito.

9. Procesa el pedido: Cuando el usuario esté listo para hacer el pedido, implementa la funcionalidad para procesar el pedido, realizar el pago y cualquier otra acción necesaria.

Recuerda que estos pasos son generales y pueden variar según los requisitos específicos de tu aplicación. También puedes utilizar librerías o frameworks como React, Angular o Vue.js para simplificar y acelerar el desarrollo de tu carrito de compras. */


// PRODUCTO MODELO

class Producto { 
    constructor ( art,name,price,url) {
      
      this.art= art;
      this.name = name;
      this.price = price;
      this.url = url; 
      this.quantity = 1;
      
    } 
  }
// PRODUCTOS DE LA TIENDA 

  const item1 = new Producto ( 234, "brass", 1200,"https://img.freepik.com/free-photo/pink-black-bras-bed_53876-146791.jpg?w=740&t=st=1690900680~exp=1690901280~hmac=108c7eb8fb73da8c793c7fddf1d42636fbc27a4a5609061c7c7ba13ab8710a1e");
  const item2 = new Producto ( 14, "undie", 5000,"https://img.freepik.com/free-photo/pink-black-bras-bed_53876-146791.jpg?w=740&t=st=1690900680~exp=1690901280~hmac=108c7eb8fb73da8c793c7fddf1d42636fbc27a4a5609061c7c7ba13ab8710a1e");
  const item3 = new Producto ( 123234, "pijama", 800,"https://img.freepik.com/free-photo/pink-black-bras-bed_53876-146791.jpg?w=740&t=st=1690900680~exp=1690901280~hmac=108c7eb8fb73da8c793c7fddf1d42636fbc27a4a5609061c7c7ba13ab8710a1e"); 
  const item4 = new Producto ( 1616, "boxer", 1045,"https://img.freepik.com/free-photo/pink-black-bras-bed_53876-146791.jpg?w=740&t=st=1690900680~exp=1690901280~hmac=108c7eb8fb73da8c793c7fddf1d42636fbc27a4a5609061c7c7ba13ab8710a1e"); 

 arrayBasicos = [item1,item2,item3,item4];

 const item5 = new Producto ( 9858, "brass", 1247,"https://img.freepik.com/free-photo/pink-black-bras-bed_53876-146791.jpg?w=740&t=st=1690900680~exp=1690901280~hmac=108c7eb8fb73da8c793c7fddf1d42636fbc27a4a5609061c7c7ba13ab8710a1e");
 const item6 = new Producto ( 9714, "undie", 5685,"https://i.pinimg.com/564x/64/0d/58/640d588ea36280b8f285c77ccbd8f6ec.jpg");
 const item7 = new Producto ( 89647, "pijama", 8875,"https://i.pinimg.com/564x/88/fb/3d/88fb3d6c6dae2cc5420fdfeebfb2cf9a.jpg"); 
 const item8 = new Producto ( 3442, "boxer", 1057,"https://img.freepik.com/free-photo/pink-black-bras-bed_53876-146791.jpg?w=740&t=st=1690900680~exp=1690901280~hmac=108c7eb8fb73da8c793c7fddf1d42636fbc27a4a5609061c7c7ba13ab8710a1e"); 

 arraySexys = [item5,item6,item7,item8];


 const item9 = new Producto ( 985, "brass", 12345,"https://i.pinimg.com/564x/19/0e/96/190e96533cebefaab59de89277077f83.jpg");
 const item10 = new Producto ( 914, "undie", 5567,"https://i.pinimg.com/564x/3e/db/88/3edb88dd1cc755715df3703560246a42.jpg");
 const item11 = new Producto ( 847, "pijama", 8457,"https://i.pinimg.com/736x/f0/1a/da/f01adad8c9e0d597f621b8d8fd68b2a8.jpg"); 
 const item12 = new Producto ( 342, "boxer", 1000,"https://i.pinimg.com/564x/3a/6c/1a/3a6c1ae05ab664ed5eb6912cc3d38a25.jpg"); 

 arrayDeportivos = [item9,item10,item11,item12];
  // CARRITO array 
  let arrayCarrito = [];



/********************  SE AGREGAN LOS PRODUCTOS AL DOM (TIENDA) ******************/
const contenedorProductos = document.getElementById("cartBasicos");
//CATEGORIA BASICOS
const mostrarProductosBasicos = ()=> {
 arrayBasicos.forEach ( (producto) => {
    const div = document.createElement ( "div");
    div.className = "item container"; 
    div.style.backgroundImage = `url("${producto.url}")`;
    div.style.backgroundSize = "cover"; // Ajusta el tamaño de la imagen para cubrir completamente el contenedor
    div.style.backgroundPosition = "center";

    div.innerHTML= `
                    
                    <ul class= "caja-superpuesta container" >  
                    <li> ${ producto.name}  </li> 
                    <li> articulo: ${ producto.art}  </li> 
                    <li> Precio: $ ${ producto.price}  </li>
                    <div><button id = "btn ${producto.art}"> Comprar </button>  </div>
                    </ul>
                    `
    contenedorProductos.appendChild (div);

    const comprar = document.getElementById (`btn ${producto.art}`);
        comprar.addEventListener ("click", ()=> {          
          add (producto.art); 
        
    }) 
  } 
)};

//CATEGORIAS SEXYS
const contenedorSexys = document.getElementById("cartSexys");

const mostrarProductosSexys = ()=> {
arraySexys.forEach ( (producto) => {
    const div = document.createElement ( "div");
    div.className = "item container"; 
    div.style.backgroundImage = `url("${producto.url}")`;
    div.style.backgroundSize = "cover"; // Ajusta el tamaño de la imagen para cubrir completamente el contenedor
    div.style.backgroundPosition = "center";
   
    div.innerHTML= `
                   
                    <ul  class= "caja-superpuesta container" > 
                    <li> ${ producto.name}  </li> 
                    <li> articulo: ${ producto.art}  </li> 
                    <li> Precio: $ ${ producto.price}  </li>
                    <button id = "btn ${producto.art}"> Comprar </button> 
                    </ul> 
                 `
    ;
    contenedorSexys.appendChild (div);

    const comprar = document.getElementById (`btn ${producto.art}`);
        comprar.addEventListener ("click", ()=> {          
          add (producto.art); 
        
    }) 
  } )};

 //CATEGORIAS DEPORTIVOS

  const contenedorDeportivos = document.getElementById("cartDeportivos");

  const mostrarProductosDeportivos = ()=> {
  arrayDeportivos.forEach ( (producto) => {
      const div = document.createElement ( "div");
      div.className = "item container"; 
      div.style.backgroundImage = `url("${producto.url}")`;
      div.style.backgroundSize = "cover"; // Ajusta el tamaño de la imagen para cubrir completamente el contenedor
      div.style.backgroundPosition = "center";
      
      div.innerHTML= `
                      <ul  class= "caja-superpuesta container" > 
                      <li> ${ producto.name}  </li> 
                      <li> articulo: ${ producto.art}  </li> 
                      <li> Precio: $ ${ producto.price}  </li>
                      <button id = "btn ${producto.art}"> Comprar </button> 
                      </ul> `;
      contenedorDeportivos.appendChild (div);
      const comprar = document.getElementById (`btn ${producto.art}`);
          comprar.addEventListener ("click", ()=> {          
            add (producto.art); 
          
      }) 
    } 
)};
mostrarProductosBasicos();
mostrarProductosSexys();
mostrarProductosDeportivos();


/******************** FUNCION PARA AGREGAR PRODUCTOS AL CARRITO **************************************/

const add = (art) => {
  // Buscar si el producto ya está en el carrito
  const selected = arrayCarrito.find((producto) => producto.art === art);

  if (selected) {
    // Si ya existe en el carrito, incrementar la cantidad
    selected.quantity++;
  } else {
    // Buscar el producto en diferentes categorías
    const newBasico = arrayBasicos.find((producto) => producto.art === art);
    const newSexy = arraySexys.find((producto) => producto.art === art);
    const newDeportivo = arrayDeportivos.find((producto) => producto.art === art);

    // Agregar el producto encontrado al carrito con cantidad 1
    if (newBasico) {
      arrayCarrito.push({ ...newBasico, quantity: 1 });
    } else if (newSexy) {
      arrayCarrito.push({ ...newSexy, quantity: 1 });
    } else if (newDeportivo) {
      arrayCarrito.push({ ...newDeportivo, quantity: 1 });
    }
  
  }

  // Actualizar la visualización del carrito
 /* ver () hacer aumento de numero en el logo cart  */



  console.log(arrayCarrito);
};




/********************  SE MUESTRA ITEMS COMPRADOS EN EL MODAL ******************/

// Actualizar la función ver para llenar el modal con los productos del carrito
const ver = () => {
  const div = document.getElementById("contenedorCarrito");
  div.innerHTML = ""; // Limpiar el contenido antes de mostrar los productos

  arrayCarrito.forEach((producto) => {
    div.innerHTML += `
      <ul> 
        <img id="imgCarrito" src="${producto.url}">
        <p> ${producto.name} </p> 
        <p> articulo: ${producto.art} </p> 
        <p> Precio: $${producto.price} </p>
        
        <label for="valor">Cantidad</label>
        <input type="number" name="valor" id="cantidad-${producto.id}" value="${producto.quantity}"> 
        <button id = "eliminar${producto.art}"> eliminar </button> 
      </ul>` ;

      const btnEliminar = document.getElementById(`eliminar${producto.art}` )
      btnEliminar.addEventListener (("click"), ()=> {

        clear(producto.art);
        compraTotal();
        ver();
      }  )

      const total= document.getElementById ("verTotal")
total.addEventListener ("click", () => {

      compraTotal ();
   
      }
    ) ;
  }
);
/********************  eliminar productos del  carrito******************/
const clear = (art) => {
  const selected = arrayCarrito.find((producto) => producto.art === art);

  if (selected) {
    if (selected.quantity > 1) {
      selected.quantity--;
    } else {
      // Elimina el producto del carrito solo si la cantidad es 1 o menos
      const index = arrayCarrito.indexOf(selected);
      if (index > -1) {
        arrayCarrito.splice(index, 1);
      } else {
        console.error("Producto no encontrado en el carrito");
      }
    }
    compraTotal(); // Actualizar el precio total
    ver();
  } else {
    console.error("Producto no encontrado en el carrito");
  }
};
  // Mostrar el modal al hacer clic en el botón
  const modal = document.getElementById("modalCarrito");
  modal.style.display = "block";
};

// Cerrar el modal cuando se haga clic en la "x"
const closeModal = () => {
  const modal = document.getElementById("modalCarrito");
  modal.style.display = "none";
};

// Evento para cerrar el modal cuando se haga clic en la "x"
const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.addEventListener("click", closeModal);

// Evento para cerrar el modal cuando se haga clic fuera del contenido del modal
window.addEventListener("click", (event) => {
  const modal = document.getElementById("modalCarrito");
  if (event.target === modal) {
    closeModal();
  }
});

// Asociar la función ver al botón para mostrar el carrito
const btnVerCarrito = document.getElementById("btnVerCarrito");
btnVerCarrito.addEventListener ("click", () => ver());


// funcion para sumar productos del carrito
const compraTotal = () => {
  let totalCompra = 0;

  arrayCarrito.forEach((producto) => {
    totalCompra += producto.price * producto.quantity;
  });

  total.innerHTML = `Total: $${totalCompra}`;
};



