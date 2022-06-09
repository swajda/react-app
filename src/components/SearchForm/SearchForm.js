import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addSearchString } from '../../redux/store';


const SearchForm = () => {    
    const initialSearchString = useSelector(state => state.searchString)
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState(initialSearchString);
      

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addSearchString({searchString}));
    };


    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput 
                placeholder="Search..."
                value={searchString} 
                onChange={e => setSearchString(e.target.value)}
            />
            <Button><span className="fa fa-search" /></Button>
        </form>)
    }

export default SearchForm;