import './Button.css';

const Button = (props) => {
    return (
        <a href= {props.href}><button>{props.text}</button></a>
    );
};

export default Button;