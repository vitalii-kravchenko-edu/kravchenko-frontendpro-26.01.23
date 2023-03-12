// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

const myTable = document.getElementById("myTable");

for (let i = 1; i <= 10; i++) {
  const row = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    const cell = document.createElement("td");
    const cellData = document.createTextNode((i - 1) * 10 + j);
    cell.appendChild(cellData);
    row.appendChild(cell);
  }
  myTable.appendChild(row);
}

