// ------------------------------------------------------------------------------
// name: locale
// author: mudas( mschool.tech )
// created: 2020/3/19 16:04
// ------------------------------------------------------------------------------

export default class Locale {

  // --------------------------------------------------------------------------
  //
  // Class properties
  //
  // --------------------------------------------------------------------------

  // 当前语言包
  map = Object.create(null);

  // --------------------------------------------------------------------------
  //
  // Class methods
  //
  // --------------------------------------------------------------------------

  setLanguages(languages) {
    const keys = Object.keys(languages);

    this.languages = languages;
    this.setLang(keys[0]);

    keys.forEach(lang => {
      this.map[lang] = this.languages[lang];
    });
  }

  setLang(lang) {
    if (Object.keys(this.languages).indexOf(lang) !== -1) {
      this.locale = lang;
    }
  }

  getLang() {
    return this.locale;
  }

  transform(key) {
    return this.map[this.locale][key] || key;
  }
}
