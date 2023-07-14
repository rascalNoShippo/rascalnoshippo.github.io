import { DATA } from "../data/Data.js";
import { createHeaderFooter } from "./headerFooter.js";
import { startArrowAction } from "./arrow.js";

startArrowAction();

DATA.contents.forEach((e, i) => {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const td = document.createElement("td");
  const a = document.createElement("a");
  const number = i + 1;
  th.innerText = `${number}.`;
  a.setAttribute("href", `/docs/content.html?c=${number}`);
  a.classList.add("link");
  a.innerText = `${e.title}（${e.prefecture}）`;
  td.appendChild(a);
  tr.appendChild(th);
  tr.appendChild(td);
  document.getElementById("contentsList")?.appendChild(tr);
});

document.title = DATA.fixedSentence.pageTitle;
document.getElementById("h1Title")?.insertAdjacentText("afterbegin", DATA.fixedSentence.topPageH1);
document.getElementById("topDescription")?.insertAdjacentHTML(
  "beforeend", 
  DATA.fixedSentence.topDescription.innerHTML
);
