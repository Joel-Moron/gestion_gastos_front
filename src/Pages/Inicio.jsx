import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import DialogAgregar from '../components/Inicio/Dialog/DialogAgregar';
import { useState } from 'react';



const Inicio = () => {
    const [visibleAgregar, setVisibleAgregar] = useState(false)
    const customers=[
        {
            'name': 'joel',
        }
    ];

    const AccionContent = () => {
        return(
            <div className='flex'>
                <Button label='Editar'/>
                <Button label='Eliminar'/>
            </div>
        )
    }
    return (
        <div>
            <h1 className='text-center text-teal-500 text-6xl'>Ventas</h1>
            <div>
                <Button label='Agregar' onClick={() => setVisibleAgregar(true)}/>
            </div>
            <div>
            <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" style={{ width: '16%' }}></Column>
                <Column field="precio" header="Precio" style={{ width: '16%' }}></Column>
                <Column field="tag" header="Categoria" style={{ width: '16%' }}></Column>
                <Column field="cantidad" header="Cantidad" style={{ width: '16%' }}></Column>
                <Column field="fecha" header="Fecha" style={{ width: '16%' }}></Column>
                <Column header="Accion" style={{ width: '16%' }} body={AccionContent}></Column>
            </DataTable>
            </div>
            <DialogAgregar show={visibleAgregar} setShow={setVisibleAgregar}/>
        </div>
    )
}

export default Inicio;