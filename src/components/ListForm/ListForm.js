import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import {  addList } from '../../redux/listsRedux';
import shortid from 'shortid';

const ListForm = () => { 
    const [title, setValue] = useState('');
    const [description, setdescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, description, listId:shortid}));        
        setValue('');
        setdescription('');
    }

    return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
        <label>Title: </label><TextInput value={title} onChange={e => setValue(e.target.value)} />
        <label>Description: </label><TextInput value={description} onChange={e => setdescription(e.target.value)} />
        <Button>Add New List</Button>
    </form>);
};

export default ListForm