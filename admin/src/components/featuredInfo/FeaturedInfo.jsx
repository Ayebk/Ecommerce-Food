import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

import "./featuredInfo.css";


export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
  const [incomeSales, setIncomeSales] = useState([]);
  const [percSales, setPercSales] = useState(0);


/**
 * Revanue - calculation growth percentage for last month
 */

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/revanue");
        console.log(res.data);
        setIncome(res.data.find((p) => p._id == "2"));
        setPerc(
          (res.data.find((p) => p._id == "2").total * 100) /
            res.data.find((p) => p._id == "1").total
        );
      } catch (err) {
        console.log(err);
      }
    };
    getIncome();
  }, []);


/**
 * Sales - calculation growth percentage for last month
 */


  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/incomeApproved");
        console.log(res.data);
        setIncomeSales(res.data.find((p) => p._id == "2"));
        setPercSales(
          (res.data.find((p) => p._id == "2").total * 100) /
            res.data.find((p) => p._id == "1").total
        );
      } catch (err) {
        console.log(err);
      }
    };
    getIncome();
  }, []);


  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₪{income?.total}</span>
          {perc < 0 ? (
            <span className="featuredMoneyRate">
              %{Math.floor(perc)}{" "}
              <ArrowDownward className="featuredIcon negative" />
            </span>
          ) : (
            <span className="featuredMoneyRate">
              %{Math.floor(perc)} <ArrowUpward className="featuredIcon " />
            </span>
          )}
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoneyBlur">₪xxxx</span>
          {percSales < 0 ? (
            <span className="featuredMoneyRateBlur">
              %{Math.floor(percSales)}{" "}
              <ArrowDownward className="featuredIcon negative" />
            </span>
          ) : (
            <span className="featuredMoneyRateBlur">
              %{Math.floor(percSales)} <ArrowUpward className="featuredIcon " />
            </span>
          )}
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoneyBlur">₪xxxx</span>
          <span className="featuredMoneyRateBlur">
            +2.5 <ArrowUpward className="featuredIcon " />
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
    </div>
  );
}
