import { DATA } from "../data/Data.js";
import { getPathParam } from "./getPathParam.js";
import { createHeaderFooter } from "./headerFooter.js";


/** クエリ文字列(1オリジン) */
const number = getPathParam("c");

number && (() => {
  const content = DATA.contents[+number - 1];
    
  // ページが見つからない場合 早期リターン
  if (!content) {
    const message = "ページが見つかりません";
    document.getElementById("title")?.insertAdjacentText("afterbegin", message);
    document.title = message;
    return;
  }

  // タイトル、説明文を挿入
  document.title = `${number}. ${content.titleEn}`;
  document.getElementById("title")?.insertAdjacentText("afterbegin", `${content.title}（${content.prefecture}）`);
  document.getElementById("titleKana")?.insertAdjacentText("beforeend", content.titleKana);
  document.getElementById("description")?.insertAdjacentText("beforeend", content.description);
  
  // 画像を挿入
  const imgTags = content.picturePaths().map(path => {
    const img = document.createElement("img");
    img.setAttribute("src", path);
    img.addEventListener("load", function() {
      this.height *= 0.5;
    });
    return img;
  });
  document.getElementById("mainPicture")?.appendChild(imgTags[0]);
  const subPictures = document.getElementById("subPictures");
  for (let i = 1; i < imgTags.length; i++) {
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

  // 次頁へのリンクを作成(最終ページの場合は作成しない)
  if (number && contents[+number]) {
    const linkToNext = document.createElement("a");
    linkToNext.classList.add("menulink");
    linkToNext.insertAdjacentText("beforeend", `>>「${contents[+number].title}」へ`);
    linkToNext.setAttribute("href", `content.html?c=${+number + 1}`);
    headMenu?.appendChild(linkToNext);
  }

  // トップページへのリンクを作成
  const linkToTop = document.createElement("a");
  linkToTop.classList.add("menulink");
  linkToTop.insertAdjacentText("beforeend", "トップページ");
  linkToTop.setAttribute("href", "/index.html");
  headMenu?.appendChild(linkToTop);

  // プルダウンメニューを作成
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