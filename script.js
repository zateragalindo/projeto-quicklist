const input = document.querySelector("#inputItem");
const btn = document.querySelector("#btn");
const main = document.querySelector("main");

btn.addEventListener('click', (event) => {
  event.preventDefault();

  // Criar um novo div para cada item
  const newDiv = document.createElement("div");
  newDiv.classList.add("wrapper-box");

  newDiv.innerHTML = `
    <div class="box-name">
      <input type="checkbox" name="item" id="pao">
      <label for="pao">${input.value}</label>
    </div>
    <img src="assets/frame-3.svg" alt="Excluir item da lista">
  `;

  // Adicionar o novo div ao container principal (main)
  main.appendChild(newDiv);

  // Limpar o campo de input após a inserção
  input.value = "";
});
