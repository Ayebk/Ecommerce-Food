
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

//MUI
import { Visibility } from "@mui/icons-material";

import "./widgetSm.css";

export default function WidgetSm() {
  const [users, setUsers] = useState();

  /**
   * User List
   */

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle"> New Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src={
              "https://res.cloudinary.com/dzy0uevma/image/upload/v1645617415/e-commerce/lq5l1h0gr4vnbid8nc7a.webp"
            }
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Avi</span>
            <span className="widgetSmUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src={
              "https://res.cloudinary.com/dzy0uevma/image/upload/v1645617415/e-commerce/lq5l1h0gr4vnbid8nc7a.webp"
            }
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Shlomy</span>
            <span className="widgetSmUserTitle"> customer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src={
              "https://res.cloudinary.com/dzy0uevma/image/upload/v1645617415/e-commerce/lq5l1h0gr4vnbid8nc7a.webp"
            }
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Soso</span>
            <span className="widgetSmUserTitle"> customer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src={
              "https://res.cloudinary.com/dzy0uevma/image/upload/v1645617415/e-commerce/lq5l1h0gr4vnbid8nc7a.webp"
            }
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Beky</span>
            <span className="widgetSmUserTitle"> customer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src={
              "https://res.cloudinary.com/dzy0uevma/image/upload/v1645617415/e-commerce/lq5l1h0gr4vnbid8nc7a.webp"
            }
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jhovany</span>
            <span className="widgetSmUserTitle"> customer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
