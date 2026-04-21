import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ShoppingCart, CheckCircle2 } from 'lucide-react';

const HeroHome: React.FC = () => {
  return (
    // Fondo blanco puro
    <section className="relative overflow-hidden bg-white pt-20 pb-28 md:pt-32 md:pb-40">
      
      {/* --- DESTELLOS VERDES (Visibilidad corregida) --- */}
      <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] pointer-events-none z-0">
        <div className="w-full h-full bg-[#00C1A3] rounded-full blur-[120px] md:blur-[160px] opacity-30"></div>
      </div>
      
      <div className="absolute bottom-[-5%] left-[-5%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] pointer-events-none z-0">
        <div className="w-full h-full bg-emerald-400 rounded-full blur-[100px] md:blur-[140px] opacity-25"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* flex-row-reverse mueve la imagen a la izquierda y el texto a la derecha en desktop */}
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-16 lg:gap-12">
          
          {/* --- COLUMNA TEXTO (DERECHA) --- */}
          <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 text-[#00C1A3] text-sm font-semibold mb-8 border border-emerald-100 shadow-sm">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C1A3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C1A3]"></span>
              </span>
              ✨ !Vende más fácil y rápido¡
            </div>
            
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-slate-950 leading-[1.1] tracking-tighter mb-8">
              Control total de tu tienda, <span className="text-[#00C1A3]">desde tu celular.</span>
            </h1>
            
            <p className="text-xl text-slate-700 mb-12 max-w-2xl leading-relaxed font-medium">
              Controla tu inventario y registra ventas fácilmente: sin instalaciones ni comisiones. Ideal para abarrotes y pequeños negocios que buscan orden sin complicaciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                {/* BOTONES: Mantenemos el diseño rounded-2xl original */}
                <Link 
                    to="/register" 
                    className="px-8 py-4 bg-[#00C1A3] text-white font-bold rounded-2xl text-lg hover:bg-[#00a88e] transition-all duration-200 shadow-lg shadow-[#00C1A3]/30 hover:shadow-[#00C1A3]/50 transform hover:-translate-y-0.5 text-center"
                >
                    Pruébalo gratis hoy
                </Link>

                <Link 
                    to="/demo" 
                    className="px-8 py-4 bg-white text-slate-900 font-bold border border-slate-200 rounded-2xl text-lg hover:bg-slate-50 transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm"
                >
                    <svg className="w-6 h-6 text-[#00C1A3]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                    Probar Demo
                </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00C1A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                Transparente, sin contratos ocultos
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00C1A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                Soporte 24/7 de verdad
              </div>
            </div>
          </div>

          {/* --- COLUMNA IMAGEN (IZQUIERDA) --- */}
          <div className="w-full lg:w-2/5 flex flex-col items-center justify-center relative z-0">
            
            <div className="relative w-full max-w-[420px] lg:max-w-none animate-float">
              
              {/* Card 1: Última Venta (Arriba Derecha) */}
              <div className="absolute -top-8 -right-4 md:-right-8 bg-white p-5 rounded-2xl shadow-2xl z-20 border border-slate-100 flex items-center gap-4 animate-pulse">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-[#00C1A3]">
                  <ShoppingCart size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Última Venta</p>
                  <p className="text-3xl font-extrabold text-[#00C1A3]">$1,250.00</p>
                </div>
              </div>

              {/* Card 2: Stock Bajo (Abajo Izquierda) */}
              <div className="absolute -bottom-10 -left-6 md:-left-12 bg-white p-5 rounded-2xl shadow-2xl z-20 border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <Package size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Stock Bajo</p>
                  <p className="text-xl font-extrabold text-slate-900">Refresco 600ml</p>
                </div>
              </div>

              {/* Imagen principal con rotación hacia el texto */}
              <div className="aspect-[4/3] bg-slate-100 rounded-[2rem] shadow-inner border-[12px] border-white overflow-hidden relative transform lg:rotate-[2deg] transition-transform duration-500 hover:rotate-0 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00C1A3]/10 to-transparent z-10"></div>
                <img 
                  src="/images/nedimi-pos-01.png" 
                  alt="Terminal Punto de Venta Moderna" 
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500 scale-105"
                />
              </div>

              {/* Glow decorativo detrás de la imagen */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#00C1A3]/10 rounded-full blur-3xl -z-10"></div>
            </div>
            
            {/* Sombra de la base */}
            <div className="w-[80%] h-8 bg-slate-950/5 blur-xl rounded-[100%] mt-[-20px] z-[-1]"></div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroHome;