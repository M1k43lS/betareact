import style from './Card.module.css'

export default function Card({ name, status, species, image }) {
    return (
        <div className={style.card}>
            <div className={style.container}>
                <img src={image} className={style.imagen} />
            </div>
            <div className={style.info}>
                <h3>{name}</h3>
                <p>{`Status: ${status}`}</p>
                <p>{`Species: ${species}`}</p>
            </div>
        </div >
    );
}