import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/store';


const Card = props => {

    const dispatch = useDispatch();
   

    const handleClick = e => {
        e.preventDefault();
        dispatch(addFavorite(props.id))
        console.log(props)
    }

    
    return <li className={styles.card}>{props.title}
        <button className={clsx('fa fa-star-o', props.isFavorite && styles.active)} onClick={handleClick}></button>
    </li>
}
export default Card;