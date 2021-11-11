import React, {useState, useEffect} from 'react';
import RouterBtn from './RouterBtn';
import MenuBtns from './MenuBtns';
import Songs from './Songs';
import Metrum from './Metrum';
import {Switch, Route, Link, useLocation } from 'react-router-dom';

function Menu({counter, handleClick, handleChange, handleMetrum, metrumProp, warning}) {

    const [metrum, setMetrum] = useState(false);
    const [songs, setSongs] = useState(false);
    const [metronome, setMetronome] = useState(true);
    const linkStyle = {color:'black', textDecoration: 'none'};

    let location = useLocation();
    useEffect(() => {
        if (location.pathname === '/') {
            setMetrum(false);
            setSongs(false);
            setMetronome(true)
        };
    }, [location.pathname]);

    const handleRouterClick = (e) => {
        let name = e.currentTarget.innerText;
        setMetrum(false);
        setSongs(false);
        setMetronome(false);
        switch (name) {
            case 'metrum' :
            setMetrum(true);
                break;
            case 'songs' :
            setSongs(true);
                break;
            case 'metronome' :
            setMetronome(true)
                break;
        };
    };

    return (
        <React.Fragment>
                <Switch>
                    <Route exact path='/' render={()=><MenuBtns counter={counter} click={handleClick} handleChange={handleChange} warning={warning}/>}/>
                    <Route exact path='/metrum' render={()=><Metrum metrum={metrumProp} handleMetrum={handleMetrum}/>}/>
                    <Route exact path='/songs' render={()=><Songs/>}/>
                </Switch>
                <nav className='menu_router'>
                    <Link to='/'style={linkStyle}>
                        <RouterBtn text='metronome' handleClick={(e)=>handleRouterClick(e)} classActive={metronome?'metronome_active':null}/>
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
