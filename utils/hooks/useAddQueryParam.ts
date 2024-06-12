"use client";

import { useRouter } from "next/navigation";

const useAddQueryParam = () => {
  const router = useRouter();

  const addQueryParam = (key: string, value: string) => {
    const currentQuery = new URLSearchParams(window.location.search);
    currentQuery.set(key, value);
    const newUrl = `${window.location.pathname}?${currentQuery.toString()}`;
    router.push(newUrl);
  };

  return addQueryParam;
};

export default useAddQueryParam;
