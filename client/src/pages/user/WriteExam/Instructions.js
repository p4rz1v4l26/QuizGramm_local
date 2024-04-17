import React from "react";
import { useNavigate } from "react-router-dom";

function Instructions({ examData, setView, startTimer }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-5">
      <ul className="flex flex-col gap-1">
        <h1 className="text-2xl underline">Instructions</h1>
        <li>
          The examination must be completed within the allotted duration of{" "}
          {examData.duration} seconds.
        </li>
        <li>
          The examination will be automatically submitted after{" "}
          {examData.duration} seconds have elapsed.
        </li>
        <li>Once submitted, answers cannot be altered.</li>
        <li>Do not refresh the page during the examination.</li>
        <li>
          Utilize the <span className="font-bold">"Previous"</span> and{" "}
          <span className="font-bold">"Next"</span> buttons to navigate between
          questions.
        </li>
        <li>
          The total marks allocated for the examination are{" "}
          <span className="font-bold">{examData.totalMarks}</span>.
        </li>
        <li>
          The passing marks required for the examination are{" "}
          <span className="font-bold">{examData.passingMarks}</span>.
        </li>
      </ul>

      <div className="flex gap-2">
        <button className="primary-outlined-btn" onClick={() => navigate("/")}>
          CLOSE
        </button>
        <button
          className="primary-contained-btn"
          onClick={() => {
            startTimer();
            setView("questions");
          }}
        >
          Start Exam
        </button>
      </div>
    </div>
  );
}

export default Instructions;
