import React, {useState} from "react";
import classes from './styles.module.css';
import data from '../../popup-data/data';
import Content from '../Content/content'

const Popup = (props) => {
    const [slideNumber, setSlideNumber] = useState(0);
    return(
        <div className={classes.container} style={{
            display: props.display,
            width: (slideNumber === (data.length - 1) ? '35%' : '65%')
        }}>
            <button className={`${classes.button} ${classes.buttonPrevious}`}
                onClick={ () => {setSlideNumber( slideNumber - 1)}}
                style={{display: (slideNumber === 0 ? 'none' : 'block')}}>
                {'<'}
            </button>

            <Content state={slideNumber} stateChanger={setSlideNumber} slideNumber={slideNumber} count={data.length} title={data[slideNumber].title} description={data[slideNumber].description} imgSrc={data[slideNumber].imgSrc}/>

            <button className={`${classes.button} ${classes.buttonNext}`}
                onClick={ () => {setSlideNumber( slideNumber + 1)}}
                style={{display: (slideNumber === (data.length - 1) ? 'none' : 'block')}}>
                {'>'}
            </button>
        </div>
    );
}


export default Popup;