import React, { useEffect, useState } from 'react'

function PendWeight ({ BPM }) {
    const [weightPosition, setWeightPosition] = useState();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const pixelRatio = window.devicePixelRatio;

    window.addEventListener('resize', (()=>{
        setWindowWidth(window.innerWidth);
    }));
    
    useEffect(()=>{
        if (pixelRatio === 1) {
            if (windowWidth<=700) {
                if (BPM>=30 && BPM<40){
                    setWeightPosition(0);
                } else if (BPM>=40 && BPM<44){
                    setWeightPosition(21*0.1940);
                } else if (BPM>=44 && BPM<48){
                    setWeightPosition(43*0.1940);
                } else if (BPM>=48 && BPM<52){
                    setWeightPosition(66*0.1940);
                } else if (BPM>=52 && BPM<56){
                    setWeightPosition(80*0.1940);
                } else if (BPM>=56 && BPM<60){
                    setWeightPosition(105*0.1940);
                } else if (BPM>=60 && BPM<66){
                    setWeightPosition(155*0.1940);
                } else if (BPM>=66 && BPM<72){
                    setWeightPosition(194*0.1940);
                } else if (BPM>=72 && BPM<80){
                    setWeightPosition(244*0.1940);
                } else if (BPM>=80 && BPM<88){
                    setWeightPosition(297*0.1940);
                }else if (BPM>=88 && BPM<96){
                    setWeightPosition(350*0.1940);
                }else if (BPM>=96 && BPM<104){
                    setWeightPosition(403*0.1940);
                }else if (BPM>=104 && BPM<112){
                    setWeightPosition(458*0.1940);
                }else if (BPM>=112 && BPM<120){
                    setWeightPosition(514*0.1940);
                }else if (BPM>=120 && BPM<132){
                    setWeightPosition(588*0.1940);
                }else if (BPM>=132 && BPM<144){
                    setWeightPosition(665*0.1940);
                }else if (BPM>=144 && BPM<160){
                    setWeightPosition(764*0.1940);
                }else if (BPM>=160 && BPM<176){
                    setWeightPosition(868*0.1940);
                }else if (BPM>=176 && BPM<192){
                    setWeightPosition(972*0.1940);
                }else if (BPM>=192 && BPM<=208){
                    setWeightPosition(210);
                };
            };
            if (windowWidth>700) {
                if (BPM>=30 && BPM<40){
                    setWeightPosition(0);
                } else if (BPM>=40 && BPM<44){
                    setWeightPosition(21*0.1940);
                } else if (BPM>=44 && BPM<48){
                    setWeightPosition(43*0.1940);
                } else if (BPM>=48 && BPM<52){
                    setWeightPosition(66*0.1940);
                } else if (BPM>=52 && BPM<56){
                    setWeightPosition(80*0.1940);
                } else if (BPM>=56 && BPM<60){
                    setWeightPosition(105*0.1940);
                } else if (BPM>=60 && BPM<66){
                    setWeightPosition(155*0.1940);
                } else if (BPM>=66 && BPM<72){
                    setWeightPosition(194*0.1940);
                } else if (BPM>=72 && BPM<80){
                    setWeightPosition(244*0.1940);
                } else if (BPM>=80 && BPM<88){
                    setWeightPosition(297*0.1940);
                }else if (BPM>=88 && BPM<96){
                    setWeightPosition(350*0.1940);
                }else if (BPM>=96 && BPM<104){
                    setWeightPosition(403*0.1940);
                }else if (BPM>=104 && BPM<112){
                    setWeightPosition(458*0.1940);
                }else if (BPM>=112 && BPM<120){
                    setWeightPosition(514*0.1940);
                }else if (BPM>=120 && BPM<132){
                    setWeightPosition(588*0.1940);
                }else if (BPM>=132 && BPM<144){
                    setWeightPosition(665*0.1940);
                }else if (BPM>=144 && BPM<160){
                    setWeightPosition(764*0.1940);
                }else if (BPM>=160 && BPM<176){
                    setWeightPosition(868*0.1940);
                }else if (BPM>=176 && BPM<192){
                    setWeightPosition(972*0.1940);
                }else if (BPM>=192 && BPM<=208){
                    setWeightPosition(280);
                };
            };
            if (windowWidth>1100) {
                if (BPM>=30 && BPM<40){
                    setWeightPosition(0);
                } else if (BPM>=40 && BPM<44){
                    setWeightPosition(21*0.1940);
                } else if (BPM>=44 && BPM<48){
                    setWeightPosition(43*0.1940);
                } else if (BPM>=48 && BPM<52){
                    setWeightPosition(66*0.1940);
                } else if (BPM>=52 && BPM<56){
                    setWeightPosition(80*0.1940);
                } else if (BPM>=56 && BPM<60){
                    setWeightPosition(105*0.1940);
                } else if (BPM>=60 && BPM<66){
                    setWeightPosition(155*0.1940);
                } else if (BPM>=66 && BPM<72){
                    setWeightPosition(194*0.1940);
                } else if (BPM>=72 && BPM<80){
                    setWeightPosition(244*0.1940);
                } else if (BPM>=80 && BPM<88){
                    setWeightPosition(297*0.1940);
                }else if (BPM>=88 && BPM<96){
                    setWeightPosition(350*0.1940);
                }else if (BPM>=96 && BPM<104){
                    setWeightPosition(403*0.1940);
                }else if (BPM>=104 && BPM<112){
                    setWeightPosition(458*0.1940);
                }else if (BPM>=112 && BPM<120){
                    setWeightPosition(514*0.1940);
                }else if (BPM>=120 && BPM<132){
                    setWeightPosition(588*0.1940);
                }else if (BPM>=132 && BPM<144){
                    setWeightPosition(665*0.1940);
                }else if (BPM>=144 && BPM<160){
                    setWeightPosition(764*0.1940);
                }else if (BPM>=160 && BPM<176){
                    setWeightPosition(868*0.1940);
                }else if (BPM>=176 && BPM<192){
                    setWeightPosition(972*0.1940);
                }else if (BPM>=192 && BPM<=208){
                    setWeightPosition(350);
                };
            };
        };
        if (pixelRatio === 2) {

            if (windowWidth<=700) {
                if (BPM>=30 && BPM<40){
                    setWeightPosition(0);
                } else if (BPM>=40 && BPM<44){
                    setWeightPosition(21*0.149);
                } else if (BPM>=44 && BPM<48){
                    setWeightPosition(43*0.149);
                } else if (BPM>=48 && BPM<52){
                    setWeightPosition(66*0.149);
                } else if (BPM>=52 && BPM<56){
                    setWeightPosition(80*0.149);
                } else if (BPM>=56 && BPM<60){
                    setWeightPosition(105*0.149);
                } else if (BPM>=60 && BPM<66){
                    setWeightPosition(155*0.149);
                } else if (BPM>=66 && BPM<72){
                    setWeightPosition(194*0.149);
                } else if (BPM>=72 && BPM<80){
                    setWeightPosition(244*0.149);
                } else if (BPM>=80 && BPM<88){
                    setWeightPosition(297*0.149);
                }else if (BPM>=88 && BPM<96){
                    setWeightPosition(350*0.149);
                }else if (BPM>=96 && BPM<104){
                    setWeightPosition(403*0.149);
                }else if (BPM>=104 && BPM<112){
                    setWeightPosition(458*0.149);
                }else if (BPM>=112 && BPM<120){
                    setWeightPosition(514*0.149);
                }else if (BPM>=120 && BPM<132){
                    setWeightPosition(588*0.149);
                }else if (BPM>=132 && BPM<144){
                    setWeightPosition(665*0.149);
                }else if (BPM>=144 && BPM<160){
                    setWeightPosition(764*0.149);
                }else if (BPM>=160 && BPM<176){
                    setWeightPosition(868*0.149);
                }else if (BPM>=176 && BPM<192){
                    setWeightPosition(972*0.149);
                }else if (BPM>=192 && BPM<=208){
                    setWeightPosition(152);
                };
            };
            if (windowWidth>700) {
                if (BPM>=30 && BPM<40){
                    setWeightPosition(0);
                } else if (BPM>=40 && BPM<44){
                    setWeightPosition(21*0.149);
                } else if (BPM>=44 && BPM<48){
                    setWeightPosition(43*0.149);
                } else if (BPM>=48 && BPM<52){
                    setWeightPosition(66*0.149);
                } else if (BPM>=52 && BPM<56){
                    setWeightPosition(80*0.149);
                } else if (BPM>=56 && BPM<60){
                    setWeightPosition(105*0.149);
                } else if (BPM>=60 && BPM<66){
                    setWeightPosition(155*0.149);
                } else if (BPM>=66 && BPM<72){
                    setWeightPosition(194*0.149);
                } else if (BPM>=72 && BPM<80){
                    setWeightPosition(244*0.149);
                } else if (BPM>=80 && BPM<88){
                    setWeightPosition(297*0.149);
                }else if (BPM>=88 && BPM<96){
                    setWeightPosition(350*0.149);
                }else if (BPM>=96 && BPM<104){
                    setWeightPosition(403*0.149);
                }else if (BPM>=104 && BPM<112){
                    setWeightPosition(458*0.149);
                }else if (BPM>=112 && BPM<120){
                    setWeightPosition(514*0.149);
                }else if (BPM>=120 && BPM<132){
                    setWeightPosition(588*0.149);
                }else if (BPM>=132 && BPM<144){
                    setWeightPosition(665*0.149);
                }else if (BPM>=144 && BPM<160){
                    setWeightPosition(764*0.149);
                }else if (BPM>=160 && BPM<176){
                    setWeightPosition(868*0.149);
                }else if (BPM>=176 && BPM<192){
                    setWeightPosition(972*0.149);
                }else if (BPM>=192 && BPM<=208){
                    setWeightPosition(166);
                };
            };
            if (windowWidth>1100) {
                if (BPM>=30 && BPM<40){
                    setWeightPosition(0);
                } else if (BPM>=40 && BPM<44){
                    setWeightPosition(21*0.149);
                } else if (BPM>=44 && BPM<48){
                    setWeightPosition(43*0.149);
                } else if (BPM>=48 && BPM<52){
                    setWeightPosition(66*0.149);
                } else if (BPM>=52 && BPM<56){
                    setWeightPosition(80*0.149);
                } else if (BPM>=56 && BPM<60){
                    setWeightPosition(105*0.149);
                } else if (BPM>=60 && BPM<66){
                    setWeightPosition(155*0.149);
                } else if (BPM>=66 && BPM<72){
                    setWeightPosition(194*0.149);
                } else if (BPM>=72 && BPM<80){
                    setWeightPosition(244*0.149);
                } else if (BPM>=80 && BPM<88){
                    setWeightPosition(297*0.149);
                }else if (BPM>=88 && BPM<96){
                    setWeightPosition(350*0.149);
                }else if (BPM>=96 && BPM<104){
                    setWeightPosition(403*0.149);
                }else if (BPM>=104 && BPM<112){
                    setWeightPosition(458*0.149);
                }else if (BPM>=112 && BPM<120){
                    setWeightPosition(514*0.149);
                }else if (BPM>=120 && BPM<132){
                    setWeightPosition(588*0.149);
                }else if (BPM>=132 && BPM<144){
                    setWeightPosition(665*0.149);
                }else if (BPM>=144 && BPM<160){
                    setWeightPosition(764*0.149);
                }else if (BPM>=160 && BPM<176){
                    setWeightPosition(868*0.149);
                }else if (BPM>=176 && BPM<192){
                    setWeightPosition(972*0.149);
                }else if (BPM>=192 && BPM<=208){
                    setWeightPosition(171);
                };
            };
        };
    }, [BPM, windowWidth]);
    return (
        <div className='metronome_weight' style={{top:`${weightPosition}px`}}/>
    )
}

export default PendWeight;
