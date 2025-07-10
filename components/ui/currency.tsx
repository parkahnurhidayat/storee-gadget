"use client";
import { useEffect, useState } from "react";

interface CurrencyProps {
  values?: string | number;
}

const formatter = new Intl.NumberFormat("id-ID", {
  minimumFractionDigits: 0,
  style: "currency",
  currency: "IDR",
});

const Currency: React.FC<CurrencyProps> = ({ values }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="font-semibold">{formatter.format(Number(values))}</div>
  );
};

export default Currency;
