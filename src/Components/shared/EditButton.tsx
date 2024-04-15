export const EditButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="edit-button btn btn-primary"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      Edit
    </button>
  );
};
