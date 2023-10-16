import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';

export default function Navbar() {

    const items = [
        {
            label: 'Ventas',
            icon: 'pi pi-fw pi-home',
            command: () => {
                console.log('holaaaaa');
            }
        },
        {
            label: 'Gastos',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'gestionar productos',
                    icon: 'pi pi-fw pi-pencil',
                    command: () => {
                        console.log('holaaaaa');
                     }
                },
                {
                    label: 'categoria',
                    icon: 'pi pi-fw pi-calendar-times',
                    command: () => {
                        console.log('holaaaaa');
                     }
                }
            ]
        },
            
        {
            label: 'Producto',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'gestionar productos',
                    icon: 'pi pi-fw pi-pencil',
                    command: () => {
                        console.log('holaaaaa');
                     }
                },
                {
                    label: 'categoria',
                    icon: 'pi pi-fw pi-calendar-times',
                    command: () => {
                        console.log('holaaaaa');
                     }
                }
            ]
        },
        {
            label: 'Estadisticas', 
            icon: 'pi pi-fw pi-pencil',
            command: () => {
                console.log('holaaaaa');
             }
        }
    ];

    const end = (
        <Button onClick={() => ''} className="p-button-outlined" label="Cerrar sesión" />

    )

    return (
        <div className=" bg-white/[.2]">
            <Menubar model={items} end={end} />
        </div>
    )
}
        