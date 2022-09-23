import style from './button.module.css';



function Button ({name, type, handleClick}) {
    



    let condition = style.button
    if (type === 'back') {
        condition = style.back
    }else if (type === 'close') {
        condition = style.close
    }

    return (
        <button className={condition} onClick={handleClick}>{name}</button>
    )
} 

export default Button;
