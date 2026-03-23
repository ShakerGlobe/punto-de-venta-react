import React, { useState } from "react";
import { DemoHero } from "../Sections/InteractiveDemo/DemoHero";
import { ViewInicio } from "../Sections/InteractiveDemo/ViewInicio";
import { ViewVentas } from "../Sections/InteractiveDemo/ViewVentas";
import { ViewCatalogo } from "../Sections/InteractiveDemo/ViewCatalogo";
import { ViewUsuarios } from "../Sections/InteractiveDemo/ViewUsuarios";
import { ViewReportes } from "../Sections/InteractiveDemo/ViewReportes";

const DemoPage = () => {
    const [activePage, setActivePage] = useState('inicio');
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);
    const commonProps = { isDarkMode, toggleTheme };

    return (
        <DemoHero
            activePage={activePage}
            setActivePage={setActivePage}
            isDarkMode={isDarkMode}
        >
            {/* INICIO */}
            {activePage === 'inicio' && <ViewInicio {...commonProps} />}

            {/* VENTAS */}
            {activePage === 'ventas' && <ViewVentas {...commonProps} />}

            {/* CATÁLOGO (CORREGIDO PARA SUB-MENÚS) */}
            {activePage.startsWith('catalogo') && (
                <ViewCatalogo
                    {...commonProps}
                    seccion={activePage} // <--- Le pasa 'catalogo_productos' o 'catalogo_proveedores'
                />
            )}

            {/* USUARIOS */}
            {activePage === 'usuarios' && <ViewUsuarios {...commonProps} />}

            {/* REPORTES (CORREGIDO PARA SUB-MENÚS) */}
            {activePage.startsWith('reportes') && (
                <ViewReportes
                    {...commonProps}
                    activePage={activePage}
                />
            )}
        </DemoHero>
    );
};

export default DemoPage;