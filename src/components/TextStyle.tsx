import React from "react";
import "./TextStyled.css"; // Assuming you save the styles in a separate CSS file

const TextStyle =  ({ text }: { text: string }) => {
  const characters = text.split("");

  return (
    <button>
      <div className="text">
        {characters.map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        
      </div>
      <div className="clone">
        {characters.map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
    </button>
  );
};

export default TextStyle;
