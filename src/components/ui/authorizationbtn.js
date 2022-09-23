import style from './authButton.module.css';

function AuthButton({ name, type, handleClick }) {




    let condition = style.authbutton
    if (type === 'buy') {
        condition = style.buy
    } else if (type === 'close') {
        condition = style.close
    }

    return (
        <button className={condition} onClick={handleClick}>{name}</button>
    )
}

export default AuthButton;