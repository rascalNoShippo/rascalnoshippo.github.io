import { AUTHOR } from "./Author.js";
import { Content } from "./ContentClass.js";

/** @type {{pageTitle: string, headerTop: string, headerBottom: string, topPageH1: string, topDescription: HTMLParagraphElement}} */
const FIXED_SENTENCE = (() => {
  const topDescription = document.createElement("p");
  topDescription.insertAdjacentHTML("beforeend", `
      このホームページでは，日本各地の様々な観光名所の中から一生に一度は行っておきたい，いわゆる“<b>隠れた名所</b>”を選んで10か所紹介していきます。
  `);
  return {
    pageTitle: "ホームページ",
    headerTop: "Sightseeing Attraction in Japan",
    headerBottom: `${AUTHOR.name}のホームページ制作`,
    topPageH1: "日本全国の観光名所",
    topDescription: topDescription
  };
})();


/** @type {{fixedSentence: typeof FIXED_SENTENCE, contents: Array<Content>}} */
export const DATA = {
  fixedSentence: FIXED_SENTENCE,
  contents: [
    new Content(
      "祇王寺",
      "ぎおうじ",
      "Giōji Temple",
      "京都府",
      "平清盛の寵愛を受けた白拍子の祇王が，清盛の愛を失ったのち，妹の祇女，母とともに剃髪し隠棲した寺。深い緑に囲まれた境内に，ひっそりと茅葺きの草庵がたたずむ。 ",
      [
        "1-1.jpg",
        "1-2.jpg",
        "1-3.jpg",
        "1-4.jpg"
      ]
    ),
    new Content(
      "上高地",
      "かみこうち",
      "Kamikōchi",
      "長野県",
      "日本の代表的山岳景勝地として，多くの人が訪れる上高地。梓川沿いに遊歩道が整備され，大正池，河童橋，明神池とのんびり散策が楽しめる。とくに紅葉の時期が素晴らしい。",
      [
        "2-1.jpg",
        "2-2.jpg",
        "2-3.jpg",
        "2-4.jpg"
      ]
    ),
    new Content(
      "泉涌寺",
      "せんにゅうじ",
      "Sennyūji Temple",
      "京都府",
      "空海が庵を結んだことに始まる真言宗泉涌寺派の総本山。皇室の菩提寺として知られ「御寺」の別名で呼ばれる。広大な寺域には多くの御陵を有する。",
      [
        "3-1.jpg",
        "3-2.jpg",
        "3-3.jpg",
        "3-4.jpg"
      ]
    ),
    new Content(
      "三春滝桜",
      "みはるたきざくら",
      "Miharu Takizakura",
      "福島県",
      "樹齢1000年を超える紅枝垂桜。枝の広がりは東西25m，南北20m。日本三大桜の1つで，国の天然記念物。まわりに遊歩道があり，いろいろな角度から滝桜を眺めることができる。",
      [
        "4-1.jpg",
        "4-2.jpg",
        "4-3.jpg",
        "4-4.jpg"
      ]
    ),
    new Content(
      "大河内山荘庭園",
      "おおこうちさんそうていえん",
      "Ōkōchi Sansō Garden",
      "京都府",
      "時代劇で人気を集めた名優大河内伝次郎の元別荘。30有余年をかけて造園した約2万平方メートルの見事な回遊式庭園である。",
      [
        "5-1.jpg",
        "5-2.jpg",
        "5-3.jpg",
        "5-4.jpg"
      ]
    ),
    new Content(
      "東京国立博物館",
      "とうきょうこくりつはくぶつかん",
      "Tokyo National Museum",
      "東京都",
      "明治5（1872）年に創立された東京国立博物館。日本を中心にアジアの各地から集められたさまざまな歴史資料，美術品や考古資料など，約11万件以上が収蔵されている。 ",
      [
        "6-1.jpg",
        "6-2.jpg",
        "6-3.jpg",
        "6-4.jpg"
      ]
    ),
    new Content(
      "北西の丘展望公園",
      "ほくせいのおかてんぼうこうえん",
      "Hokusei-no-oka Observatory Park",
      "北海道",
      "広さ5ヘクタールの展望公園。園内にはラベンダーやヒマワリなどが咲く。ピラミッド形の展望台からは美瑛の丘や大雪山連峰を一望できる。観光案内所も併設している。",
      [
        "7-1.jpg",
        "7-2.jpg",
        "7-3.jpg",
        "7-4.jpg"
      ]
    ),
    new Content(
      "称名滝",
      "しょうみょうだき",
      "Shōmyō Falls",
      "富山県",
      "日本の滝百選に選定。落差約350mは日本最大級を誇る。4～6月の雪解け時には，隣にハンノキ滝という滝が現れる。紅葉の時期も見頃。晩秋には雪も混じり幻想的な光景に。",
      [
        "8-1.jpg",
        "8-2.jpg",
        "8-3.jpg",
        "8-4.jpg"
      ]
    ),
    new Content(
      "御船山楽園",
      "みふねやまらくえん",
      "Mifuneyama Rakuen",
      "佐賀県",
      "御船山の南西麓，旧鍋島家別荘跡にある庭園。御船山の断崖を背景に四季折々の花が見られる。園内は桜5000本やツツジ20万本，樹齢170年の大フジを植栽している。",
      [
        "9-1.jpg",
        "9-2.jpg",
        "9-3.jpg",
        "9-4.jpg"
      ]
    ),
    new Content(
      "香嵐渓",
      "こうらんけい",
      "Kōrankei",
      "愛知県",
      "香嵐渓の飯盛山は約4000本ものカエデで覆われ，秋には山の斜面や巴川の水面を紅一色に染め上げる。香積寺11世の三栄和尚が，般若心経を唱えながら1本ずつ植えたのが始まりと言われる。",
      [
        "10-1.jpg",
        "10-2.jpg",
        "10-3.jpg",
        "10-4.jpg"
      ]
    )
  ]
};