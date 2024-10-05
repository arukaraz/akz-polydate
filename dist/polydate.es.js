const u = {
  en: {
    language: "english",
    months: [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december"
    ]
  },
  de: {
    language: "german",
    months: [
      "januar",
      "februar",
      "märz",
      "april",
      "mai",
      "juni",
      "juli",
      "august",
      "september",
      "oktober",
      "november",
      "dezember"
    ]
  },
  es: {
    language: "spanish",
    months: [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre"
    ]
  },
  fr: {
    language: "french",
    months: [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre"
    ]
  },
  it: {
    language: "italian",
    months: [
      "gennaio",
      "febbraio",
      "marzo",
      "aprile",
      "maggio",
      "giugno",
      "luglio",
      "agosto",
      "settembre",
      "ottobre",
      "novembre",
      "dicembre"
    ]
  },
  pt: {
    language: "portuguese",
    months: [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro"
    ]
  },
  zh: {
    language: "chinese",
    months: [
      "一月",
      // yī yuè
      "二月",
      // èr yuè
      "三月",
      // sān yuè
      "四月",
      // sì yuè
      "五月",
      // wǔ yuè
      "六月",
      // liù yuè
      "七月",
      // qī yuè
      "八月",
      // bā yuè
      "九月",
      // jiǔ yuè
      "十月",
      // shí yuè
      "十一月",
      // shí yī yuè
      "十二月"
      // shí èr yuè
    ]
  },
  ar: {
    language: "arabic",
    months: [
      "يناير",
      // yanāyir
      "فبراير",
      // fibrāyir
      "مارس",
      // māris
      "أبريل",
      // abrīl
      "مايو",
      // māyū
      "يونيو",
      // yūniyū
      "يوليو",
      // yūliyū
      "أغسطس",
      // ʾuġusṭus
      "سبتمبر",
      // sibtambar
      "أكتوبر",
      // uktūbar
      "نوفمبر",
      // nūfambar
      "ديسمبر"
      // disambar
    ]
  },
  ru: {
    language: "russian",
    months: [
      "январь",
      // yanvar'
      "февраль",
      // fevral'
      "март",
      // mart
      "апрель",
      // aprel'
      "май",
      // may
      "июнь",
      // iyun'
      "июль",
      // iyul'
      "август",
      // avgust
      "сентябрь",
      // sentyabr'
      "октябрь",
      // oktyabr'
      "ноябрь",
      // noyabr'
      "декабрь"
      // dekabr'
    ]
  }
};
function s(a) {
  const [e, n, r] = a.split(" ");
  return [
    e.replace(/\D/g, ""),
    // Remove non-digit characters from the day
    n.toLowerCase(),
    // Convert month to lowercase
    r.replace(/\D/g, "")
    // Remove non-digit characters from the year
  ];
}
function g(a, e, n) {
  var i, m;
  const r = ((i = u[e]) == null ? void 0 : i.months) || [], t = ((m = u[n]) == null ? void 0 : m.months) || [], o = r.indexOf(a);
  return o === -1 ? "invalid month" : t[o] || "invalid month";
}
function l(a, e) {
  if (e = {
    to: "en",
    // Default target language
    ...e
  }, !e.is)
    return "invalid option";
  try {
    let [n, r, t] = s(a);
    return !n || !t || (r = g(r, e.is, e.format === "isoString" ? "en" : e.to), r === "invalid month") ? "invalid date" : e.format === "isoString" ? (/* @__PURE__ */ new Date(`${n} ${r} ${t}`)).toISOString() : `${n} ${r} ${t}`;
  } catch {
    return "invalid date";
  }
}
export {
  l as default
};
