import styles from './Favorite.module.scss';
import PageTitle from "../PageTitle/PageTitle";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { getFavoriteCards } from "../../redux/store";

const Favorite = () => {

    const favoriteCard = useSelector(getFavoriteCards);

    if (favoriteCard.length === 0)

        return ( 
        <div>
            <PageTitle>Favorite</PageTitle>
            <p className={styles.subtitle}>
              Favorites
            </p>
        </div>
    );

    return (
      <div>
        <PageTitle>Favorite</PageTitle>
        <p> favorite Cards </p>
        <div className={styles.cardsWrapper}>
                <ul className={styles.cards}>
                    {favoriteCard.map(card =>
                      <Card
                        key={card.id}
                        title={card.title}
                        id={card.id}
                        isFavorite= {card.isFavorite}
                      />
                    )}
                </ul>
            </div>
      </div>
    );
}
export default Favorite