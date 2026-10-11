import { useState } from "react";

function ContactForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert("Please fill in all fields");
      return;
    }
    onAddUser({ id: Date.now(), name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Add Contact</h2>
      <input type="text" placeholder="Name" value={name}
        onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input type="tel" placeholder="Phone" value={phone}
        onChange={(e) => setPhone(e.target.value)} />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
