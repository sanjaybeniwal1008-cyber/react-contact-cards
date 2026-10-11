import ContactCard from "./ContactCard";

function UserList({ users }) {
  return (
    <div className="user-list">
      <h2>Contacts ({users.length})</h2>
      {users.length === 0 ? (
        <p>No contacts yet. Add one above.</p>
      ) : (
        <div className="grid">
          {users.map((user) => (
            <ContactCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;
