import { ADATLISTA } from "./adat.js";
import { Rendezes } from "./rendezes.js";

$(document).ready(function () {
  init();
});

function init() {
  const articleElem = $("article");

  // Call the generateTable function instead of osszeAllit
  articleElem.html(generateTable(ADATLISTA, ["név", "fajta", "kor"], "remove-item"));

  // Add event listener for sorting buttons
  $("#knev, #kfajta, #kkor").on("click", function (event) { // Add "event" parameter
    const id = $(event.target).attr("id");
    Rendezes(ADATLISTA, id.slice(1));
    init();
  });

  // Add event listener for remove buttons
  articleElem.on("click", ".remove-item", function () {
    const index = $(this).closest("tr").index() - 1;
    console.log(index);
    removeItem(ADATLISTA, index);
  });

  $("#searchBtn").on("click", function () {
    const nev = $("#nev1").val().toLowerCase();
    const fajta = $("#fajta").val().toLowerCase();
    const kor = $("#kor").val();

    const filteredData = ADATLISTA.filter(function (item) {
      if (nev && item.nev.toLowerCase().indexOf(nev) === -1) {
        return false;
      }
      if (fajta && item.fajta.toLowerCase().indexOf(fajta) === -1) {
        return false;
      }
      if (kor && item.kor != kor) {
        return false;
      }
      return true;
    });

    // Call the generateTable function instead of osszeAllit
    articleElem.html(generateTable(filteredData, ["név", "fajta", "kor"], "remove-item"));
  });
}

// Create a new reusable function called generateTable
function generateTable(data, columnNames, removeClass) {
  let txt = "";

  txt += `<table class="table table-striped">`;

  // Create the table header row dynamically based on the columnNames array
  txt += `<tr class="table-dark">`;
  for (let i = 0; i < columnNames.length; i++) {
    txt += `<th id="k${columnNames[i]}">${columnNames[i]}</th>`;
  }
  txt += `<th>remove</th>`;
  txt += `</tr>`;

  for (let index = 0; index < data.length; index++) {
    txt += `<tr>`;
    for (const key in data[index]) {
      txt += `<td>${data[index][key]}</td>`;
    }
    txt += `<td><button class="${removeClass}"><i class="fas fa-times"></i></button></td>`;
    txt += `</tr>`;
  }
  
  // Return the table HTML
  txt += `</table>`;
  return txt;
}

// Add missing functions

function removeItem(data, index) {
  data.splice(index, 1);
  init();
}
