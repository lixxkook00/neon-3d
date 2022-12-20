import React, { useState } from 'react'
import "./LuckyBall.scss"

export default function LuckyBall() {

    const [spinState, setSpinState] = useState("")
    const [awardState, setAwardState] = useState(false)

    const getRandomAnimationSpin = (state) => {
        if(state === "animation-lottery"){
            const randomOption = Math.floor(Math.random() * 2) + 1;
            return `${state}-${randomOption}`
        }
    }

    const handleSpin = (e) => {
        e.preventDefault()
        setAwardState(false)
        setSpinState("animation-lottery")
        setTimeout(() => {
            setSpinState("")
            setAwardState(true)
        },3000)
    }

  return (
    <div className="lucky-ball">
        <div className="wrap-container">
            <div className="machine">
                <div className={`wrap-machine-content ${spinState}`}>
                    <img className="base-machine" src="./images/lucky-ball/machine.png" alt="" />
                    <div className="light-box">
                        <div className="wrap-ligth">
                            <img className="" src="/images/title_light.png" alt="" />
                            <img className="eff1" src="/images/title_light_2.png" alt="" />
                            <img className="eff2" src="/images/title_light_3.png" alt="" />
                        </div>
                    </div>
                    <div className="machine-title">
                        <div className="wrap-title">
                            <span> 
                                {/* <span className="char-ani1">f</span>
                                o4  */}
                                <span className="char-ani1">l</span>
                                ucky - 
                                <span className="char-ani1"> b</span>
                                all
                            </span>
                        </div>
                    </div>
                    <div className="machine-grass">
                        <img className="" src="/images/machine_grass.png" alt="" />
                    </div>
                    <div className="list-ball">
                        <div className={`wrap-ball ${getRandomAnimationSpin(spinState)}`}>
                            <div className="item">
                                <div className="wrap-item">
                                    <img src="./images/lucky-ball/award.png" className="base-img" />
                                    <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap-item">
                                    <img src="./images/lucky-ball/award.png" className="base-img" />
                                    <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap-item">
                                    <img src="./images/lucky-ball/award.png" className="base-img" />
                                    <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap-item">
                                    <img src="./images/lucky-ball/award.png" className="base-img" />
                                    <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap-item">
                                    <img src="./images/lucky-ball/award.png" className="base-img" />
                                    <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap-item">
                                    <img src="./images/lucky-ball/award.png" className="base-img" />
                                    <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap-item">
                                    <img src="./images/lucky-ball/award.png" className="base-img" />
                                    <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap-item">
                                    <img src="./images/lucky-ball/award.png" className="base-img" />
                                    <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap-item">
                                    <img src="./images/lucky-ball/award.png" className="base-img" />
                                    <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap-item">
                                    <img src="./images/lucky-ball/award.png" className="base-img" />
                                    <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap-item">
                                    <img src="./images/lucky-ball/award.png" className="base-img" />
                                    <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap-item">
                                    <img src="./images/lucky-ball/award.png" className="base-img" />
                                    <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap-item">
                                    <img src="./images/lucky-ball/award.png" className="base-img" />
                                    <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap-item">
                                    <img src="./images/lucky-ball/award.png" className="base-img" />
                                    <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap-item">
                                    <img src="./images/lucky-ball/award.png" className="base-img" />
                                    <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap-item">
                                    <img src="./images/lucky-ball/award.png" className="base-img" />
                                    <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                </div>
                            </div>
                        
                        {/* <div className="__react_component_tooltip place-top type-dark " id="tool-spin" data-id="tooltip"></div> */}
                        </div>
                    </div>

                    <div className="group-btn">
                        <a onClick={(e) => handleSpin(e)} className="buttonSpin">
                            <img className="" src="/images/lucky-ball/spin_2.png" alt="" />
                        </a>
                        
                        <a onClick={(e) => handleSpin(e)} className="buttonSpin ">
                            <img className="" src="/images/lucky-ball/spin_2.png" alt="" />
                        </a>
                        
                        <a onClick={(e) => handleSpin(e)} className="buttonSpin ">
                            <img className="" src="/images/lucky-ball/spin_2.png" alt="" />
                        </a>
                    </div>

                    {
                        awardState
                        &&
                        <div className="award-ball">
                            <div className="item">
                                <div className="wrap-item">
                                    <img src="./images/lucky-ball/award.png" className="base-img" />
                                    <div className="ball-logo"><img className="" src="/images/ball_logo.png" alt=""/></div>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    </div>
  )
}
