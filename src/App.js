import { useReducer } from "react";
import "./App.css";
import TicketForm from "./components/TicketForm";
import "./styles.css";
import ticketReducer from "./reducers/ticketReducer";

function App() {
  const initialState = {
    tickets: [],
  };
  const [state, dispatch] = useReducer(ticketReducer, initialState);
  console.log("tickets", state.tickets);
  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
