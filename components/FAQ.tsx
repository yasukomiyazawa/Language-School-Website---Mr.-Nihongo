"use client";

import { FAQProps } from "@/types";
import {
  faArrowAltCircleDown,
  faArrowDown,
  faArrowDownLong,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const FAQ = ({ question, answer }: FAQProps) => {
  const [answerBar, setAnswerBar] = useState(false);

  const toggleAnswer = () => {
    setAnswerBar(!answerBar);
  };

  return (
    <li className="border border-blue-50">
      <div
        onClick={toggleAnswer}
        className="flex justify-between items-center p-3 bg-blue-50 shadow-sm cursor-pointer hover:bg-red-800 hover:text-white hover:font-bold"
      >
        <div className="flex ">
          <FontAwesomeIcon
            icon={faQuestionCircle}
            className="mr-3 w-6 h-6 shadow-sm"
          />
          <p className="text-xl font-medium">{question}</p>
        </div>

        <FontAwesomeIcon icon={faArrowDown} />
      </div>
      {answerBar && (
        <div className="p-3 bg-white">
          <p>{answer}</p>
        </div>
      )}
    </li>
  );
};

export default FAQ;
