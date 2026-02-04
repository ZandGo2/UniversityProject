"use client";

import { useEffect, useState } from "react";
import { DatePicker } from "zaman";
import styles from "@/components/element/InputBirthdate.module.css";
import "@/app/globals.css";
import { DateToIso } from "@/utils/convertDate";

function InputBirthdate({ onChange, value }) {
  const [inputDate, setInputDate] = useState("");

  useEffect(() => {
    const date = value ? converDateToFarsiFromat(value) : "";
    setInputDate(date);
  }, [value]);

  const converDateToFarsiFromat = (date) => {
    const farsiDatefromat = new Date(date).toLocaleDateString("fa-IR");
    return farsiDatefromat;
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        placeholder="تاریخ تولد"
        readOnly
        className={styles.dateInput}
        value={inputDate}
      />
      <DatePicker
        onChange={(e) => onChange(DateToIso(e.value))}
        value={value}
        round="x2"
        accentColor="#28A745"
        inputAttributes={{
          style: {
            position: "absolute",
            top: "0",
            right: "0",
            width: "100%",
            opacity: "0",
          },
        }}
        locale="fa"
      />
      <img
        src="/svg-files/calendar-profile.svg"
        className={styles.calendarIcon}
        alt="calendar-profile"
      />
    </div>
  );
}

export default InputBirthdate;
