import React, {useState, useEffect} from 'react';
import RouterBtn from './RouterBtn';
import MenuBtns from './MenuBtns';
import Speeding from './Speeding';
import Songs from './Songs';
import Metrum from './Metrum';
import {Switch, Route, Link, useLocation } from 'react-router-dom';

function Menu({counter, handleClick, handleChange, handleSpeed}) {

    const [speeding, setSpeeding] = useState(false);
    const [metrum, setMetrum] = useState(false);
    const [songs, setSongs] = useState(false);
    const linkStyle = {color:'black', textDecoration: 'none'};

    let location = useLocation();
    useEffect(() => {
        if (location.pathname === '/') {
            setSpeeding(false);
            setMetrum(false);
            setSongs(false);
        };
    }, [location.pathname]);

    const handleRouterClick = (e) => {
        let name = e.currentTarget.innerText;
        setMetrum(false);
        setSongs(false);
        setSpeeding(false);
        switch (name) {
            case 'speeding' :
            setSpeeding(true);
                break;
            case 'metrum' :
            setMetrum(true);
                break;
            case 'songs' :
            setSongs(true);
                break;
        };
    };

    return (
        <React.Fragment>
                <Switch>
                    <Route exact path='/' render={()=><MenuBtns counter={counter} click={handleClick} handleChange={handleChange}/>}/>
                    <Route exact path='/speeding' render={()=><Speeding handleSpeed={handleSpeed}/>}/>
                    <Route exact path='/metrum' render={()=><Metrum/>}/>
                    <Route exact path='/songs' render={()=><Songs/>}/>
                </Switch>
                <nav className='menu_router'>
                    <Link to='/speeding'style={linkStyle}>
                        <RouterBtn classTarget='router_icon_set' text='speeding' handleClick={(e)=>handleRouterClick(e)} classActive={speeding?'set_active':null}/>
                    </Link>
                    <Link to='/metrum'style={linkStyle}>
                        <RouterBtn classTarget='router_icon_set' text='metrum' handleClick={(e)=>handleRouterClick(e)} classActive={metrum?'set_active':null}/>
                    </Link>
                    <Link to='/songs' style={linkStyle}>
                        <RouterBtn classTarget='router_icon_list' text='songs' handleClick={(e)=>handleRouterClick(e)} classActive={songs?'list_active':null}/>
                    </Link>
                </nav>
        </React.Fragment>
    )
};

export default Menu;
