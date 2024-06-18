import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
export default function TicketForm({ dispatch, editingTicket }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const priorityLabels = {
    1: "low",
    2: "medium",
    3: "high",
  };

  //   const data = Object.entries(priorityLabels);
  //   console.log("data", data);

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: editingTicket ? editingTicket.id :v4(),
      title,
      description,
      priority,
    };
    console.log("data", data);
    dispatch({
      type: editingTicket ? "UPDATE_TICKET" :"ADD_TICKET",
      payload: data,
    });
    clearForm();
  };

  useEffect(() => {
    if(editingTicket) {
        setTitle(editingTicket.title);
        setDescription(editingTicket.description);
        setPriority(editingTicket.priority);
    } else {
        clearForm();
    }
  }, [editingTicket]);

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input"
        />
      </div>
      <fieldset className="priority-fieldset">
        <legend>Priority</legend>
        {Object.entries(priorityLabels).map(([value, label]) => (
          <label key={value} className="priority-label">
            <input
              type="radio"
              value={value}
              checked={priority === value}
              onChange={(e) => setPriority(e.target.value)}
              className="priority-input"
            />
            {label}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}
