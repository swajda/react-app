import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';

const Card = props => {

    const dispatch = useDispatch();


    const handleClick = e => {
        e.preventDefault();
        dispatch(addFavorite(props.id))
        console.log(props)
    }

    const removedCard = () => {
        dispatch(removeCard(props.id))
    }


    return (
        <li className={styles.card}>{props.title}
            <div>
                <button
                    className={clsx('fa fa-star-o', props.isFavorite && styles.active)}
                    onClick={handleClick}>
                </button>
                <button
                    className={'fa fa-trash'}
                    onClick={removedCard}>

                </button>
            </div>
        </li>
    )
}
export default Card;