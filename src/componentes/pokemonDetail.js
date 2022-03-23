import { useState } from "react";
import { Button, Dialog, DialogContent } from "@mui/material";

const PokemonDetail = (props) => {

    const [open, setOpen] = useState(false);
    //* funcion que cambia el estado.
    const handleOpenDialog = () => setOpen(!open);

    return(
        <div>
            <Button onClick={ handleOpenDialog }  variant='contained' color='primary'>
                Detalles: 
            </Button>
            <Dialog open={open} onClose={ handleOpenDialog }>
                <DialogContent>
                    <h4>Nombre: {props.nombre}</h4>
                    <Button onClick={ handleOpenDialog  }>x</Button>
                </DialogContent>
            </Dialog>
        </div>
    );
} 

export default PokemonDetail;