import "./Button.css";
import play from "../play_button.png";

function Button() {
  return (
    <input
      type="image"
      class="button"
      src={play}
      alt="Button"
      width="150"
      height="150"
    />
  );
}

export default Button;
