import React from "react";
import Card from "./Card";
import "./Card.css";
import Uncheck from "./Svg/uncheck.svg";
import Check from "./Svg/checked.svg";

const Tasklist = (props) => {
  return (
    <Card className="bg-white p-4 text-gray-400">
      <div>
        <div className="inline-block text-left p-2">
          <div className="text-2xl">{props.value.name}</div>
          <div>{props.value.description}</div>
        </div>
        <div className="inline-block">
          {props.value.isCompleted ? (
            <button>
              <img src={Check} alt="check" />
            </button>
          ) : (
            <button>
              <img src={Uncheck} alt="Uncheck" />
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Tasklist;
