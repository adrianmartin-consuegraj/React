import './Button.css'

const Button = (props) => {
  return (
    <div data-testId="button" className="button-style">{props.label}</div>
  )
}

export default Button