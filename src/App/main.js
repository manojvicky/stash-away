import React, { useState } from "react";

const Main = props => {
  let data = props.data;
  const [value, handleChange] = useState("");
  if (value) {
    data = data.filter(item => item.Country.toLowerCase().includes(value));
  }
  return (
    <>
      <div className="inputouter">
        <span className="inpLabel">Search : </span>
        <input
          className="search"
          placeholder="country"
          type="text"
          value={value}
          onChange={e => handleChange(e.target.value)}
        />
      </div>
      {data.map((item, index) => {
        const [year, rank] =
          item["Top Ten"] && item["Top Ten"] !== "Nan"
            ? item["Top Ten"].split("#")
            : "";
        return (
          <div className="card" key={index}>
            <div className="header">
              <span className="brand">{item.Brand}</span>
              <span className="rating">
                <span className="rate">Rating :</span>
                <span className="star">
                  {item.Stars && item.Stars !== "NaN"
                    ? ` ${item.Stars}/5`
                    : " NA"}
                </span>
              </span>
            </div>
            <div className="content">
              <div className="left">
                <span className="label">Variety</span>
                <span className="label">Style</span>
                <span className="label">Country</span>
                {year && rank && <span className="label">Top-Ten</span>}
              </div>
              <div className="right">
                <span className="contentSpan">{item.Variety}</span>

                <span className="contentSpan">{item.Style}</span>

                <span className="contentSpan">{item.Country}</span>
                {year && rank && (
                  <span className="contentSpan">
                    <span style={{ marginRight: "10px" }}>Rank : {rank}</span>
                    <span>Year : {year}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Main;
