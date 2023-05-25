(
  function integrateData(){
    fetch("data.json")
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    }).then(data => {
      data.map(segment => {
        const summary = document.querySelector(".summary");
        const newDiv = document.createElement("div");
        newDiv.className = segment.category.toLowerCase();
        newDiv.innerHTML = `
          <img src=${segment.icon}>
          <p>${segment.category}</p>
          <p id="${segment.category.toLowerCase()}" class="miniScore">${segment.score} <span class="light-white"> / 100</span></p>
          `;
        summary.insertBefore(newDiv, summary.lastElementChild);
      })
    })
  }
)();