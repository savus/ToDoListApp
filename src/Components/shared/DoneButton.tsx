export const DoneButton = ({
  completedState,
  onClick,
}: {
  completedState: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="done-button btn btn-primary"
      onClick={() => {
        onClick();
      }}
    >
      <i className="fa fa-checked"></i>
      {completedState ? "Unmark as Done" : "Mark as Done"}
    </button>
  );
};
