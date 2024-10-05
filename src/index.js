"use strict";

import { MONTHS } from "./constants.js";

/**
 * Splits the date string into day, month, and year components.
 * @param {string} text - The date string to split.
 * @returns {[string, string, string]} - The day, month, and year.
 */
function splitDate(text) {
  const [day, month, year] = text.split(" ");
  return [
    day.replace(/\D/g, ""), // Remove non-digit characters from the day
    month.toLowerCase(),    // Convert month to lowercase
    year.replace(/\D/g, ""),// Remove non-digit characters from the year
  ];
}

/**
 * Converts a month from one language to another.
 * @param {string} month - The month string in the original language.
 * @param {string} XLang - The source language.
 * @param {string} YLang - The target language.
 * @returns {string} - The translated month in the target language.
 */
function monthFromXLangToYLang(month, XLang, YLang) {
  const Xmonths = MONTHS[XLang]?.months || [];
  const Ymonths = MONTHS[YLang]?.months || [];
  const Xindex = Xmonths.indexOf(month);
  
  if (Xindex === -1) return "invalid month"; // Handle invalid month

  return Ymonths[Xindex] || "invalid month";  // Handle missing translation
}

/**
 * Translates the date from one language to another and formats it.
 * @param {string} text - The date string to translate.
 * @param {object} options - Translation options.
 * @returns {string} - The translated date string or ISO string.
 */
export default function polydate(text, options) {
  options = {
    to: "en",  // Default target language
    ...options,
  };

  if (!options.is) return "invalid option";  // Ensure source language is provided

  try {
    let [day, month, year] = splitDate(text);

    if (!day || !year) return "invalid date";  // Validate parsed date components

    // Convert month from source to target language
    month = monthFromXLangToYLang(month, options.is, options.format === "isoString" ? "en" : options.to);
    if (month === "invalid month") return "invalid date";

    // Return ISO string if specified
    if (options.format === "isoString") {
      return new Date(`${day} ${month} ${year}`).toISOString();
    }

    return `${day} ${month} ${year}`;  // Return translated date
  } catch (error) {
    return "invalid date";
  }
}
