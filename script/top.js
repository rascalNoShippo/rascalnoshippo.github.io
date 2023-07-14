import { FIXED_SENTENCE, DATA } from "../data/contents.js";
import { createHeaderFooter } from "./headerFooter.js";
import { startArrowAction } from "./arrow.js";

createHeaderFooter();
startArrowAction();

DATA.contents.forEach((e, i) => {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const td = document.createElement("td");
  const a = document.createElement("a");
  const number = i + 1;
  th.innerText = `${number}.`;
  a.setAttribute("href", `./docs/content.html?c=${number}`);
  a.classList.add("link");
  a.innerText = `${e.title}（${e.prefecture}）`;
  td.appendChild(a);
  tr.appendChild(th);
  tr.appendChild(td);
  document.getElementById("contentsList")?.appendChild(tr);
});

document.title = FIXED_SENTENCE.pageTitle;
document.getElementById("h1Title")?.insertAdjacentText("afterbegin", FIXED_SENTENCE.topPageH1);
document.getElementById("topDescription")?.insertAdjacentHTML(
  "beforeend", 
  FIXED_SENTENCE.topDescription.innerHTML
);
