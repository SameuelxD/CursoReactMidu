import { useState } from 'react';
import './app.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

// Renderizado de Listas con JS Arrays
const userList = [
    {
        userName: 'sameuelxd',
        name: 'Samuel Alvarez',
        isFollowing: true,
        isActive: true,
    },
    {
        userName: 'trainingleader',
        name: 'Johlver Pardo',
        isFollowing: true,
        isActive: true,
    },
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: false,
        isActive: false,
    },
    {
        userName: 'vetustamorla',
        name: 'Vetusta Morla',
        isFollowing: false,
        isActive: false,
    },
    {
        userName: 'LeivaCanalOficial',
        name: 'Leiva',
        isFollowing: false,
        isActive: false
    }
];


export function App() {
    const [isShowName, setIsShowName] = useState(true);
    const nameState = isShowName ? 'Ocultar Nombre' : 'Mostrar Nombre';


    const formatUserName = (userName) => `@${userName}`;
    return (
        <section className='container_components'>
            {userList.map(user => (
                <TwitterFollowCard
                    key={user.userName}
                    userName={user.userName}
                    name={user.name}
                    initialIsFollowing={user.isFollowing}
                    formatUserName={formatUserName}
                    isActive={user.isActive}
                >
                    {isShowName ? user.name : '******'} {/* Aquí accedemos al nombre del usuario */}
                </TwitterFollowCard>
            ))}
            <button onClick={() => setIsShowName(!isShowName)}>
                {nameState}
            </button>
        </section>
    );
}
{/* <TwitterFollowCard formatUserName={formatUserName} userName="sameuelxd" name="samuelalvarezrm" initialIsFollowing={true} isActive >
                {showName}
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} userName="trainingleader" name="johlverpardo" initialIsFollowing={true} isActive >
                {showName}
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} userName="Gonther1" name="andresalvarez" isActive >
                {showName}
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} {...midudev}>
                {showName}
            </TwitterFollowCard> */}


/* Hooks y State , añade cierta funcionalidad a los componentes de react , o poder ejecutar codigo arbitrario cuando ocurre ciertas cosas en los componentes , o tener algun tipo de funcionalidad para mejorar los componentes , los hooks son como utilidades para mejorar los componentes dando funcionalidad en diferentes partes de renderizacion , 

El useState nos va a servir para saber si estamos o no estamos siguiendo a un usuario

const [valor , actualizacion del valor] = useState(valor)
*/