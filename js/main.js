const submit = document.querySelector(".advancedSubmit");
const inaltime = document.querySelector(".inaltime");
const latime = document.querySelector(".latime");
const raza = document.querySelector(".raza");
const sezon = document.querySelector(".sezon");
const output = document.querySelector("#productList");

produse.forEach(produs => {
  output.innerHTML += `
      <li class="products" >
        <div class="col-md-3 ">
          <div class="product">
             <img src="${produs.image}" alt=""/>
             <h3>${produs.titlu}</h3>
             <div class="price">
            <p>${produs.pret}</p>
           </div>
          </div>
        </div>
      </li>

  `
})


function getValues(e) {
    e.preventDefault();

  const result =  produse.filter(function (el) {
      return el.inaltime == inaltime.value &&
             el.latime == latime.value &&
             el.diametru == raza.value &&
             el.sezon == sezon.value.toLowerCase();
    });

    if(result != ""){
    output.innerHTML = "";
    result.forEach(res => {
      output.innerHTML += `
      <li >
        <div class="col-md-3">
          <div class="product">
             <img src="${res.image}" alt=""/>
             <h3>${res.titlu}</h3>
             <div class="price">
            <p>${res.pret}</p>
           </div>
          </div>
        </div>
      </li>

      `

    })
  } else {
    output.innerHTML = "";
    output.innerHTML = `
      <p>Ne pare rau, nici un produs nu a fost gasit</p>
    `
  }

}


submit.addEventListener("click", getValues)
