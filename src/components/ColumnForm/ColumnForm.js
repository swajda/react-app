import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => { 
    const [value, setValue] = useState('');
    const [icon, setIconValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: value, icon: icon});        
        setValue('');
        setIconValue('');
    }

    return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
        <label>Title: </label><TextInput value={value} onChange={e => setValue(e.target.value)} />
        <label>Icon: </label><TextInput value={icon} onChange={e => setIconValue(e.target.value)} />
        <Button>Add Column</Button>
    </form>);
};

export default ColumnForm;