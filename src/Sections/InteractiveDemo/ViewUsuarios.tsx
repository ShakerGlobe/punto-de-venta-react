import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Users, UserPlus, Search, ShieldCheck, ShieldAlert,
    Edit, Trash2, Check, XCircle, Sun, Moon, User, Eye, EyeOff, ChevronDown, Sparkles, ChevronRight, X
} from "lucide-react";

// --- COMPONENTE DE TARJETA DE TUTORIAL (REUTILIZABLE) ---
const TutorialCard = ({ step, onNext, onSkip, totalSteps, currentIdx, position = "bottom" }) => (
    <motion.div
        initial={{ opacity: 0, y: position === "bottom" ? 15 : -15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: position === "bottom" ? 15 : -15, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className={`absolute z-[150] w-[320px] bg-white rounded-[2.5rem] p-6 shadow-[0_25px_60px_-15px_rgba(0,193,163,0.4)] border border-[#00C1A3]/40 pointer-events-auto left-1/2 -translate-x-1/2 ${
            position === "bottom" ? "mt-6 top-full" : "mb-6 bottom-full"
        }`}
    >
        <div className="flex gap-1 mb-4">
            {[...Array(totalSteps)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ width: i === currentIdx ? 24 : 6, backgroundColor: i === currentIdx ? "#00C1A3" : "#E2E8F0" }}
                    className="h-1 rounded-full"
                />
            ))}
        </div>

        <div className="flex justify-between items-start mb-2">
            <h4 className="text-[#050335] text-lg font-black flex items-center gap-2 tracking-tight">
                <Sparkles size={18} className="text-[#00C1A3]" />
                {step.title}
            </h4>
            <button onClick={onSkip} className="text-slate-300 hover:text-red-500 transition-colors p-1">
                <X size={18} />
            </button>
        </div>

        <p className="text-slate-600 text-[13px] leading-relaxed mb-6 font-medium">
            {step.description}
        </p>

        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNext}
            className="w-full bg-[#050335] text-white py-3.5 rounded-2xl font-black text-[11px] flex items-center justify-center gap-2 hover:bg-[#00C1A3] hover:text-[#050335] transition-all group tracking-widest uppercase"
        >
            {currentIdx === totalSteps - 1 ? "Entendido" : "Siguiente"}
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>

        <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-[#00C1A3]/20 ${
            position === "bottom" ? "-top-2 border-l border-t" : "-bottom-2 border-r border-b"
        }`} />
    </motion.div>
);

export const ViewUsuarios = () => {
    const [busqueda, setBusqueda] = useState("");
    const [sugerencias, setSugerencias] = useState([]);
    const [alerta, setAlerta] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: '', email: '', rol: 'Usuario Regular' });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [usuarioAEditar, setUsuarioAEditar] = useState(null);
    const [paginaActual, setPaginaActual] = useState(1);
    const usuariosPorPagina = 3;

    // --- LÓGICA TUTORIAL ---
    const [currentStep, setCurrentStep] = useState(0);
    const [isTutorialActive, setIsTutorialActive] = useState(true);

    const steps = [
        { id: "header", title: "Gestión de Sesión", description: "Visualiza tu perfil actual y alterna entre el modo oscuro o claro para tu mayor comodidad." },
        { id: "search", title: "Búsqueda Rápida", description: "Encuentra a cualquier colaborador por su nombre o correo utilizando este buscador inteligente." },
        { id: "table", title: "Listado de Personal", description: "Aquí puedes ver todos los usuarios registrados, su rol actual y realizar ediciones o bajas del sistema." },
        { id: "roles", title: "Niveles de Acceso", description: "Consulta las capacidades de cada rol para asegurar una correcta jerarquía en tu negocio." }
    ];

    const nextStep = () => {
        if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
        else setIsTutorialActive(false);
    };

    const [usuarios, setUsuarios] = useState([
        { id: 1, nombre: "Admin Nedimi", email: "admin@nedimi.com", rol: "Administrador", status: "Activo" },
        { id: 2, nombre: "Vendedor", email: "juan.vendedor@mail.com", rol: "Usuario Regular", status: "Activo" },
        { id: 3, nombre: "Temporal Pruebas", email: "test@mail.com", rol: "Usuario Regular", status: "Inactivo" },
        { id: 4, nombre: "Nuevo Operador", email: "operador@nedimi.com", rol: "Usuario Regular", status: "Activo" },
    ]);

    useEffect(() => {
        if (isModalOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isModalOpen]);

    const usuariosFiltrados = usuarios.filter(u =>
        u.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        u.email.toLowerCase().includes(busqueda.toLowerCase())
    );

    const indiceUltimo = paginaActual * usuariosPorPagina;
    const indicePrimero = indiceUltimo - usuariosPorPagina;
    const usuariosVisibles = usuariosFiltrados.slice(indicePrimero, indiceUltimo);
    const totalPaginas = Math.ceil(usuariosFiltrados.length / usuariosPorPagina);

    useEffect(() => {
        if (busqueda.length > 1) {
            const filtrados = usuarios.filter(u => u.nombre.toLowerCase().includes(busqueda.toLowerCase())).map(u => u.nombre);
            setSugerencias(filtrados);
        } else { setSugerencias([]); }
    }, [busqueda, usuarios]);

    const intentarEliminar = (user) => {
        if (user.nombre === "Admin Nedimi") {
            setAlerta({ tipo: 'error', msg: "Restricción: El perfil de 'Admin Nedimi' es del sistema y no se puede borrar." });
        } else {
            setAlerta({ tipo: 'success', msg: `Usuario ${user.nombre} eliminado correctamente.` });
            setTimeout(() => setUsuarios(usuarios.filter(u => u.id !== user.id)), 500);
        }
        setTimeout(() => setAlerta(null), 3000);
    };

    const abrirEditor = (user) => {
        setUsuarioAEditar({ ...user });
        setIsEditModalOpen(true);
    };

    const handleGuardarEdicion = (e) => {
        e.preventDefault();
        if (usuarioAEditar.nombre === "Admin Nedimi" && usuarioAEditar.rol !== "Administrador") {
            setAlerta({ tipo: 'error', msg: "Seguridad: No puedes quitarle el rol de Administrador a este perfil." });
            return;
        }
        setUsuarios(usuarios.map(u => u.id === usuarioAEditar.id ? usuarioAEditar : u));
        setIsEditModalOpen(false);
        setAlerta({ tipo: 'success', msg: "¡Usuario actualizado con éxito!" });
        setTimeout(() => setAlerta(null), 3000);
    };

    const handleCrearUsuario = (e) => {
        e.preventDefault();
        const id = usuarios.length + 1;
        setUsuarios([...usuarios, { ...nuevoUsuario, id, status: "Activo" }]);
        setIsModalOpen(false);
        setAlerta({ tipo: 'success', msg: `¡Usuario ${nuevoUsuario.nombre} creado con éxito!` });
        setNuevoUsuario({ nombre: '', email: '', rol: 'Usuario Regular' });
        setTimeout(() => setAlerta(null), 3000);
    };

    return (
        <div className={`p-8 h-full overflow-y-auto custom-scroll relative transition-colors duration-500 ${isDarkMode ? 'bg-[#050335] text-white' : 'bg-slate-50 text-slate-900'}`}>
            
            {/* OVERLAY GLOBAL */}
            <AnimatePresence>
                {isTutorialActive && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#050335]/70 backdrop-blur-[2px] z-[120] pointer-events-auto"
                        onClick={() => setIsTutorialActive(false)}
                    />
                )}
            </AnimatePresence>

            {/* HEADER */}
            <div className={`relative flex justify-between items-center mb-6 px-8 py-4 rounded-[2rem] border backdrop-blur-md transition-all duration-500 ${
                isDarkMode ? 'bg-[#0a0f1d]/60 border-white/10' : 'bg-white/70 border-slate-200 shadow-xl'
            } ${isTutorialActive && currentStep === 0 ? 'z-[130] ring-4 ring-[#00C1A3]/30 scale-[1.02]' : 'z-10'}`}>
                <div className="flex flex-col">
                    <span className={`text-[10px] uppercase tracking-[0.2em] font-black mb-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Módulo de Control</span>
                    <h1 className="text-[#00C1A3] text-2xl font-black tracking-tight flex items-center gap-3">
                        <Users size={24} /> Usuarios
                    </h1>
                </div>
                <div className="flex items-center gap-6">
                    <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2.5 rounded-2xl transition-all ${isDarkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-100'}`}>
                        {isDarkMode ? <Sun size={22} className="text-yellow-400" /> : <Moon size={22} className="text-indigo-600" />}
                    </button>
                    <div className="flex items-center gap-4 pl-6 border-l border-white/10">
                        <div className="flex flex-col items-end">
                            <span className={`text-[10px] uppercase font-black ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Sesión activa</span>
                            <span className={`text-sm font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>Admin Nedimi</span>
                        </div>
                        <div className="w-10 h-10 rounded-2xl bg-[#00C1A3] flex items-center justify-center">
                            <User size={20} className="text-[#050335]" fill="currentColor" />
                        </div>
                    </div>
                </div>
                {isTutorialActive && currentStep === 0 && (
                    <TutorialCard step={steps[0]} onNext={nextStep} onSkip={() => setIsTutorialActive(false)} totalSteps={steps.length} currentIdx={currentStep} position="bottom" />
                )}
            </div>

            <div className={`inline-flex items-center mb-8 px-6 py-2 rounded-full border ${isDarkMode ? 'bg-white/5 border-white/5' : 'bg-[#00C1A3]/10 border-[#00C1A3]/20'}`}>
                <h2 className="text-[#00C1A3] text-sm font-black uppercase tracking-widest">Gestión de Usuarios</h2>
            </div>

            {/* CONTENEDOR DE TABLA */}
            <div className={`relative border transition-all duration-500 rounded-[2.5rem] p-8 shadow-2xl overflow-visible ${
                isDarkMode ? 'bg-[#0f1221] border-white/5' : 'bg-white border-slate-200'
            } ${isTutorialActive && (currentStep === 1 || currentStep === 2) ? 'z-[130]' : 'z-0'}`}>
                
                {/* BUSCADOR */}
                <div className={`relative flex justify-between items-center mb-8 gap-4 p-2 rounded-2xl transition-all ${
                    isTutorialActive && currentStep === 1 ? 'ring-4 ring-[#00C1A3]/30 bg-[#00C1A3]/5' : ''
                }`}>
                    <div className="relative flex-1 max-w-xs">
                        <input
                            type="text" placeholder="Buscar por nombre..."
                            className={`w-full border p-3 rounded-xl outline-none transition-all text-sm ${isDarkMode ? 'bg-[#161b30] border-white/5 text-slate-300' : 'bg-slate-100'}`}
                            value={busqueda} onChange={(e) => { setBusqueda(e.target.value); setPaginaActual(1); }}
                        />
                    </div>
                    <button onClick={() => setIsModalOpen(true)} className="bg-[#00C1A3] text-[#050335] px-5 py-2.5 rounded-xl font-black text-sm flex items-center gap-2 shadow-[0_0_15px_rgba(0,193,163,0.2)]">
                        <UserPlus size={18} /> Nuevo Usuario
                    </button>
                    {isTutorialActive && currentStep === 1 && (
                        <TutorialCard step={steps[1]} onNext={nextStep} onSkip={() => setIsTutorialActive(false)} totalSteps={steps.length} currentIdx={currentStep} position="bottom" />
                    )}
                </div>

                {/* TABLA PRINCIPAL (PASO 3) */}
                <div className={`relative transition-all duration-500 ${isTutorialActive && currentStep === 2 ? 'scale-[1.01]' : ''}`}>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className={`text-[10px] uppercase font-black border-b ${isDarkMode ? 'text-slate-500 border-white/5' : 'text-slate-400'}`}>
                                <th className="pb-4 pl-4">Folio</th>
                                <th className="pb-4">Usuario</th>
                                <th className="pb-4">Correo</th>
                                <th className="pb-4">Rol</th>
                                <th className="pb-4 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuariosVisibles.map((user) => (
                                <motion.tr layout key={user.id} className={`border-b last:border-0 ${isDarkMode ? 'border-white/5' : 'border-slate-50'}`}>
                                    <td className="py-5 pl-4 text-sm font-bold text-slate-400">#{user.id}</td>
                                    <td className="py-5 text-sm font-black">{user.nombre}</td>
                                    <td className="py-5 text-sm text-slate-400">{user.email}</td>
                                    <td className="py-5">
                                        <span className={`px-3 py-1 rounded-lg text-[10px] font-bold ${user.rol === 'Administrador' ? 'bg-blue-500/10 text-blue-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                                            {user.rol === 'Administrador' ? 'Admin' : 'Usuario'}
                                        </span>
                                    </td>
                                    <td className="py-5 text-center">
                                        <div className="flex gap-4 justify-center">
                                            <button onClick={() => abrirEditor(user)} className="text-blue-500/70 hover:text-blue-400"><Edit size={18} /></button>
                                            <button onClick={() => intentarEliminar(user)} className="text-red-500/70 hover:text-red-400"><Trash2 size={18} /></button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                    {isTutorialActive && currentStep === 2 && (
                        <TutorialCard step={steps[2]} onNext={nextStep} onSkip={() => setIsTutorialActive(false)} totalSteps={steps.length} currentIdx={currentStep} position="top" />
                    )}
                </div>

                {/* PAGINACIÓN */}
                <div className="flex justify-center items-center gap-4 mt-8">
                    <button onClick={() => setPaginaActual(prev => Math.max(prev - 1, 1))} disabled={paginaActual === 1} className="text-[10px] font-black uppercase tracking-widest opacity-50">← Anterior</button>
                    <div className={`px-6 py-2 rounded-2xl border ${isDarkMode ? 'bg-[#050335] border-[#00C1A3]/30' : 'bg-white'}`}>
                        <span className="text-[#00C1A3] font-black text-sm">{paginaActual} de {totalPaginas}</span>
                    </div>
                    <button onClick={() => setPaginaActual(prev => Math.min(prev + 1, totalPaginas))} disabled={paginaActual === totalPaginas} className="text-[10px] font-black uppercase tracking-widest opacity-50">Siguiente →</button>
                </div>
            </div>

            {/* TARJETAS PERMISOS (PASO 4) */}
            <div className={`relative mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ${
                isTutorialActive && currentStep === 3 ? 'z-[130] scale-[1.02]' : 'z-0'
            }`}>
                <div className={`border p-6 rounded-[2.5rem] ${isDarkMode ? 'bg-purple-500/5 border-purple-500/20' : 'bg-purple-50'}`}>
                    <h4 className="text-purple-400 font-bold flex items-center gap-2 mb-3 uppercase text-xs">
                        <ShieldCheck size={18} /> Administrador
                    </h4>
                    <p className="text-[11px] leading-relaxed italic text-slate-400">"Control total del sistema e inventarios."</p>
                </div>

                <div className={`border p-6 rounded-[2.5rem] ${isDarkMode ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50'}`}>
                    <h4 className="text-blue-400 font-bold flex items-center gap-2 mb-3 uppercase text-xs">
                        <ShieldAlert size={18} /> Usuario Regular
                    </h4>
                    <p className="text-[11px] leading-relaxed italic text-slate-400">"Operación de ventas y consulta de stock."</p>
                </div>
                {isTutorialActive && currentStep === 3 && (
                    <TutorialCard step={steps[3]} onNext={nextStep} onSkip={() => setIsTutorialActive(false)} totalSteps={steps.length} currentIdx={currentStep} position="top" />
                )}
            </div>

            {/* MODALES Y ALERTAS (No se tocan para mantener lógica íntegra) */}
            <AnimatePresence>
                {alerta && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={`fixed bottom-10 right-10 z-[140] px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold border ${alerta.tipo === 'error' ? 'bg-red-500/10 border-red-500 text-red-500' : 'bg-emerald-500/10 border-emerald-500 text-emerald-500'}`}>
                        {alerta.tipo === 'error' ? <XCircle size={20} /> : <Check size={20} />} {alerta.msg}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ... Modal Registro y Edición se mantienen igual ... */}
        </div>
    );
};