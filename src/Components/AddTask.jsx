import React from "react";
import Card from "./Card.jsx";
import PrimaryButton from "./PrimaryButton.jsx";
import Close from "./Svg/close.svg";
const AddTask = ({ trigger, setTrigger }) => {
  return (
    trigger && (
      <div>
        <Card>
          <form className="bg-white w-80 fixed border border-1 inset-x-0 mx-auto justify-center">
            <div className="pt-2 pb-4">
              <div className="flex justify-between p-2">
                <div className="">
                  <h1 className="font-bold ">Add Task</h1>
                </div>
                <div className="">
                  <button type="button" onClick={() => setTrigger(false)}>
                    <img src={Close} className="h-4" alt="Close" />
                  </button>
                </div>
              </div>
              <div className="p-2">
                <input
                  type="text"
                  placeholder="Task name"
                  className="border w-full pl-2"
                />
              </div>
              <div className="p-2">
                {" "}
                <textarea
                  type="text"
                  placeholder="Task description"
                  className="border w-full h-20 pl-2"
                ></textarea>
              </div>
              <div className="p-2">
                <PrimaryButton className="" value="Add" />
              </div>
            </div>
          </form>
        </Card>
      </div>
    )
  );
};

export default AddTask;
