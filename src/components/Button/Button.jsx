import './Button.css';
import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ onClick, children, movieId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (movieId) {
      navigate(`/player/${movieId}`);
    } else if (onClick) {
      onClick();
    }
  };
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
