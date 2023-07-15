import { DATA } from "../data/data.js";
import { createHeaderFooter } from "./headerFooter.js";
import { getPathParam } from "./getPathParam.js";

createHeaderFooter();

const number = getPathParam("c");

number && (() => {
  const content = DATA.contents[+number - 1];
    
  if (!content) {
    const message = "ページが見つかりません";
    document.getElementById("title")?.insertAdjacentText("afterbegin", message);
    document.title = message;
    return;
  }

  document.title = `${number}. ${content.titleEn}`;
  document.getElementById("title")?.insertAdjacentText("afterbegin", `${content.title}（${content.prefecture}）`);
  document.getElementById("titleKana")?.insertAdjacentText("beforeend", content.titleKana);
  document.getElementById("description")?.insertAdjacentText("beforeend", content.description);
  const imgTags = content.pictureFiles.map(path => {
    const img = document.createElement("img");
    img.setAttribute("src", `../${DATA.directoryOfPictures}${path}`);
    img.addEventListener("load", function() {
      this.height *= 0.5;
    });
    return img;
  });
  const pictureFilesNumber = imgTags.length;
  document.getElementById("mainPicture")?.appendChild(imgTags[0]);
  const subPictures = document.getElementById("subPictures");
  for (let i = 1; i < pictureFilesNumber; i++) {
    const div = document.createElement("div");
    div.classList.add("subPicture");
    const img = imgTags[i];
    div.appendChild(img);
    subPictures?.appendChild(div);
  }
})();

(() => {
  const headMenu = document.getElementById("head_menu");
  const contents = DATA.contents;

  if (number && +number < contents.length) {
    const linkToNext = document.createElement("a");
    linkToNext.classList.add("menulink");
    linkToNext.insertAdjacentText("beforeend", `>>「${contents[+number].title}」へ`);
    linkToNext.setAttribute("href", `content.html?c=${+number + 1}`);
    headMenu?.appendChild(linkToNext);
  }

  const linkToTop = document.createElement("a");
  linkToTop.classList.add("menulink");
  linkToTop.insertAdjacentText("beforeend", "トップページ");
  linkToTop.setAttribute("href", "../index.html");
  headMenu?.appendChild(linkToTop);

  const selector = document.createElement("select");
  contents.forEach((e, i) => {
    const option = document.createElement("option");
    option.setAttribute("value", `${i + 1}`);
    if (number && +number === i + 1) option.setAttribute("selected", "");
    option.insertAdjacentText("beforeend", `${i + 1}. ${e.title}（${e.prefecture}）`);
    selector.appendChild(option);
  });
  selector.addEventListener("change", function() {
    const value = this.value;
    location.search = location.search.replace(/c=\d+/, `c=${value}`);
  });
  headMenu?.appendChild(selector);
})();