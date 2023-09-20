const jsonPath = '../../data.json'

const colors = ["--Light-red", "--Orangey-yellow", "--Green-teal", "-Cobalt-blue"]

fetch(jsonPath).then(res => res.json()).then(data => {
    const container = document.getElementById("container");
    data.forEach((element, index) => {
        container.innerHTML += `
            <div class="grid-item-content_global">
                <div class="content_item">
                    <img src="${element.icon}" alt="" />
                    <span style="color:var(${colors[index]})" class="content_title">${element.category}</span>
                </div>
                <div class="content_porcent">
                    <h4 class="content">
                    <span class="content_number">${element.score}</span> / 100
                    </h4>
                </div>
            </div>`
    });
}).catch(error => {
    console.log("Error al cargar el archivo", error)
})
