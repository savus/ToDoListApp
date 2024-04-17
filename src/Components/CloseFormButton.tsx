export const CloseFormButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="close-button btn tooltip-container"
      onClick={() => onClick()}
    >
      X<div className="tooltip above">Close</div>
    </button>
  );
};
