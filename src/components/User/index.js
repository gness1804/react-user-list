import './User.css';

function User({ name, email, city, phone, company }) {
  return (
    <div className="user">
      <h3 className="user-name">{name}</h3>
      <a href={`mailto:${email}`}>
        <p className="user-email">{email}</p>
      </a>
      <p>{`City: ${city}`}</p>
      <a href={`tel:${phone}`}>
        <p>{phone}</p>
      </a>
    </div>
  );
}

export default User;
