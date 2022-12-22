import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
  GOOGLE: "google-sign-in",
  INVERTED: "inverted"
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${buttonType}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
