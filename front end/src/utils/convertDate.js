import { e2pFormat } from "./helper";

const { toJalaali } = require("jalaali-js");

const getPeriodTour = (date1, date2) => {
  const ob1 = new Date(date1);
  const ob2 = new Date(date2);

  const diffirence = Math.abs(ob2 - ob1);

  const diffInDays = diffirence / (1000 * 60 * 60 * 24);
  return diffInDays;
};
const getTourStatus = (endTourData) => {
  const todayDate = new Date(Date.now());
  const endDate = new Date(endTourData);
  const diffirence = todayDate - endDate;
  if (diffirence > 0) {
    return false;
  }
  if (diffirence <= 0) {
    return true;
  }
};
const convertMiladiToJalali = (isoDate) => {
  const date = new Date(isoDate);
  const { jy, jm, jd } = toJalaali(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  );

  const weekDays = [
    "شنبه",
    "جمعه",
    "پنج شنبه",
    "چهارشنبه",
    "سه شنبه",
    "دوشنبه",
    "یکشنبه",
  ];
  const weekDay = weekDays[date.getDay()];

  const months = [
    "اسفند",
    "بهمن",
    "دی",
    "آذر",
    "آبان",
    "مهر",
    "شهریور",
    "مرداد",
    "تیر",
    "خرداد",
    "اردیبهشت",
    "فروردین",
  ];
  const monthName = months[jm - 1];
  const highFormat = `${weekDay} ${e2pFormat(jd)} ${monthName} ${e2pFormat(jy)}`;
  const middleFormat = `${e2pFormat(jd)} ${monthName} ${e2pFormat(jy)}`;

  return { highFormat, middleFormat, monthName };
};
const DateToIso = (farsiDate) => new Date(farsiDate).toISOString();

export { getPeriodTour, convertMiladiToJalali, getTourStatus, DateToIso };
