import './progressElement.css';

const ProgressElement = (props) => {
    let text = props.text;
    let num = props.num
    return (
        <div className='progressElement'>
            <span>{text}</span>
            <div className="frame">
                {num}
            </div>
        </div>
    );
};

export default ProgressElement;