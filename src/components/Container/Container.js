import styles from './Container.module.scss'
import Hero from '../Hero/Hero'
import SearchForm from '../SearchForm/SearchForm'
import List from '../List/List'

const Container = () => <div className={styles.container}><Hero /><SearchForm /><List /></div>

export default Container;