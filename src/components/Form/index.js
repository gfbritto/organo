import InputText from '../InputText';
import './Form.css'
const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText label='Nome' placeholder='Insira o seu nome'/>
                <InputText label='Cargo' placeholder='Digite o seu cargo'/>
                <InputText label='Imagem' placeholder='Digite o endereço da imagem'/>
            </form>
        </section>
    );
}

export default Form