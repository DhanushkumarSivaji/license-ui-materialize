import React from "react";

const cards = () => {
  return (
    <div>
      <div className="card check1">
        <div className="card-content">
          <div className="row">
            <div className="col s2 m3 l3">71%</div>
            <div className="col s10 m9 l9">
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue lighten-1"
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>
          </div>
          <p>Income target</p>
        </div>
      </div>
    </div>
  );
};

export default cards;
