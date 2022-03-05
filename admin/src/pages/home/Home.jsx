import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg.jsx/WidgetLg";


//MUI
import CloseIcon from "@mui/icons-material/Close";
import "react-toastify/dist/ReactToastify.css";

import "./home.css";


export default function Home() {
  const [userStats, setUsersStats] = useState([]);
  const [messageHome, setMessageHome] = useState(true);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data
          .sort(function (a, b) {
            return a._id - b._id;
          })
          .map((item) => {
            setUsersStats((prev) => [
              ...prev,
              { name: months[item._id - 1], "Active User": item.total },
            ]);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, []);

  useEffect(() => {
    console.log(userStats);
  }, [userStats]);


  return (

    <div className="home">
      {messageHome ? (
        <div className="messageHome">
          <div className="closeWrapperHome">
            <CloseIcon
              className="closeHome"
              onClick={() => setMessageHome((messageHome) => !messageHome)}
            />
          </div>
          <h1>
            נתונים על משתמשים ונתונים אחרים טושטשו <br />
            ואף מצגים מידע לא אמיתי לאור האבטחה <br />
            <br />
            אך נתונים על המוצרים או ההכנסה הם נכונים בזמן אמת
            <br /> (כל מה שנראה בעין)
          </h1>
          <button
            onClick={() => setMessageHome((messageHome) => !messageHome)}
            className="messageHomeButton"
          >
            הבנתי
          </button>
        </div>
      ) : null}
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetLg />
        <WidgetSm />
      </div>
    </div>
  );
}
