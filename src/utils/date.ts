/**
 * YYYY.MM.DD 形式の日付フォーマットに変換する
 *
 * @param {string} dateString 
 * @returns {string}
 */
export const convertPeriodSeparateDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (isValidDate(date)) {
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
  }
  return '';
}

/**
 * 正しい Date 型か？
 *
 * @param {Date} date 
 * @returns {boolean}
 */
export const isValidDate = (date: Date): boolean =>
  toString.call(date) === '[object Date]' && (date as Date).toString() !== 'Invalid Date';
