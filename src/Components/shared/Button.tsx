export const Button = ({
  onClick,
  tooltipLocation,
  tooltipMessage,
  className,
  buttonText,
  isLoading,
}: {
  onClick: () => void;
  tooltipLocation: string;
  tooltipMessage: string;
  className: string;
  buttonText: string;
  isLoading: boolean;
}) => {
  return (
    <button
      className={`${className} btn btn-primary tooltip-container`}
      onClick={(e) => {
        e.preventDefault();
        if (!isLoading) {
          onClick();
        }
      }}
      style={{
        cursor: isLoading ? "no-drop" : "pointer",
      }}
    >
      {buttonText}
      {tooltipMessage !== "" && (
        <div className={`tooltip ${tooltipLocation}`}>{tooltipMessage}</div>
      )}
    </button>
  );
};
