import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";


const DialogAgregar = ({show, setShow}) => {

    const footerContent = () => {
        return(
            <div className='flex justify-between'>
                <Button label='Cancelar' onClick={() =>setShow(false)}/>
                <Button label='Agregar'/>
            </div>
        )
    }

    const headerContent = () => {
        return(
            <h2>Agregar Categoria</h2>
        )
    }

    return(
        <Dialog
            visible={show}
            onHide={() =>setShow(false)}
            footer={footerContent}
            header={headerContent}
            className="min-w-[500px]"
        >
            <div>
            <div className="flex flex-col">
                <label htmlFor="nombre_categoria_producto">Nombre</label>
                <InputText id="nombre_categoria_producto"/>
            </div>

            </div>
        </Dialog>
    )
}

export default DialogAgregar;