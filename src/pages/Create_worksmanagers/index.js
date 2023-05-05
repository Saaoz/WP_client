import './styles.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';


const Create_worksmanagers = () => {
    const navigate = useNavigate();

    return (
        <div className='create-worksmanagers-page'>
            <div className='create-worksmanagers-container'>
                <h1>Create new workmanager</h1>
                <form className='create-worksmanagers-form'>
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />

                <Input className='create-worksmanagers-button' type='submit' value="Validate"/>
                <Button className='btn1' value='Cancel' onClick={()=>navigate('/')}/>
                </form>
            </div>
        </div>
    );
};

export default Create_worksmanagers;