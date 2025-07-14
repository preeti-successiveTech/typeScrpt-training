import { useReducer } from "react";

type State = {
  Aman: number;
  Bob: number;
  Carry: number;
};

type Action = 
  | { type: "vote_A" }
  | { type: "vote_B" }
  | { type: "vote_C" };

const initialState: State = {
  Aman: 0,
  Bob: 0,
  Carry: 0,
};

function voteReducer(state: State, action: Action): State {
  switch (action.type) {
    case "vote_A":
      return { ...state, Aman: state.Aman + 1 };
    case "vote_B":
      return { ...state, Bob: state.Bob + 1 };
    case "vote_C":
      return { ...state, Carry: state.Carry + 1 };
    default:
      return state;
  }
}

export default function VotingApp() {
  const [state, dispatch] = useReducer(voteReducer, initialState);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>Voting App</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2>Aman: {state.Aman}</h2>
        <button
          style={buttonStyle}
          onClick={() => dispatch({ type: "vote_A" })}
        >
          Vote Aman
        </button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Bob: {state.Bob}</h2>
        <button
          style={buttonStyle}
          onClick={() => dispatch({ type: "vote_B" })}
        >
          Vote Bob
        </button>
      </div>

      <div>
        <h2>Carry: {state.Carry}</h2>
        <button
          style={buttonStyle}
          onClick={() => dispatch({ type: "vote_C" })}
        >
          Vote Carry
        </button>
      </div>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
