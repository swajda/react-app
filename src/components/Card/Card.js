import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/store';

const Card = props => {

    const dispatch = useDispatch();
   

    const handleClick = e => {
        e.preventDefault();
        //dispatch(addFavorite({favorite: }))
    }

    <li className={styles.card}>{props.title}
        <button className={'fa fa-star-o'} onClick={handleClick}></button>
    </li>
}
export default Card;