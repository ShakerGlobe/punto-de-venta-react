import React, { useState } from "react";

// Importación del Hero desde la carpeta InteractiveDemo
import { DemoHero } from "../Sections/InteractiveDemo/DemoHero";

// Importación de las vistas
import { ViewInicio } from "../Sections/InteractiveDemo/ViewInicio";
import { ViewVentas } from "../Sections/InteractiveDemo/ViewVentas";
import { ViewCatalogo } from "../Sections/InteractiveDemo/ViewCatalogo";
import { ViewUsuarios } from "../Sections/InteractiveDemo/ViewUsuarios";
import { ViewReportes } from "../Sections/InteractiveDemo/ViewReportes";

const DemoPage = () => {
    const [activePage, setActivePage] = useState('inicio');
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Función para cambiar el tema
    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    // Empaquetamos las props comunes para no repetir código
    const commonProps = { isDarkMode, toggleTheme };

    return (
        <DemoHero
            activePage={activePage}
            setActivePage={setActivePage}
            isDarkMode={isDarkMode}
        >
            {/* Renderizado lógico de las vistas con props compartidas */}
            {activePage === 'inicio' && <ViewInicio   {...commonProps} />}
            {activePage === 'ventas' && <ViewVentas   {...commonProps} />}
            {activePage === 'catalogo' && <ViewCatalogo {...commonProps} />}
            {activePage === 'usuarios' && <ViewUsuarios {...commonProps} />}
            {activePage === 'reportes' && <ViewReportes {...commonProps} />}
        </DemoHero>
    );
};

export default DemoPage;