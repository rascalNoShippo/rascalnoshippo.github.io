export class Content {
  /**
   * @param {string} title - タイトル
   * @param {string} titleKana - タイトルのふりがな
   * @param {string} titleEn - タイトルの英語表記
   * @param {string} prefecture - 都道府県
   * @param {string} description - 説明文
   * @param {Array<string>} pictureFileNames - 画像ファイル名の配列
   */
  constructor(
    title,
    titleKana,
    titleEn,
    prefecture,
    description,
    pictureFileNames,
    directoryOfPictures = Content.#path
  ) {
    this.title = title;
    this.titleKana = titleKana;
    this.titleEn = titleEn;
    this.prefecture = prefecture;
    this.description = description;
    this.pictureFileNames = pictureFileNames;
    this.directoryOfPictures = directoryOfPictures;
  }
  
  static #path = "/pict/";
  
  /**
   * 画像のパスを取得する
   * @returns {Array<string>} - 画像のパス
   */
  picturePaths() {
    return this.pictureFileNames.map(e => Content.#path + e);
  }
}