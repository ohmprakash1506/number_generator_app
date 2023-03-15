let getfactBtn = document.getElementById("get_fact");
let fact = document.querySelector(".fact");
let link_api = "http://numbersapi.com/";

let fetchFact = (fact_num) => {
  let finalLink_api = link_api + fact_num;
  fetch(finalLink_api)
    .then((resp) => resp.text())
    .then((data) => {
      fact.style.display = "block";
      fact.innerHTML = `<h1>${fact_num}</h1>
    <p>${data}</p>`;
      document.querySelector(".search-container").append(fact);
    });
};
let get_fact = () => {
  let num_fact = document.getElementById("fact_num").value;
  if (num_fact) {
    if (num_fact >= 0 && num_fact <= 100) {
      fetchFact(num_fact);
    } else {
      fact.style.display = "block";
      fact.innerHTML = `<p class="msg"> Please enter a number between 0 to 100.</p>`;
    }
  } else {
    fact.style.display = "block";
    fact.innerHTML = `<p class="msg">The input field cannot be empty</p>`;
  }
};

getfactBtn.addEventListener("click", get_fact);
