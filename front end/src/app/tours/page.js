"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Tours() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return null;
}

export default Tours;
