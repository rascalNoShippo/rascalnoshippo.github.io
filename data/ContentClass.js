export class Content {
  /**
   * @param {string} title 
   * @param {string} titleKana 
   * @param {string} titleEn 
   * @param {string} prefecture 
   * @param {string} description 
   * @param {Array<string>} pictureFiles 
   */
  constructor(title, titleKana, titleEn, prefecture, description, pictureFiles) {
    this.title = title;
    this.titleKana = titleKana;
    this.titleEn = titleEn;
    this.prefecture = prefecture;
    this.description = description;
    this.pictureFiles = pictureFiles;
  }
}