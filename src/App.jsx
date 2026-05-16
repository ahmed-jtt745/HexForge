import React, { useState } from 'react';
import "./index.css";

const App = () => {

  function decToHex(value) {
    let decValues = [10, 11, 12, 13, 14, 15];
    let hexValues = ["A", "B", "C", "D", "E", "F"];
    let remainderArray = [];
    let remainder = 0;

    if (value < 16) {
      value = Number(value);
      let valueExist = decValues.indexOf(value);
      if (valueExist !== -1) {
        return hexValues[valueExist];
      }
    }

    while (value >= 16) {
      remainder = value % 16;
      value = Math.floor(value / 16);

      let valueExist = decValues.indexOf(remainder);
      if (valueExist !== -1)
        remainder = hexValues[valueExist];

      remainderArray.push(remainder);

      remainder = 0;
    }
    let valueExist = decValues.indexOf(value);
    if (valueExist !== -1)
      value = hexValues[valueExist];
    remainderArray.push(value);

    let cleanResult = remainderArray.reverse().join("");
    return cleanResult;
  }

  function hexToDec(value) {
    let answer = 0;
    let j = 0;
    let hexValues = "0123456789ABCDEF";

    for (let i = value.length - 1; i >= 0; i--) {
      let valueExist = hexValues.indexOf(value[i]);
      if (valueExist !== -1) {
        answer += (16 ** j) * valueExist;
        j++;
      }
    }
    return answer;
  }

  function hexToBin(value) {
    let bitArray = [];
    value = hexToDec(value);
    return decToBin(value);

  }

  function decToBin(value) {
    let bitArray = [];
    while (value > 0) {
      bitArray.push(value % 2);
      value = Math.floor(value / 2);
    }
    return bitArray.reverse().join("");
  }

  function binToDec(value) {
    let answer = 0;
    let j = 0;
    for (let i = value.length - 1; i >= 0; i--) {
      if (value[i] == "1")
        answer += ((2 ** j) * 1);
      j++;
    }

    return answer;
  }

  function binToHex(value) {
    return decToHex(binToDec(value));
  }

  const [selectedOption, setSelectedOption] = useState("decToHex");

  function calculateResult(value) {
    let answer = "";
    if (selectedOption == "decToHex")
      answer = decToHex(value);
    else if (selectedOption == "hexToDec")
      answer = hexToDec(value);
    else if (selectedOption == "hexToBin")
      answer = hexToBin(value);
    else if (selectedOption == "decToBin")
      answer = decToBin(value);
    else if (selectedOption == "binToDec")
      answer = binToDec(value);
    else if (selectedOption == "binToHex")
      answer = binToHex(value);

    document.getElementById("answer").innerText = answer;
  }

  return (
    <div className="container">
      <h1>Converter</h1>
      <input type="text" autoFocus placeholder='Enter the value' onChange={(element) => {
        calculateResult(element.target.value.toUpperCase());
      }} />

      <select
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value);
          document.getElementById("answer").innerText = "Answer";
          document.querySelector("input").value = "";
        }}
      >
        <option value="decToHex">Dec to Hex</option>
        <option value="hexToDec">Hex to Dec</option>
        <option value="hexToBin">Hex to Bin</option>
        <option value="binToHex">Bin to Hex</option>
        <option value="decToBin">Dec to Bin</option>
        <option value="binToDec">Bin to Dec</option>
      </select>

      <p id="answer">Answer</p>
    </div>
  )
}

export default App