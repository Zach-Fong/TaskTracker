import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ onAdd, showAdd }) => {
    const location = useLocation();
    return (
        <header className='header'>
            <h1>Task App</h1>
            {location.pathname === '/' && <Button color={showAdd ? 'black' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />}
        </header>
    )
}

const headingStyle = {
    color: 'grey'
}

export default Header
