function ContactCard({ user }) {
  return (
    <div className="contact-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

export default ContactCard;
