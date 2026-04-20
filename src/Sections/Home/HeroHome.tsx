import React from 'react';
import { Link } from 'react-router-dom';

const HeroHome: React.FC = () => {
  return (
    // Fondo blanco puro
    <section className="relative overflow-hidden bg-white pt-20 pb-28 md:pt-32 md:pb-40">
      
      {/* --- DESTELOS AZULES FUERTES PERO DESVANECIDOS --- */}
      {/* Destello superior derecho */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] pointer-events-none opacity-40">
        <div className="w-full h-full bg-blue-600 rounded-full blur-[100px] md:blur-[150px]"></div>
      </div>
      
      {/* Destello inferior izquierdo (más sutil) */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] pointer-events-none opacity-30">
        <div className="w-full h-full bg-blue-500 rounded-full blur-[80px] md:blur-[130px]"></div>
      </div>
      {/* ----------------------------------------------- */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Cambiamos la estructura grid por flex para mayor control y un look menos rígido */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Columna Texto: Más ancha y centrada en móviles */}
          <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8 border border-blue-200 shadow-inner">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              ✨ !Vende más fácil y rápido¡
            </div>
            
            {/* Texto informal pero contundente. 'de verdad' le da seriedad */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-slate-950 leading-[1.1] tracking-tighter mb-8">
              Control total de tu tienda, <span className="text-blue-600">desde tu celular.</span>
            </h1>
            
            {/* Equilibrio: Hablamos de 'caos' pero ofrecemos 'seguridad' y 'diseño' */}
            <p className="text-xl text-slate-700 mb-12 max-w-2xl leading-relaxed font-medium">
              Controla tu inventario y registra ventas fácilmente: sin instalaciones ni comisiones. Ideal para abarrotes y pequeños negocios que buscan orden sin complicaciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                {/* Botón de Registro */}
                <Link 
                    to="/register" 
                    className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-0.5 text-center"
                >
                    Pruébalo gratis hoy
                </Link>

                {/* Botón de Demo */}
                <Link 
                    to="/demo" 
                    className="px-8 py-4 bg-white text-slate-900 font-bold border border-slate-200 rounded-2xl text-lg hover:bg-slate-50 transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm"
                >
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                    Probar Demo
                </Link>
                </div>

            {/* Beneficios clave con tono serio (Soporte) */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                Transparente, sin contratos ocultos
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                Soporte 24/7 de verdad
              </div>
            </div>
          </div>

          {/* Columna Imagen: Ocupa menos espacio pero tiene más 'aire' */}
          <div className="w-full lg:w-2/5 flex flex-col items-center justify-center relative mt-16 lg:mt-0 z-0">
            
            {/* --- CONTENEDOR DE LA ANIMACIÓN FLOTANTE --- */}
            <div className="relative w-full max-w-[420px] lg:max-w-none animate-float">
              
              {/* Card de Venta: Flota junto con la imagen principal */}
              <div className="absolute -top-8 -left-8 md:-left-12 bg-white p-5 rounded-2xl shadow-2xl z-20 border border-slate-100 flex items-center gap-4 animate-pulse">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Última Venta</p>
                  <p className="text-3xl font-extrabold text-green-600">$1,250.00</p>
                </div>
              </div>

              {/* Imagen principal con perspectiva sutil */}
              <div className="aspect-[4/3] bg-slate-100 rounded-[2rem] shadow-inner border-[12px] border-white overflow-hidden relative transform lg:rotate-[-2deg] transition-transform duration-500 hover:rotate-0 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent z-10"></div>
                <img 
                  src="/images/NEDIMI POS-02.png" 
                  alt="Terminal Punto de Venta Moderna" 
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500 scale-105"
                />
              </div>

              {/* Decoración de fondo de la imagen (más discreta) */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-70"></div>
            </div>
            
            {/* Sombra de la base para vender el efecto de flotado */}
            <div className="w-[80%] h-8 bg-slate-950/10 blur-xl rounded-[100%] mt-[-20px] z-[-1] animate-shadow-swell"></div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroHome;