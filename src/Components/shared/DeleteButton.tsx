export const DeleteButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="delete-button btn btn-primary"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      Delete
    </button>
  );
};
