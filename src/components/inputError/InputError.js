export function InputError({ errorMessage }) {
  return (
    <div
      className="align-center flex-row input-error my-sm"
      style={{ visibility: errorMessage ? "visible" : "hidden" }}
    >
      <i className="fas fa-sm fa-exclamation-circle"></i>&nbsp;
      <p className="txt-sm txt-semibold">{errorMessage}</p>
    </div>
  );
}
