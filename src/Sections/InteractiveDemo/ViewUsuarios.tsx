import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Users, UserPlus, Search, ShieldCheck, ShieldAlert,
    Edit, Trash2, Check, XCircle, Sun, Moon, User, Eye, EyeOff, ChevronDown
} from "lucide-react";

export const ViewUsuarios = () => {
    const [busqueda, setBusqueda] = useState("");
    const [sugerencias, setSugerencias] = useState<string[]>([]);
    const [alerta, setAlerta] = useState<{ tipo: 'error' | 'success', msg: string } | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: '', email: '', rol: 'Usuario Regular' });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [usuarioAEditar, setUsuarioAEditar] = useState<any>(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // --- LÓGICA DE PAGINACIÓN ---
    const [paginaActual, setPaginaActual] = useState(1);
    const usuariosPorPagina = 3;

    const [usuarios, setUsuarios] = useState([
        { id: 1, nombre: "Admin Nedimi", email: "admin@nedimi.com", rol: "Administrador", status: "Activo" },
        { id: 2, nombre: "Vendedor", email: "juan.vendedor@mail.com", rol: "Usuario Regular", status: "Activo" },
        { id: 3, nombre: "Temporal Pruebas", email: "test@mail.com", rol: "Usuario Regular", status: "Inactivo" },
        { id: 4, nombre: "Nuevo Operador", email: "operador@nedimi.com", rol: "Usuario Regular", status: "Activo" },
    ]);

    // Bloquear scroll cuando el modal está abierto
    useEffect(() => {
        if (isModalOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isModalOpen]);

    // Filtrado en tiempo real para la tabla
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
            const filtrados = usuarios
                .filter(u => u.nombre.toLowerCase().includes(busqueda.toLowerCase()))
                .map(u => u.nombre);
            setSugerencias(filtrados);
        } else { setSugerencias([]); }
    }, [busqueda, usuarios]);

    const intentarEliminar = (user: any) => {
        // CAMBIO: Ahora validamos por el NOMBRE exacto, no por el rol.
        if (user.nombre === "Admin Nedimi") {
            setAlerta({
                tipo: 'error',
                msg: "Restricción: El perfil de 'Admin Nedimi' es del sistema y no se puede borrar."
            });
        } else {
            setAlerta({ tipo: 'success', msg: `Usuario ${user.nombre} eliminado correctamente.` });
            setTimeout(() => setUsuarios(usuarios.filter(u => u.id !== user.id)), 500);
        }
        setTimeout(() => setAlerta(null), 3000);
    };

    const abrirEditor = (user: any) => {
        setUsuarioAEditar({ ...user });
        setIsEditModalOpen(true);
    };

    const handleGuardarEdicion = (e: React.FormEvent) => {
        e.preventDefault();

        // Evitar que el Admin principal deje de ser Admin
        if (usuarioAEditar.nombre === "Admin Nedimi" && usuarioAEditar.rol !== "Administrador") {
            setAlerta({
                tipo: 'error',
                msg: "Seguridad: No puedes quitarle el rol de Administrador a este perfil."
            });
            return;
        }

        setUsuarios(usuarios.map(u => u.id === usuarioAEditar.id ? usuarioAEditar : u));
        setIsEditModalOpen(false);
        setAlerta({ tipo: 'success', msg: "¡Usuario actualizado con éxito!" });
        setTimeout(() => setAlerta(null), 3000);
    };

    const handleCrearUsuario = (e: React.FormEvent) => {
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

            {/* HEADER */}
            <div className={`flex justify-between items-center mb-6 px-8 py-4 rounded-[2rem] border backdrop-blur-md transition-all duration-500 ${isDarkMode
                ? 'bg-[#0a0f1d]/60 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
                : 'bg-white/70 border-slate-200 shadow-xl shadow-slate-200/50'
                }`}>
                <div className="flex flex-col">
                    <span className={`text-[10px] uppercase tracking-[0.2em] font-black mb-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Módulo de Control</span>
                    <h1 className="text-[#00C1A3] text-2xl font-black tracking-tight flex items-center gap-3">
                        <Users size={24} /> Usuarios
                    </h1>
                </div>
                <div className="flex items-center gap-6">
                    <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2.5 rounded-2xl transition-all hover:scale-110 active:scale-95 ${isDarkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-100 hover:bg-slate-200'}`}>
                        {isDarkMode ? <Sun size={22} className="text-yellow-400 fill-yellow-400/20" /> : <Moon size={22} className="text-indigo-600 fill-indigo-600/10" />}
                    </button>
                    <div className="flex items-center gap-4 pl-6 border-l border-white/10">
                        <div className="flex flex-col items-end">
                            <span className={`text-[10px] uppercase font-black ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Sesión activa</span>
                            <span className={`text-sm font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>Admin Nedimi</span>
                        </div>
                        <div className="w-10 h-10 rounded-2xl bg-[#00C1A3] flex items-center justify-center shadow-[0_0_15px_rgba(0,193,163,0.3)]">
                            <User size={20} className="text-[#050335]" fill="currentColor" />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECCIÓN GESTIÓN */}
            <div className={`inline-flex items-center mb-8 px-6 py-2 rounded-full border transition-all duration-500 ${isDarkMode ? 'bg-white/5 border-white/5' : 'bg-[#00C1A3]/10 border-[#00C1A3]/20'}`}>
                <h2 className="text-[#00C1A3] text-sm font-black uppercase tracking-widest">Gestión de Usuarios</h2>
            </div>

            {/* CONTENEDOR DE TABLA */}
            <div className={`border transition-all duration-500 rounded-[2.5rem] p-8 shadow-2xl ${isDarkMode ? 'bg-[#0f1221] border-white/5' : 'bg-white border-slate-200'}`}>
                <div className="flex justify-between items-center mb-8 gap-4">
                    <div className="relative flex-1 max-w-xs">
                        <input
                            type="text"
                            placeholder="Buscar por nombre..."
                            className={`w-full border p-3 rounded-xl outline-none transition-all text-sm ${isDarkMode ? 'bg-[#161b30] border-white/5 text-slate-300 focus:border-[#00C1A3]/50' : 'bg-slate-100 border-slate-200 text-slate-700 focus:border-[#00C1A3]'}`}
                            value={busqueda}
                            onChange={(e) => {
                                setBusqueda(e.target.value);
                                setPaginaActual(1);
                            }}
                        />

                        <AnimatePresence>
                            {sugerencias.length > 0 && busqueda !== sugerencias[0] && (
                                <motion.ul
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className={`absolute z-50 w-full mt-2 rounded-xl border shadow-2xl overflow-hidden ${isDarkMode ? 'bg-[#161b30] border-white/10' : 'bg-white border-slate-200'}`}
                                >
                                    {sugerencias.map((nombre, index) => (
                                        <li
                                            key={index}
                                            onClick={() => {
                                                setBusqueda(nombre);
                                                setSugerencias([]);
                                            }}
                                            className={`px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center gap-2 ${isDarkMode ? 'hover:bg-[#00C1A3]/20 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}
                                        >
                                            <Search size={14} className="text-[#00C1A3]" />
                                            {nombre}
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#00C1A3] text-[#050335] px-5 py-2.5 rounded-xl font-black text-sm flex items-center gap-2 hover:brightness-110 transition-all shadow-[0_0_15px_rgba(0,193,163,0.2)]"
                    >
                        <UserPlus size={18} /> Nuevo Usuario
                    </button>
                </div>

                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className={`text-[10px] uppercase tracking-[0.15em] font-black border-b transition-colors ${isDarkMode ? 'text-slate-500 border-white/5' : 'text-slate-400 border-slate-100'}`}>
                            <th className="pb-4 pl-4">Folio</th>
                            <th className="pb-4">Usuario</th>
                            <th className="pb-4">Correo</th>
                            <th className="pb-4">Rol</th>
                            <th className="pb-4 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuariosVisibles.map((user) => (
                            <motion.tr layout key={user.id} className={`border-b last:border-0 group transition-colors ${isDarkMode ? 'border-white/5' : 'border-slate-50'}`}>
                                <td className="py-5 pl-4 text-sm font-bold text-slate-400">#{user.id}</td>
                                <td className={`py-5 text-sm font-black transition-colors ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>{user.nombre}</td>
                                <td className="py-5 text-sm text-slate-400">{user.email}</td>
                                <td className="py-5">
                                    <span className={`px-3 py-1 rounded-lg text-[10px] font-bold ${user.rol === 'Administrador' ? 'bg-blue-500/10 text-blue-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                                        {user.rol === 'Administrador' ? 'Admin' : 'Usuario'}
                                    </span>
                                </td>
                                <td className="py-5">
                                    <div className="flex gap-4 justify-center">
                                        <button
                                            onClick={() => abrirEditor(user)}
                                            className="text-blue-500/70 hover:text-blue-400 transition-colors"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button onClick={() => intentarEliminar(user)} className="text-red-500/70 hover:text-red-400 transition-colors"><Trash2 size={18} /></button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>

                {/* PAGINACIÓN */}
                <div className="flex justify-center items-center gap-4 mt-8">
                    <button
                        onClick={() => setPaginaActual(prev => Math.max(prev - 1, 1))}
                        disabled={paginaActual === 1}
                        className={`group flex items-center gap-2 px-5 py-2.5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 border ${paginaActual === 1 ? 'opacity-20 cursor-not-allowed border-transparent text-slate-500' : isDarkMode ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-[#00C1A3] hover:text-[#050335] hover:border-[#00C1A3] shadow-lg shadow-black/20' : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-[#00C1A3] hover:text-white hover:border-[#00C1A3] shadow-md'}`}
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Anterior
                    </button>

                    <div className={`px-6 py-2.5 rounded-2xl border flex items-center gap-2 transition-all duration-500 ${isDarkMode ? 'bg-[#050335] border-[#00C1A3]/30 shadow-[inset_0_0_10px_rgba(0,193,163,0.1)]' : 'bg-white border-slate-200 shadow-sm'}`}>
                        <span className={`text-[10px] font-black uppercase tracking-tighter ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Página</span>
                        <span className="text-[#00C1A3] font-black text-sm">{paginaActual}</span>
                        <span className={`text-[10px] font-black uppercase tracking-tighter ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>de {totalPaginas}</span>
                    </div>

                    <button
                        onClick={() => setPaginaActual(prev => Math.min(prev + 1, totalPaginas))}
                        disabled={paginaActual === totalPaginas}
                        className={`group flex items-center gap-2 px-5 py-2.5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 border ${paginaActual === totalPaginas ? 'opacity-20 cursor-not-allowed border-transparent text-slate-500' : isDarkMode ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-[#00C1A3] hover:text-[#050335] hover:border-[#00C1A3] shadow-lg shadow-black/20' : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-[#00C1A3] hover:text-white hover:border-[#00C1A3] shadow-md'}`}
                    >
                        Siguiente <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>

            {/* TARJETAS DE PERMISOS */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ y: -5 }} className={`border p-6 rounded-[2.5rem] transition-all duration-500 ${isDarkMode ? 'bg-purple-500/5 border-purple-500/20' : 'bg-purple-50 border-purple-100'}`}>
                    <h4 className="text-purple-400 font-bold flex items-center gap-2 mb-3 uppercase text-xs tracking-tighter">
                        <ShieldCheck size={18} /> Administrador
                    </h4>
                    <p className={`text-[11px] leading-relaxed font-medium italic transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        "Control total del sistema. Capacidad para gestionar inventarios y configurar parámetros de seguridad."
                    </p>
                </motion.div>

                <motion.div whileHover={{ y: -5 }} className={`border p-6 rounded-[2.5rem] transition-all duration-500 ${isDarkMode ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50 border-blue-100'}`}>
                    <h4 className="text-blue-400 font-bold flex items-center gap-2 mb-3 uppercase text-xs tracking-tighter">
                        <ShieldAlert size={18} /> Usuario Regular
                    </h4>
                    <p className={`text-[11px] leading-relaxed font-medium italic transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        "Enfocado en la operación de ventas. Acceso a facturación y consulta de stock."
                    </p>
                </motion.div>
            </div>

            {/* ALERTAS */}
            <AnimatePresence>
                {alerta && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className={`fixed bottom-10 right-10 z-[110] px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold border ${alerta.tipo === 'error' ? 'bg-red-500/10 border-red-500 text-red-500' : 'bg-emerald-500/10 border-emerald-500 text-emerald-500'}`}
                    >
                        {alerta.tipo === 'error' ? <XCircle size={20} /> : <Check size={20} />}
                        {alerta.msg}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MODAL REGISTRAR USUARIO */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-[#050335]/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className={`relative w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl ${isDarkMode ? 'bg-[#0a0f1d] border border-white/10' : 'bg-white border border-slate-200'}`}
                        >
                            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 p-2 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all">
                                <XCircle size={20} />
                            </button>

                            <h2 className={`text-2xl font-black mb-8 ${isDarkMode ? 'text-white' : 'text-[#050335]'}`}>Registrar Usuario</h2>

                            <form onSubmit={handleCrearUsuario} className="space-y-4">
                                <input
                                    type="text" placeholder="Nombre completo" required
                                    className={`w-full p-4 rounded-2xl outline-none border transition-all ${isDarkMode ? 'bg-white/5 border-white/10 text-white focus:border-[#00C1A3]' : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-[#00C1A3]'}`}
                                    onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })}
                                />
                                <input
                                    type="email" placeholder="Correo electrónico" required
                                    className={`w-full p-4 rounded-2xl outline-none border transition-all ${isDarkMode ? 'bg-white/5 border-white/10 text-white focus:border-[#00C1A3]' : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-[#00C1A3]'}`}
                                    onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, email: e.target.value })}
                                />
                                <div className="relative">
                                    <input
                                        type={passwordVisible ? "text" : "password"} placeholder="Contraseña" required
                                        className={`w-full p-4 rounded-2xl outline-none border transition-all ${isDarkMode ? 'bg-white/5 border-white/10 text-white focus:border-[#00C1A3]' : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-[#00C1A3]'}`}
                                    />
                                    <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#00C1A3] transition-colors">
                                        {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>

                                <div className="relative">
                                    <select
                                        className={`w-full p-4 rounded-2xl outline-none border appearance-none transition-all cursor-pointer ${isDarkMode ? 'bg-white/5 border-white/10 text-white focus:border-[#00C1A3]' : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-[#00C1A3]'}`}
                                        onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, rol: e.target.value })}
                                    >
                                        <option value="Usuario Regular" className={isDarkMode ? "bg-[#0a0f1d]" : "bg-white"}>Usuario Regular</option>
                                        <option value="Administrador" className={isDarkMode ? "bg-[#0a0f1d]" : "bg-white"}>Administrador</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#00C1A3]">
                                        <ChevronDown size={20} />
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button type="button" onClick={() => setIsModalOpen(false)} className={`flex-1 py-4 font-bold rounded-2xl transition-all ${isDarkMode ? 'text-slate-400 hover:bg-white/5' : 'text-slate-500 hover:bg-slate-100'}`}>
                                        Cancelar
                                    </button>
                                    <button type="submit" className="flex-1 py-4 bg-[#00C1A3] text-[#050335] font-black rounded-2xl hover:brightness-110 shadow-lg shadow-[#00C1A3]/20 transition-all">
                                        Crear Usuario
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* MODAL EDITAR USUARIO */}
            <AnimatePresence>
                {isEditModalOpen && usuarioAEditar && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsEditModalOpen(false)}
                            className="absolute inset-0 bg-[#050335]/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className={`relative w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl ${isDarkMode ? 'bg-[#0a0f1d] border border-white/10' : 'bg-white border border-slate-200'}`}
                        >
                            <h2 className={`text-2xl font-black mb-8 ${isDarkMode ? 'text-white' : 'text-[#050335]'}`}>Editar Perfil</h2>
                            <form onSubmit={handleGuardarEdicion} className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase font-black ml-2 text-slate-500">Nombre Completo</label>
                                    <input
                                        type="text" value={usuarioAEditar.nombre}
                                        onChange={(e) => setUsuarioAEditar({ ...usuarioAEditar, nombre: e.target.value })}
                                        className={`w-full p-4 rounded-2xl outline-none border transition-all ${isDarkMode ? 'bg-white/5 border-white/10 text-white focus:border-[#00C1A3]' : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-[#00C1A3]'}`}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase font-black ml-2 text-slate-500">Email de Contacto</label>
                                    <input
                                        type="email" value={usuarioAEditar.email}
                                        onChange={(e) => setUsuarioAEditar({ ...usuarioAEditar, email: e.target.value })}
                                        className={`w-full p-4 rounded-2xl outline-none border transition-all ${isDarkMode ? 'bg-white/5 border-white/10 text-white focus:border-[#00C1A3]' : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-[#00C1A3]'}`}
                                    />
                                </div>

                                {/* NUEVO: SELECTOR DE ROL */}
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase font-black ml-2 text-slate-500">Rol de Usuario</label>
                                    <div className="relative">
                                        <select
                                            value={usuarioAEditar.rol}
                                            onChange={(e) => setUsuarioAEditar({ ...usuarioAEditar, rol: e.target.value })}
                                            className={`w-full p-4 rounded-2xl outline-none border appearance-none transition-all cursor-pointer ${isDarkMode ? 'bg-white/5 border-white/10 text-white focus:border-[#00C1A3]' : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-[#00C1A3]'}`}
                                        >
                                            <option value="Usuario Regular" className={isDarkMode ? "bg-[#0a0f1d]" : "bg-white"}>Usuario Regular</option>
                                            <option value="Administrador" className={isDarkMode ? "bg-[#0a0f1d]" : "bg-white"}>Administrador</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#00C1A3]">
                                            <ChevronDown size={20} />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-6">
                                    <button type="button" onClick={() => setIsEditModalOpen(false)} className={`flex-1 py-4 font-bold rounded-2xl transition-all ${isDarkMode ? 'text-slate-400 hover:bg-white/5' : 'text-slate-500 hover:bg-slate-100'}`}>
                                        Cancelar
                                    </button>
                                    <button type="submit" className="flex-1 py-4 bg-[#00C1A3] text-[#050335] font-black rounded-2xl shadow-lg shadow-[#00C1A3]/20 hover:brightness-110 transition-all">
                                        Guardar
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};