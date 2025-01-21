const appId = "n4GHrkdujHmdEwHJt1TJGcpYYVKUbKLO1MaXtxy2"; // Substitua pelo seu Application ID do Back4App
const apiKey = "FBqmh3s3YAlKB9Sawa9E2fdh0jJswN8mgY2rkWMgQUI"; // Substitua pela sua REST API Key do Back4App
const endpoint = "https://parseapi.back4app.com/classes/ConsumptionData";

async function fetchData() {
  const response = await fetch(endpoint, {
    headers: {
      "X-Parse-Application-Id": appId,
      "X-Parse-REST-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  displayData(data.results);
}

function displayData(data) {
  const tableBody = document.getElementById("data-table");
  data.forEach((item) => {
    const row = document.createElement("tr");
    const dataHora = new Date(item.DataHora.iso);
    row.innerHTML = `
            <td>${dataHora.toLocaleString()}</td>
            <td>${item.flow_rate}</td>
            <td>${item.liters_consumed}</td>
        `;
    tableBody.appendChild(row);
  });
}

fetchData();
