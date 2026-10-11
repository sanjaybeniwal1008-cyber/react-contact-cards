import { useState } from "react";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const addUser = (user) => setUsers([...users, user]);

  return (
    <div className="app">
      <h1>Mini Project: Like Cards</h1>
      <div className="grid">
        <Card title="React" />
        <Card title="JavaScript" />
        <Card title="useState Hook" />
      </div>

      <h1>Contact Cards</h1>
      <ContactForm onAddUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
