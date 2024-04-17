export const Button = ({
  onClick,
  tooltipLocation,
  tooltipMessage,
  className,
  buttonText,
}: {
  onClick: () => void;
  tooltipLocation: string;
  tooltipMessage: string;
  className: string;
  buttonText: string;
}) => {
  return (
    <button
      className={`${className} btn btn-primary tooltip-container`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {buttonText}
      {tooltipMessage !== "" && (
        <div className={`tooltip ${tooltipLocation}`}>{tooltipMessage}</div>
      )}
    </button>
  );
};
