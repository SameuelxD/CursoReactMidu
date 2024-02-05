import { useState } from "react";
export function TwitterFollowCard({ children, formatUserName, userName = 'unknown', name, initialIsFollowing, isActive }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const [isConfirm, setIsConfirm] = useState(isActive);


    // const state=useState(false); // Nos devuelve un array vacio de dos posiciones
    // const isFollowing=state[0]; // Primera posicion vamos a almacenar el valor del estado
    // const setIsFollowing=state[1] // Segunda posicion vamos a tener una funcion para actualizar el estado para nueva version

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }


    // Verifica si usa github o youtube y genera el enlace correspondiente
    const link = isConfirm ? `https://unavatar.io/github/${userName}` : `https://unavatar.io/youtube/${userName}`;


    const socialNetwork = isConfirm ? 'GitHub' : 'YouTube'; // Determina la red social activa


    return (
        <article className="tw-followCard">
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={link} alt="avatar" />
                <div className='tw-followCard-info'>
                    <strong>{children ? children : name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                    <span className="tw-followCard-socialNetwork">{socialNetwork}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

/* children son los elementos contenidos por un elemento mayor padre  */