let lista = document.querySelectorAll(".item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let count = lista.length;
let current = 0;

next.onclick = () => {
  let activedOld = document.querySelector('.active');
  activedOld.classList.remove('active');

  current = current >= count -1 ? 0 : current +1
  lista[current].classList.add('active');
};

prev.onclick = () => {
  let activedOld = document.querySelector(".active");
  activedOld.classList.remove("active");

  current = current <= 0 ? count-1 : current -1
  lista[current].classList.add('active');
};
