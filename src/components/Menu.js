import React, {useState} from 'react';
import RouterBtn from './RouterBtn';
import MenuBtns from './MenuBtns';

function Menu({counter, handleClick, handleChange}) {

    const [speeding, setSpeeding] = useState(false);
    const [metrum, setMetrum] = useState(false);
    const [songs, setSongs] = useState(false);

    const handleRouterClick = (e) => {
        let name = e.currentTarget.innerText;
        setSpeeding(false);
        setMetrum(false);
        setSongs(false);
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
            <MenuBtns counter={counter} click={handleClick} handleChange={handleChange}/>
            <div className='menu_router'>
                <RouterBtn classTarget='router_icon_set' text='speeding' handleClick={(e)=>handleRouterClick(e)} classActive={speeding?'set_active':null}/>
                <RouterBtn classTarget='router_icon_set' text='metrum' handleClick={(e)=>handleRouterClick(e)} classActive={metrum?'set_active':null}/>
                <RouterBtn classTarget='router_icon_list' text='songs' handleClick={(e)=>handleRouterClick(e)} classActive={songs?'list_active':null}/>
            </div>
        </React.Fragment>
    )
};

export default Menu;
