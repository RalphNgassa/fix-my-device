import './progressBar.css';
import ProgressElement from './ProgressElement';

const ProgressBar = () => {
    return (
        <div className='progressBar'>
            <div className='row'>
                <ProgressElement text="Device" num = "1"/>
                <hr className="line"/>
                <ProgressElement text="Repair Details" num = "2"/>
                <hr className="line"/>
                <ProgressElement text="Appointment" num = "3"/>
                <hr className="line"/>
                <ProgressElement text = "Confirmation" num = "4"/>
            </div>
        </div>
    );
};
export default ProgressBar;