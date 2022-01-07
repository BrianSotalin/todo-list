const input = document.querySelector('input');
const adbtn = document.querySelector('.btn-add')
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

adbtn.addEventListener('click',(e) =>{
    e.preventDefault();

    const text = input.value;
  
    if (text !== "") {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.textContent = text;
  
      li.appendChild(p);
        //añadimos el boton eliminar a los elementos de la lista
        li.appendChild(deletbtn());
      ul.appendChild(li);
     
  
      input.value = "";//vacia el input
      empty.style.display = "none";//quita la palabra por defecto
      
     
    }
});

function deletbtn(){
    const eliminar = document.createElement("button");

    eliminar.textContent = "X";
    eliminar.className = "btn-delete";

    eliminar.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
    
        const items = document.querySelectorAll("li");
    
        if (items.length === 0) {
          empty.style.display = "block";
        }
      });
    
      return eliminar;
}
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');//toggle agrega una clase si no tiene y la elimina si ya la tiene
	btnSwitch.classList.toggle('active');
});

