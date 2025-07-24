"use client";

import { useEffect } from "react";

type Props = {};

const Test = (props: Props) => {
  const handlePrompt = () => {
    console.log(RegExp.escape("The Quick Brown Fox")); // "\\x54he\\x20Quick\\x20Brown\\x20Fox"
    console.log(RegExp.escape("Buy it. use it. break it. fix it.")); // "\\x42uy\\x20it\\.\\x20use\\x20it\\.\\x20break\\x20it\\.\\x20fix\\x20it\\."
    console.log(RegExp.escape("(*.*)")); // "\\(\\*\\.\\*\\)"
    console.log(RegExp.escape("｡^･ｪ･^｡")); // "｡\\^･ｪ･\\^｡"
    console.log(RegExp.escape("😊 *_* +_+ ... 👍")); // "😊\\x20\\*_\\*\\x20\\+_\\+\\x20\\.\\.\\.\\x20👍"
    console.log(RegExp.escape("\\d \\D (?:)")); // "\\\\d\\x20\\\\D\\x20\\(\\?\\x3a\\)"
  };
  useEffect(() => {}, []);
  return (
    <div>
      Test
      <button onClick={handlePrompt}>测试</button>
    </div>
  );
};

export default Test;
