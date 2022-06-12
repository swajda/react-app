import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = (props) => { 
    const [title, setValue] = useState('');
    const [icon, setIconValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({title, icon, listId:props.listId}));        
        setValue('');
        setIconValue('');
    }

    return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
        <label>Title: </label><TextInput value={title} onChange={e => setValue(e.target.value)} />
        <label>Icon: </label><TextInput value={icon} onChange={e => setIconValue(e.target.value)} />
        <Button>Add Column</Button>
    </form>);
};

export default ColumnForm;