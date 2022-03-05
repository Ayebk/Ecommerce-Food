import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

//TIMEAGO
import { format } from "timeago.js";


import "./widgetLg.css";

export default function WidgetLg() {


  /**
   * Last transactions
   */

  const [orders, setOrders] = useState();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle"> Lastest Transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          {orders
            ? orders.map((order) => (
                <tr className="widgetLgTr" key={order._id}>
                  <th className="widgetLgUser">
                    <img
                      src="https://cdn.pixabay.com/photo/2014/10/30/14/14/credit-cards-509330_1280.png"
                      alt=""
                      className="widgetLgImg"
                    />
                    <span className="widgetLgName">{order.userId}</span>
                  </th>
                  <th className="widgetLgTh">{format(order.createdAt)}</th>
                  <th className="widgetLgThAmount">
                    <span style={{ color: "green" }}>₪ </span>
                    {order.amount}{" "}
                  </th>
                  <th className="widgetLgTh">
                    <Button type={order.status} />
                  </th>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}
