const parseDateToYearMonth = (parse) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const getYear = parse.split('/')[2];
  const getMonth = parse.split('/')[1];

  const year = currentYear - getYear;
  const month = currentMonth - getMonth + 1;

  return `${year} ano(s) e ${month} mes(es)`;
};

export default parseDateToYearMonth;
