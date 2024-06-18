import { useReducer } from "react";
import "./App.css";
import TicketForm from "./components/TicketForm";
import "./styles.css";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./components/TicketList";

function App() {
  const initialState = {
    tickets: [],
    editingTicket: null
  };
  const [state, dispatch] = useReducer(ticketReducer, initialState);
  console.log("tickets", state.tickets);
  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} editingTicket={state.editingTicket}/>
        { state.tickets.length > 0 &&
        (<div>
          <h1>All Tickets</h1>
          <TicketList dispatch={dispatch} tickets={state.tickets}/>
        </div>)
        }
      </div>
    </div>
  );
}

export default App;
