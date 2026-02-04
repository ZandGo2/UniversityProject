"use client";

import { useEffect, useRef, useState } from "react";
import Close from "@/components/icons/Close";
import styles from "@/components/element/CustomSelection.module.css";

function CustomSelection({
  options,
  selectionLabel,
  placeholderIcon,
  setSearchTour,
  type,
}) {
  const [select, setSelect] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const listRef = useRef(null);

  useEffect(() => {
    if (type === "origin") {
      const value = select.value || "";
      setSearchTour((searchTour) => ({ ...searchTour, origin: value }));
    } else if (type === "destination") {
      const value = select.value || "";
      setSearchTour((searchTour) => ({ ...searchTour, destination: value }));
    }
  }, [select]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const optionHandler = (option, index) => {
    setSelect(option);
    setIsOpen(false);
    setActive(index);
  };
  const closeHandler = () => {
    setSelect("");
    setActive("");
  };
  return (
    <div ref={listRef} className={styles.selectContainer}>
      {select ? (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.selectInput}
          >
            {select.icon}
            <span>{select.label}</span>
          </button>
          <span className={styles.closeBtn} onClick={closeHandler}>
            <Close />
            پاک کردن
          </span>
        </>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.selectInput}
        >
          {placeholderIcon}
          <span>{selectionLabel}</span>
        </button>
      )}
      {isOpen && (
        <ul
          style={{ position: "absolute" }}
          className={styles.optionsContainer}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => optionHandler(option, index)}
              className={`${styles.option} ${
                active == index ? styles.active : ""
              }`}
            >
              {option.icon}
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelection;
