import "./App.css";
import { useEffect, useMemo } from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listspage from "./Pages/Listspage";
import { useState, useRef } from "react";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import Portfolio from "./Pages/Portfolio";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFetched = useRef(false);
  const [starId, setStarId] = useState(null);
  const portfolioData = useMemo(
    function () {
      return starId ? data.filter((obj) => obj.id === starId) : [];
    },
    [starId, data]
  );
  //const portfolioData = starId ? data.filter((obj) => obj.id === starId) : [];
  const [finalArray, setFinalArray] = useState([]);

  useEffect(
    function () {
      if (portfolioData.length > 0) {
        setFinalArray((prevArray) => [...prevArray, ...portfolioData]);
      }
    },
    [portfolioData]
  );

  useEffect(function () {
    async function cryptoData() {
      try {
        if (isFetched.current) return;
        setLoading(true);
        const dta = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`
        );
        if (!dta) throw new Error("object not generated!!");
        const resp = await dta.json();

        setData(() => resp);
        isFetched.current = true;
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    }
    cryptoData();
  }, []);

  console.log(finalArray);

  return (
    <div className="background">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route
            path="/list"
            element={
              <Listspage
                data={data}
                loading={loading}
                starId={starId}
                setStarId={setStarId}
              />
            }
          />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/page7" element={<Page7 />} />
          <Route
            path="/portfolio"
            element={<Portfolio finalArray={finalArray} starId={starId} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
