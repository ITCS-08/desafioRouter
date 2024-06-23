import { useNavigate } from "react-router-dom";
import { Button} from 'react-bootstrap';

function NotFound() {

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/pokemones');
    };  

    return(

    <>
        <div>
            
            <div className="d-flex justify-content-center mt-3">
                <h1>La Pagina No fue encontrada. Se debe seleccionar un Pokemon</h1>
            </div>

        </div>

        <Button className="mt-1" variant="success" type="submit" onClick={handleBackClick}  >
                Volver a Pokemones
            </Button>
    
    
    </>

    );
}

export default NotFound;