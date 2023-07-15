import { AUTHOR } from "../data/Author.js";
import { DATA } from "../data/data.js";

export const createHeaderFooter = () => {
  document.querySelector("header")?.insertAdjacentHTML("afterbegin", `
    <div class="header1"></div>
    <div class="header2"></div>
    <div class="title">
      <span class="cent_ital">${DATA.fixedSentence.headerTop}</span>
      <br>
      <div class="sub">
        <span>${DATA.fixedSentence.headerBottom}</span>
      </div>
    </div>
  `);

  document.querySelector("footer")?.insertAdjacentHTML("afterbegin", `
    <div style="padding:0.23em 5px;float:left;">
      <a href="javascript:void(0);" onclick="location.href='mailto:${AUTHOR.email}'" class="footlink">
        ${AUTHOR.name}&nbsp;&lt;${AUTHOR.email}&gt;
      </a>
    </div>
    <div style="padding:0.23em 0.23em 50px 50px;text-align:right;">
      <a href="./docs/about.html" class="footlink">このホームページについて</a>
    </div>
  `);
};
 
// ファイルが直接読まれた場合に実行する
createHeaderFooter();