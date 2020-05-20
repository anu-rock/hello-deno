/**
 * Returns given date in "DD MMMM" format. Eg. "01 April".
 */
export function getDateString(date: Date): string {
  const datePart = getDoubleDigitDate(date.getDate());
  const monthPart = getMonthName(date.getMonth());
  return `${datePart} ${monthPart}`;
}

/**
 * Returns the double-digit representation of the given date.
 * Eg. 1 becomes "01" but 21 stays "21".
 */
function getDoubleDigitDate(date: number): string {
  let dateAsString = date.toString();

  if (dateAsString.length < 2) {
    dateAsString = `0${dateAsString}`;
  }

  return dateAsString;
}

/**
 * Returns the English month name for the given 0-indexed month number.
 * Eg. 3 becomes "April" and 11 becomes "December".
 */
function getMonthName(monNum: number): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[monNum];
}
