import React from 'react';
import classes from './styles.module.css';

const Content = (props) => {
    return(
        <div className={classes.container}>
            <aside className={classes.leftSide}>
                <h1>{props.title}</h1>
                <p className={classes.p}>{props.description}</p>
                {
                    ((props.count - 1) != props.slideNumber) ? <Popupfooter slideNumber={props.slideNumber} stateChanger={props.stateChanger} count={props.count}/> : <button onClick={() => {window.open("https://www.netflix.com/")}}>Go to Netflix</button>
                }
            </aside>
            {
                    ((props.count - 1) != props.slideNumber) ? <aside className={classes.rightSide}><img src={props.imgSrc}></img></aside> : ''
            }
            
        </div>
    )
}

const Popupfooter = (props) => {
    let dots = [];
    for (let i = 0; i < props.count; i++) {
        if( i === props.slideNumber ) dots.push(<h1 className={`${classes.dots} ${classes.activedot}`}>·</h1>)
        else dots.push(<h1 className={classes.dots}>·</h1>)
    }
    return(
        <div className={classes.popupFooter}>
            <button onClick={() => {props.stateChanger(props.slideNumber + 1)}}>Next</button>
            <div className={classes.dotsContainer}>
                {
                    dots
                }
            </div>
        </div>
    )
}

export default Content;