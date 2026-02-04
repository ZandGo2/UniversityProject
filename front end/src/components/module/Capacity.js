"use client";
import { useTourDetailsData } from "@/services/queries";
import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";
import styles from "@/components/module/Capacity.module.css";
function Capacity({ tourId }) {
  const { data, isLoading } = useTourDetailsData(tourId);
  const tourData = data?.data || "";

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <Image src="/images/seat8.png" width={20} height={20} alt="icon" />
        <p>ظرفیت تور</p>
      </div>
      {!isLoading ? (
        <>
          {tourData.availableSeats > 0 ? (
            <span className={styles.available}>
              {tourData.availableSeats} جایگاه خالی
            </span>
          ) : (
            <span className={styles.notAvailable}>اتمام ظرفیت!</span>
          )}
        </>
      ) : (
        <ThreeDots
          color="#28A745"
          height="60"
          width="60"
          wrapperStyle={{ marginRight: "10px" }}
        />
      )}
    </div>
  );
}

export default Capacity;
