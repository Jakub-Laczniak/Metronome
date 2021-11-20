import React, { useEffect, useState } from 'react'

function PendWeight ({ BPM }) {
    const [weightPosition, setWeightPosition] = useState();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const pixelRatio = window.devicePixelRatio;

    let multiplierA = 0.194; 
    let multiplierB = 0.264; 
    let multiplierC = 0.324; 

    let multiplierD = 0.149;
    let multiplierE = 0.203;
    let multiplierF = 0.249;

    window.addEventListener('resize', (()=>{
        setWindowWidth(window.innerWidth);
    }));
    
    useEffect(()=>{
        if (pixelRatio === 1) {
            if (windowWidth<=700) {
                if (BPM>=30 && BPM<40){
                    setWeightPosition(0);
                } else if (BPM>=40 && BPM<44){
                    setWeightPosition(21*multiplierA);
                } else if (BPM>=44 && BPM<48){
                    setWeightPosition(43*multiplierA);
                } else if (BPM>=48 && BPM<52){
                    setWeightPosition(66*multiplierA);
                } else if (BPM>=52 && BPM<56){
                    setWeightPosition(80*multiplierA);
                } else if (BPM>=56 && BPM<60){
                    setWeightPosition(105*multiplierA);
                } else if (BPM>=60 && BPM<66){
                    setWeightPosition(155*multiplierA);
                } else if (BPM>=66 && BPM<72){
                    setWeightPosition(194*multiplierA);
                } else if (BPM>=72 && BPM<80){
                    setWeightPosition(244*multiplierA);
                } else if (BPM>=80 && BPM<88){
                    setWeightPosition(297*multiplierA);
                }else if (BPM>=88 && BPM<96){
                    setWeightPosition(350*multiplierA);
                }else if (BPM>=96 && BPM<104){
                    setWeightPosition(403*multiplierA);
                }else if (BPM>=104 && BPM<112){
                    setWeightPosition(458*multiplierA);
                }else if (BPM>=112 && BPM<120){
                    setWeightPosition(514*multiplierA);
                }else if (BPM>=120 && BPM<132){
                    setWeightPosition(588*multiplierA);
                }else if (BPM>=132 && BPM<144){
                    setWeightPosition(665*multiplierA);
                }else if (BPM>=144 && BPM<160){
                    setWeightPosition(764*multiplierA);
                }else if (BPM>=160 && BPM<176){
                    setWeightPosition(868*multiplierA);
                }else if (BPM>=176 && BPM<192){
                    setWeightPosition(972*multiplierA);
                }else if (BPM>=192 && BPM<=208){
                    setWeightPosition(210);
                };
            };
            if (windowWidth>700) {
                if (BPM>=30 && BPM<40){
                    setWeightPosition(0);
                } else if (BPM>=40 && BPM<44){
                    setWeightPosition(21*multiplierB);
                } else if (BPM>=44 && BPM<48){
                    setWeightPosition(43*multiplierB);
                } else if (BPM>=48 && BPM<52){
                    setWeightPosition(66*multiplierB);
                } else if (BPM>=52 && BPM<56){
                    setWeightPosition(80*multiplierB);
                } else if (BPM>=56 && BPM<60){
                    setWeightPosition(105*multiplierB);
                } else if (BPM>=60 && BPM<66){
                    setWeightPosition(155*multiplierB);
                } else if (BPM>=66 && BPM<72){
                    setWeightPosition(194*multiplierB);
                } else if (BPM>=72 && BPM<80){
                    setWeightPosition(244*multiplierB);
                } else if (BPM>=80 && BPM<88){
                    setWeightPosition(297*multiplierB);
                }else if (BPM>=88 && BPM<96){
                    setWeightPosition(350*multiplierB);
                }else if (BPM>=96 && BPM<104){
                    setWeightPosition(403*multiplierB);
                }else if (BPM>=104 && BPM<112){
                    setWeightPosition(458*multiplierB);
                }else if (BPM>=112 && BPM<120){
                    setWeightPosition(514*multiplierB);
                }else if (BPM>=120 && BPM<132){
                    setWeightPosition(588*multiplierB);
                }else if (BPM>=132 && BPM<144){
                    setWeightPosition(665*multiplierB);
                }else if (BPM>=144 && BPM<160){
                    setWeightPosition(764*multiplierB);
                }else if (BPM>=160 && BPM<176){
                    setWeightPosition(868*multiplierB);
                }else if (BPM>=176 && BPM<192){
                    setWeightPosition(972*multiplierB);
                }else if (BPM>=192 && BPM<=208){
                    setWeightPosition(280);
                };
            };
            if (windowWidth>1100) {
                if (BPM>=30 && BPM<40){
                    setWeightPosition(0);
                } else if (BPM>=40 && BPM<44){
                    setWeightPosition(21*multiplierC);
                } else if (BPM>=44 && BPM<48){
                    setWeightPosition(43*multiplierC);
                } else if (BPM>=48 && BPM<52){
                    setWeightPosition(66*multiplierC);
                } else if (BPM>=52 && BPM<56){
                    setWeightPosition(80*multiplierC);
                } else if (BPM>=56 && BPM<60){
                    setWeightPosition(105*multiplierC);
                } else if (BPM>=60 && BPM<66){
                    setWeightPosition(155*multiplierC);
                } else if (BPM>=66 && BPM<72){
                    setWeightPosition(194*multiplierC);
                } else if (BPM>=72 && BPM<80){
                    setWeightPosition(244*multiplierC);
                } else if (BPM>=80 && BPM<88){
                    setWeightPosition(297*multiplierC);
                }else if (BPM>=88 && BPM<96){
                    setWeightPosition(350*multiplierC);
                }else if (BPM>=96 && BPM<104){
                    setWeightPosition(403*multiplierC);
                }else if (BPM>=104 && BPM<112){
                    setWeightPosition(458*multiplierC);
                }else if (BPM>=112 && BPM<120){
                    setWeightPosition(514*multiplierC);
                }else if (BPM>=120 && BPM<132){
                    setWeightPosition(588*multiplierC);
                }else if (BPM>=132 && BPM<144){
                    setWeightPosition(665*multiplierC);
                }else if (BPM>=144 && BPM<160){
                    setWeightPosition(764*multiplierC);
                }else if (BPM>=160 && BPM<176){
                    setWeightPosition(868*multiplierC);
                }else if (BPM>=176 && BPM<192){
                    setWeightPosition(972*multiplierC);
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
                    setWeightPosition(21*multiplierD);
                } else if (BPM>=44 && BPM<48){
                    setWeightPosition(43*multiplierD);
                } else if (BPM>=48 && BPM<52){
                    setWeightPosition(66*multiplierD);
                } else if (BPM>=52 && BPM<56){
                    setWeightPosition(80*multiplierD);
                } else if (BPM>=56 && BPM<60){
                    setWeightPosition(105*multiplierD);
                } else if (BPM>=60 && BPM<66){
                    setWeightPosition(155*multiplierD);
                } else if (BPM>=66 && BPM<72){
                    setWeightPosition(194*multiplierD);
                } else if (BPM>=72 && BPM<80){
                    setWeightPosition(244*multiplierD);
                } else if (BPM>=80 && BPM<88){
                    setWeightPosition(297*multiplierD);
                }else if (BPM>=88 && BPM<96){
                    setWeightPosition(350*multiplierD);
                }else if (BPM>=96 && BPM<104){
                    setWeightPosition(403*multiplierD);
                }else if (BPM>=104 && BPM<112){
                    setWeightPosition(458*multiplierD);
                }else if (BPM>=112 && BPM<120){
                    setWeightPosition(514*multiplierD);
                }else if (BPM>=120 && BPM<132){
                    setWeightPosition(588*multiplierD);
                }else if (BPM>=132 && BPM<144){
                    setWeightPosition(665*multiplierD);
                }else if (BPM>=144 && BPM<160){
                    setWeightPosition(764*multiplierD);
                }else if (BPM>=160 && BPM<176){
                    setWeightPosition(868*multiplierD);
                }else if (BPM>=176 && BPM<192){
                    setWeightPosition(972*multiplierD);
                }else if (BPM>=192 && BPM<=208){
                    setWeightPosition(152);
                };
            };
            if (windowWidth>700) {
                if (BPM>=30 && BPM<40){
                    setWeightPosition(0);
                } else if (BPM>=40 && BPM<44){
                    setWeightPosition(21*multiplierE);
                } else if (BPM>=44 && BPM<48){
                    setWeightPosition(43*multiplierE);
                } else if (BPM>=48 && BPM<52){
                    setWeightPosition(66*multiplierE);
                } else if (BPM>=52 && BPM<56){
                    setWeightPosition(80*multiplierE);
                } else if (BPM>=56 && BPM<60){
                    setWeightPosition(105*multiplierE);
                } else if (BPM>=60 && BPM<66){
                    setWeightPosition(155*multiplierE);
                } else if (BPM>=66 && BPM<72){
                    setWeightPosition(194*multiplierE);
                } else if (BPM>=72 && BPM<80){
                    setWeightPosition(244*multiplierE);
                } else if (BPM>=80 && BPM<88){
                    setWeightPosition(297*multiplierE);
                }else if (BPM>=88 && BPM<96){
                    setWeightPosition(350*multiplierE);
                }else if (BPM>=96 && BPM<104){
                    setWeightPosition(403*multiplierE);
                }else if (BPM>=104 && BPM<112){
                    setWeightPosition(458*multiplierE);
                }else if (BPM>=112 && BPM<120){
                    setWeightPosition(514*multiplierE);
                }else if (BPM>=120 && BPM<132){
                    setWeightPosition(588*multiplierE);
                }else if (BPM>=132 && BPM<144){
                    setWeightPosition(665*multiplierE);
                }else if (BPM>=144 && BPM<160){
                    setWeightPosition(764*multiplierE);
                }else if (BPM>=160 && BPM<176){
                    setWeightPosition(868*multiplierE);
                }else if (BPM>=176 && BPM<192){
                    setWeightPosition(972*multiplierE);
                }else if (BPM>=192 && BPM<=208){
                    setWeightPosition(166);
                };
            };
            if (windowWidth>1100) {
                if (BPM>=30 && BPM<40){
                    setWeightPosition(0);
                } else if (BPM>=40 && BPM<44){
                    setWeightPosition(21*multiplierF);
                } else if (BPM>=44 && BPM<48){
                    setWeightPosition(43*multiplierF);
                } else if (BPM>=48 && BPM<52){
                    setWeightPosition(66*multiplierF);
                } else if (BPM>=52 && BPM<56){
                    setWeightPosition(80*multiplierF);
                } else if (BPM>=56 && BPM<60){
                    setWeightPosition(105*multiplierF);
                } else if (BPM>=60 && BPM<66){
                    setWeightPosition(155*multiplierF);
                } else if (BPM>=66 && BPM<72){
                    setWeightPosition(194*multiplierF);
                } else if (BPM>=72 && BPM<80){
                    setWeightPosition(244*multiplierF);
                } else if (BPM>=80 && BPM<88){
                    setWeightPosition(297*multiplierF);
                }else if (BPM>=88 && BPM<96){
                    setWeightPosition(350*multiplierF);
                }else if (BPM>=96 && BPM<104){
                    setWeightPosition(403*multiplierF);
                }else if (BPM>=104 && BPM<112){
                    setWeightPosition(458*multiplierF);
                }else if (BPM>=112 && BPM<120){
                    setWeightPosition(514*multiplierF);
                }else if (BPM>=120 && BPM<132){
                    setWeightPosition(588*multiplierF);
                }else if (BPM>=132 && BPM<144){
                    setWeightPosition(665*multiplierF);
                }else if (BPM>=144 && BPM<160){
                    setWeightPosition(764*multiplierF);
                }else if (BPM>=160 && BPM<176){
                    setWeightPosition(868*multiplierF);
                }else if (BPM>=176 && BPM<192){
                    setWeightPosition(972*multiplierF);
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
