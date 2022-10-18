import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MapIcon from '@mui/icons-material/Map';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from 'react-router-dom';



const TabBar = () => {
    const [value, setValue] = React.useState(0);
    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction component={Link} to="/" label="Map" icon={<MapIcon />} />
            <BottomNavigationAction component={Link} to="/informations" label="Information" icon={<InfoIcon />} />
            <BottomNavigationAction component={Link} to="/faq" label="FAQ" icon={<HelpOutlineIcon />} />
        </BottomNavigation>
    )
}

export default TabBar;