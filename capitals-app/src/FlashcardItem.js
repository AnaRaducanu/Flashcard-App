import { useState } from "react";

export default function FlashcardItem(props) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };
  return (
    <div
      className="flashcard"
      onClick={handleClick}
      style={{
        backgroundColor: "#323949",
        color: "white",
        fontSize: "18px",
        display: "flex" /* Enable flexbox layout */,
        flexDirection: "column" /* Set flex direction to column */,
        justifyContent: "center" /* Center items vertically */,
        alignItems: "center" /* Center items horizontally */,
        padding: "0.5rem",
        margin: "0.5rem",
        paddingTop: "0.1rem",
        position: "relative",
        height: "11rem",
        width: "20rem",
         // Media query for smaller screens
 
      }}
    >
      <button
        className="closingBtn"
        onClick={props.deleteFlashcardObj}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "transparent",
          color: "#C06C84",
          fontWeight: "bold",
          fontSize: "30px",
          fontFamily: "Segoe UI",
          width: "30px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        x
      </button>

      {flipped ? (
        <p style={{ textAlign: "center", fontSize: "15px" }}>
          {props.flashcard.answer}
        </p>
      ) : (
        <>
          <p
            style={{
              fontSize: "36px",
              marginBottom: "0.2rem",
              marginTop: "0.2rem",
            }}
          >
            🌍
          </p>
          <p style={{ textAlign: "center" }}>{props.flashcard.question}</p>
        </>
      )}
    </div>
  );
}
