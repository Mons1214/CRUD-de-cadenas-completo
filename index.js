const form = document.querySelector('#form-cadena');
const input = document.querySelector('#cadena-input');
const lista = document.querySelector('#lista-cadenas');

let cadenas = [];

 // Crear
form.addEventListener("submit",(evento) => {
     event.preventDefault();
     const nuevaCadena = input.value.trim();
     if (nuevaCadena) {
        cadenas.push(nuevaCadena);
        input.value = '';
        renderizarLista();
    }
});

renderizarLista = () => {
     lista.innerHTML = '';
    cadenas.forEach((cadena, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${cadena}
      <div>
        <button onclick="editarCadena(${index})">Editar</button>
        <button onclick="eliminarCadena(${index})">Eliminar</button>
      </div>
    `;
    lista.appendChild(li);
  });
}

const editarCadena = (index) => {
    const nuevaCadena = prompt('Editar cadena:', cadenas[index]);
    if (nuevaCadena !== null) {
        cadenas[index] = nuevaCadena.trim();
        renderizarLista();
    }
}

const eliminarCadena = (index) => {
    cadenas.splice(index, 1);
    renderizarLista();
}