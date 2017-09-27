const submit = document.querySelector(".advancedSubmit");
const inaltime = document.querySelector(".inaltime");
const latime = document.querySelector(".latime");
const raza = document.querySelector(".raza");
const sezon = document.querySelector(".sezon");
const output = document.querySelector("#productList");
const reset = document.querySelector(".reset");

produse.forEach(produs => {
  output.innerHTML += `
      <li class="products" >
        <div class="col-md-3 ">
          <div class="product">
             <img class="zoom" src="${produs.image}" alt=""/>
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
             <img class="zoom" src="${res.image}" alt=""/>
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
      reset.style.display = "initial";
      output.innerHTML = `
      <div class="alert alert-danger" role="alert" style="margin-top:30px;">
      <strong>Nu am gasit niciun model corespunzator! <br>
      </div>



      `
    }

}

$(".zoom").elevateZoom({
  zoomType				: "lens",
  lensShape : "round",
  lensSize    : 200
});
submit.addEventListener("click", getValues)
