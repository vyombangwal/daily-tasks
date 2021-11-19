import React from "react";
import Card from "./Card";
import "./Card.css";
import Uncheck from "./Svg/uncheck.svg";
import Check from "./Svg/checked.svg";

const TaskItem = (props) => {
  return (
    <Card className="bg-white p-4 text-gray-400">
      <div className="grid grid-rows grid-cols-4">
        <div className="row-span-2 col-span-3 p-2 text-left">
          <div className="text-2xl ">{props.value.name}</div>
          <div>{props.value.description}</div>
        </div>
        <div className="col-span-1 p-2 ">
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

export default TaskItem;
