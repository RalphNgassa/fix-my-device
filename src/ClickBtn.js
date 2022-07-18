import './clickbtn.css';

const ClickBtn = (props) => {
    var text = props.text;
    const onPress = props.onPress;

    return(
        <div className="clickbtn">
            <button
                style={{
                    color: props.clicked? "white":"black",
                    backgroundColor: props.clicked? "green":'transparent',
                    border: props.clicked? "1px green solid":"1px black solid", 
                    transition: 'backgroundColor 0.2s, border 0.2s'
                }} 
                onClick={() => {onPress()}}>
                {text}
            </button>
        </div>
    );
};

export default ClickBtn;