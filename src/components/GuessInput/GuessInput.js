import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [guess, setGuess] = React.useState("");

  const inputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(guess);
    setGuess("");
  }

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        ref={inputRef}
        disabled={gameStatus !== "running"}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
