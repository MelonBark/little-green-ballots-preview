const topics = [
  { id: "housing", name: "Housing & zoning", votes: 42 },
  { id: "transit", name: "Transit frequency", votes: 35 },
  { id: "parks", name: "Parks funding", votes: 28 },
  { id: "schools", name: "School levies", votes: 21 },
  { id: "broadband", name: "Rural broadband", votes: 17 },
];

let selected = null;

function render() {
  const max = Math.max(...topics.map((t) => t.votes), 1);
  const chart = document.getElementById("chart");
  chart.innerHTML = "";
  [...topics]
    .sort((a, b) => b.votes - a.votes)
    .forEach((t) => {
      const row = document.createElement("button");
      row.type = "button";
      row.className = "bar-row" + (selected === t.id ? " active" : "");
      row.innerHTML = `<span class="bar-label">${t.name}</span>
        <span class="bar-track"><span class="bar-fill" style="width:${(t.votes / max) * 100}%"></span></span>
        <span class="bar-value">${t.votes}</span>`;
      row.addEventListener("click", () => {
        selected = t.id;
        document.getElementById("vote-panel").hidden = false;
        document.getElementById("selected-topic").textContent = t.name;
        document.getElementById("receipt").textContent = "";
        render();
      });
      chart.appendChild(row);
    });
}

document.getElementById("cast").addEventListener("click", () => {
  if (!selected) return;
  const stake = Number(document.getElementById("stake").value);
  const t = topics.find((x) => x.id === selected);
  t.votes += stake; // mock: $1 ~= 1 vote weight
  document.getElementById("receipt").textContent =
    `Mock only: recorded +${stake} weight for “${t.name}”. No card charged.`;
  render();
});

render();
