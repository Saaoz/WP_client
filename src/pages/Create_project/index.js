import Button from '../../components/Boutton';
import Input from '../../components/Input';
import './index.css';
import '../../components/Boutton/index.css'
import '../../components/Input/index.css'

function Create_project() {
    return (
        <container className='back_formu'>
            <container className='formulaire' >
                <h1>Creation d’un nouveau project </h1>
                <div className='input_zone'>
                    <Input className="input input_c" type="text" placeholder='Nom du chantier' />
                    <Input className="input input_a" type="text" placeholder='Adresse' />
                    <div className='input_bot'>
                        <Input className="input input_p" type="text" placeholder='Code postal' />
                        <Input className="input input_v" type="text" placeholder=' Ville' />
                    </div>
                </div>
                <div className='btn_zone'>
                    <Button className="btn2" value="Valider" />
                    <Button className="btn2" value="Retour" />
                </div>
            </container>
        </container>
    );
  }
  export default Create_project;