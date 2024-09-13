import { useState, useRef, useEffect } from "react";

export default function useUrl(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFetched = useRef(false);
  /*
  const portfolioData = useMemo(
    function () {
      return starId ? data.filter((obj) => obj.id === starId) : [];
    },
    [starId, data]
  );
  const [finalArray, setFinalArray] = useState([]);
  useEffect(
    function () {
      if (portfolioData.length > 0) {
        setFinalArray((prevArray) => [...prevArray, ...portfolioData]);
      }
    },
    [portfolioData]
  ); */

  useEffect(
    function () {
      async function fetchData() {
        if (isFetched.current) return;
        try {
          setLoading(true);
          const dta = await fetch(`${url}`);
          if (!dta.ok) throw new Error("Failed to load the data!");
          const resp = await dta.json();
          setData(() => resp);
          isFetched.current = true;
        } catch (error) {
          alert(error);
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

  return { data, loading };
}
