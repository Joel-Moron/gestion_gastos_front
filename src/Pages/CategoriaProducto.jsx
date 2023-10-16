import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import DialogAgregar from '../components/DialogCategoriaProducto/DialogAgregar';
import { useState } from 'react';



const CategoriaProducto = () => {
    const [visibleAgregar, setVisibleAgregar] = useState(true)
    const customers=[
        {
            'name': 'joel',
        }
    ];

    const AccionContent = () => {
        return(
            <div className='flex gap-3'>
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
            <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} style={{ minWidth: '50rem', maxWidth: '50rem' }}>
                <Column field="name" header="Name" style={{ width: '16%' }}></Column>
                <Column header="Accion" style={{ width: '16%' }} body={AccionContent}></Column>
            </DataTable>
            </div>
            <DialogAgregar show={visibleAgregar} setShow={setVisibleAgregar}/>
        </div>
    )
}

export default CategoriaProducto;