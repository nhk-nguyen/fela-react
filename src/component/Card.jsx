import React from 'react'
import { useFela } from 'react-fela'
import image from '../doge.png'

const cardWrapper = ({theme}) => ({
    width: 400,
    backgroundColor: theme.bgColor,
    boxShadow: '0 0 1px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.02)',
    margin: '10px',
    borderRadius: '10px',
    display: 'flex',
    alignItem: 'flex-start',
    justifyContent: 'space-between',
    border: theme.border,
    padding: 20,
    color: theme.color,
    transition: 'all .5s ease'
})
const imgWrapper = {
    minWidth: 100,
    width: 100,
    position: 'relative',
}
const imgStyle = {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    margin: 'auto'
}
const contentWrapper = {
    padding: '0 20px',
    textAlign: 'left'
}

export default function Card() {
    
    const { css, theme } = useFela()
    return (
        <div className={css(cardWrapper({theme}))}>
            <div className={css(imgWrapper)}>
                <img className={css(imgStyle)} src={image}/>
            </div>
            <div className={css(contentWrapper)}>
                <h3>Hello my name is Doge</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, commodi!</p>
            </div>
        </div>
    )
}