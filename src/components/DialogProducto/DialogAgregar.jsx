import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
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
            <h2>Agregar Venta</h2>
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
                <label htmlFor="nombre">Nombre</label>
                <InputText id="nombre"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="categoria">Categoria</label>
                <Dropdown id="categoria" filter={true}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="precio">Precio</label>
                <InputNumber id="precio" minFractionDigits={2} useGrouping={false}  mode="currency" currency="PEN" locale="es-PE"/>
            </div>

            </div>
        </Dialog>
    )
}

export default DialogAgregar;