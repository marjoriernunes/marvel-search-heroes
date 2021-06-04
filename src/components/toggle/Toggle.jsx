import './Toogle.css';
import react from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ToggleButton = ( props ) => {

    const [toggle, setToggle] = react.useState(false);
    const { defaultChecked, onChange, className } = props;

    react.useEffect(() => {
        if (defaultChecked) {
            setToggle(defaultChecked)
        }
    }, [defaultChecked]);

    const triggerToggle = () => {
        setToggle(!toggle);

        if ( typeof onChange === 'function' ) {
            onChange(!toggle);
        }
    }

    const toggleClasses = classNames('wrg-toggle', {
        'wrg-toggle--checked': toggle
    }, className);

    return (
        <div onClick={triggerToggle} className={toggleClasses}>
            <div className="wrg-toggle-container">
            </div>
            <div className="wrg-toggle-circle"></div>
            <input type="checkbox" aria-label="Toggle Button" className="wrg-toggle-input" />
        </div>
    );
}

ToggleButton.propTypes = {
    defaultChecked: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func
};

export default ToggleButton;