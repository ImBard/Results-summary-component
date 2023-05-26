const block = document.getElementById("category");
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Exemplo: exibir os dados no console

    for (let dat of data) {
      const img = document.createElement("img");
      img.setAttribute("src", dat.icon);
      const txtCat = document.createTextNode(dat.category);
      const container = document.createElement("span");
      container.appendChild(img);
      container.appendChild(txtCat);
      container.setAttribute("class", dat.category.toLowerCase())
      
      const span = document.createElement("span");
      span.innerHTML = `<b>${dat.score} </b> / 100`;
      
      const category = document.createElement("div");
      category.setAttribute("class", "cat"+dat.category)
      category.appendChild(container);
      category.appendChild(span)
      block.appendChild(category);
    }
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  });
