export const Comment = ({ id, body, user, onDelete }) => {
  const { username } = user;
  const handleDelete = () => {
    onDelete(id);
  };
  console.log(body);
  return (
    <div>
      <h2>{username}</h2>
      <p>{body}</p>
      <button onClick={handleDelete}>Delete Comment</button>
    </div>
  );
};
