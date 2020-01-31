import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const card2 = () => {
  return (
    <div>

        <div className="secondcard">
          <div className="card-panel hoverable white-text center">
            <i className="material-icons medium">desktop_windows</i>
            <h3 className="count">87.4k</h3>
            <h6 className="white-text">Reports Generated</h6>
            <h6 className="white-text">^59.4%</h6>
            <ResponsiveContainer width="110%" height={100}>
              <BarChart
                width={350}
                height={100}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <Bar dataKey="pv" stackId="a" fill="#45CE30" />
                <Bar dataKey="amt" stackId="a" fill="#45CE30" />
                <Bar dataKey="uv" fill="#45CE30" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

  );
};

export default card2;
