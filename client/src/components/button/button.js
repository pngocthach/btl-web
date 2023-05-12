import style from './button.module.css';

function Button(props) {
  return (
      <button className={style.button}>{props.text}</button>
  );
}

export default Button;