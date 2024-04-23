export const ErrorMessage = ({
  show,
  message,
}: {
  show: boolean;
  message: string;
}) => {
  return show ? <div className="error-message">{message}</div> : <div></div>;
};
