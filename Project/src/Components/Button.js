function Button(props) {
  return (
    <button class="button" onClick={props.event}>
      <img src={props.name} alt="Button" width="150" height="150" />
    </button>
  );
}

export default Button;
