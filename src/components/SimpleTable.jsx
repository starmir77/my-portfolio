import React from "react";

const SimpleTable = ({ rowLabels, colLabels, data }) => {
  const getCellClass = (value) => {
    if (value.toLowerCase() === "with ease") return "cell-ease";
    if (value.toLowerCase() === "with effort") return "cell-effort";
    return "";
  };

  return (
    <table className="simple-table">
      <thead>
        <tr>
          <th className="table-label"></th>
          {colLabels.map((label, colIdx) => (
            <th key={colIdx} className="table-label">
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIdx) => (
          <tr key={rowIdx}>
            <th className="table-label">{rowLabels[rowIdx]}</th>
            {row.map((cell, colIdx) => (
              <td key={colIdx} className={`table-cell ${getCellClass(cell)}`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimpleTable;
