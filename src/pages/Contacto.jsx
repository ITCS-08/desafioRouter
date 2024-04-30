
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Contacto() {

    return (

        <>
            <div className="container">

                <div className="container mt-5" >

                    <h3 style={{ fontSize: '1.5rem' }}>  CUENTANOS, ¿EN QUE TE PODEMOS AYUDAR?</h3>
                    <div>

                        <div className="container mt-5 w-50">
                            <Form >
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Ingresa tu email"

                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicDescripcion">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        placeholder="Ingresa tu descripción"

                                    />
                                </Form.Group>

                                <Button className="mt-5" variant="primary" type="submit">
                                    Enviar
                                </Button>
                            </Form>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}

export default Contacto;