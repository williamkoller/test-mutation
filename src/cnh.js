module.exports.canTakeDriverLicense = (year, major) => {
  const yearParse = parseInt(year, 10);
  const majorParse = parseInt(major, 10);

  if (Number.isNaN(yearParse) || Number.isNaN(majorParse)) {
    throw new Error('Please check your input.');
  }

  if (yearParse >= majorParse) {
    return true;
  } else {
    return false;
  }
};
