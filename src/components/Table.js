import React, { useState } from "react";
import { useTable, useFilters, useSortBy } from "react-table";

export default function Table({ columns, data }) {
// Create a state
const [filterNameInput, setFilterNameInput] = useState("");
const [filterOccupationInput, setFilterOccupationInput] = useState("");
const [filterLocationInput, setFilterLocationInput] = useState("");


  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, 
    setFilter // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable(
      {
    columns,
    data
  },
  useFilters,
  useSortBy// This plugin Hook will help to sort our table columns
  );

  const handleFilterChangeN = e => {
    const value = e.target.value || undefined;
    setFilter("name", value);
    setFilterNameInput(value);
  };
  const handleFilterChangeO = e => {
    const value = e.target.value || undefined;
    setFilter("occupation", value);
    setFilterOccupationInput(value);
  };
  
  const handleFilterChangeL = e => {
    const value = e.target.value || undefined;
    setFilter("location", value);
    setFilterLocationInput(value);
  };
  
  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
 return (
  <>
 <div className="search">
<input
                                value={filterNameInput}
                                onChange={
                                    handleFilterChangeN
                                }
                                placeholder={"Search Name"}
                              /> 
<input
                                value={filterOccupationInput}
                                onChange={
                                    handleFilterChangeO
                                }
                                placeholder={"Search Role"}
                              /> 
<input
                                value={filterLocationInput}
                                onChange={
                                    handleFilterChangeL
                                }
                                placeholder={"Search Location"}
                              />
</div> 
<table {...getTableProps()}>
  <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
  );
}