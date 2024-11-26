"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Distribution() {
  const [traits, setTraits] = useState(["", "", "", ""]);
  const [values, setValues] = useState(["", "", "", ""]);
  const [editingIndex, setEditingIndex] = useState({ row: -1, col: -1 });

  const addRow = () => {
    setTraits([...traits, ""]);
    setValues([...values, ""]);
  };

  const startEditing = (row, col) => {
    setEditingIndex({ row, col });
  };

  const updateValue = (event, row, col) => {
    const newValue = event.target.value;
    if (col === 0) {
      const newTraits = [...traits];
      newTraits[row] = newValue;
      setTraits(newTraits);
    } else {
      const newValues = [...values];
      newValues[row] = newValue;
      setValues(newValues);
    }
  };

  const deleteRow = (index) => {
    const updatedTraits = [...traits];
    const updatedValues = [...values];
    updatedTraits.splice(index, 1);
    updatedValues.splice(index, 1);
    setTraits(updatedTraits);
    setValues(updatedValues);
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-[70%] mt-[3%]">
          <div className="flex justify-end">
            <div className="w-[80%]">
              <div className="w-[50%]">
                <h1 className="text-6xl font-semibold border-b border-black">
                  Distribution
                </h1>
              </div>
              <table className="w-full border border-gray-300 rounded-lg overflow-hidden mt-8">
                <thead className="bg-[#252525]">
                  <tr>
                    <th className="w-[5%]"></th>
                    <th className="w-[47.5%] px-4 py-2 text-lg text-[#FFFFFF]">
                      Traits
                    </th>
                    <th className="w-[47.5%] px-4 py-2 text-lg text-[#FFFFFF]">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {traits.map((trait, index) => (
                    <tr key={index} className="hover:bg-gray-400 group">
                      {/* <td
                className="px-2 py-1 cursor-pointer text-red-600"
                onClick={addRow}
              >
                +
              </td> */}

                      <td className="px-2 py-1 border-r border-gray-600/50">
                        <button
                          onClick={() => deleteRow(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          X
                        </button>
                      </td>

                      <td
                        className="px-2 py-1 cursor-pointer border-r border-gray-600/50"
                        onClick={() => startEditing(index, 0)}
                      >
                        {editingIndex.row === index &&
                        editingIndex.col === 0 ? (
                          <input
                            value={trait}
                            onChange={(e) => updateValue(e, index, 0)}
                            onBlur={() => setEditingIndex({ row: -1, col: -1 })}
                            autoFocus
                            className="w-full bg-transparent border-b border-gray-500"
                          />
                        ) : (
                          trait
                        )}
                      </td>
                      <td
                        className="px-2 py-1 cursor-pointer"
                        onClick={() => startEditing(index, 1)}
                      >
                        {editingIndex.row === index &&
                        editingIndex.col === 1 ? (
                          <input
                            value={values[index]}
                            onChange={(e) => updateValue(e, index, 1)}
                            onBlur={() => setEditingIndex({ row: -1, col: -1 })}
                            autoFocus
                            type="number"
                            className="w-full bg-transparent border-b border-gray-500"
                          />
                        ) : (
                          values[index]
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={addRow}
                className="mt-2 px-4 py-2 bg-[#252525] text-[#FFFFFF] rounded-lg hover:bg-[#343434] transition-colors"
              >
                + Add New Trait
              </button>
            </div>
          </div>
        </div>
        <div className="w-[30%] bg-yellow-600">dawdada</div>
      </div>
    </div>
  );
}
