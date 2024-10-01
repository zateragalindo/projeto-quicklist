
const input = document.querySelector("#inputItem")
const btn = document.querySelector("#btn")
const html = document.createElement("div")
const main = document.querySelector("main")

btn.addEventListener('click', (event) => {
  event.preventDefault()

  html.classList.add("wrapper-box");

  html.innerHTML = `
    <div class="box-name">
      <input type="checkbox" name="item" id="pao">
      <label for="pao">${input.value}</label>
    </div>
    <img src="assets/frame-3.svg" alt="Excluir item da lista">
  `;

  main.appendChild(html)


  
})