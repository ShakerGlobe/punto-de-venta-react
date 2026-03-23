import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Users, UserPlus, Search, ShieldCheck, ShieldAlert,
    Edit, Trash2, Check, XCircle
} from "lucide-react";

export const ViewUsuarios = () => {
    const [busqueda, setBusqueda] = useState("");
    const [sugerencias, setSugerencias] = useState<string[]>([]);
    const [alerta, setAlerta] = useState<{ tipo: 'error' | 'success', msg: string } | null>(null);

    // Lista de usuarios de ejemplo para la DEMO
    const [usuarios, setUsuarios] = useState([
        { id: 1, nombre: "Admin Nedimi", email: "admin@nedimi.com", rol: "Administrador", status: "Activo" },
        { id: 2, nombre: "Juan Vendedor", email: "juan.vendedor@mail.com", rol: "Usuario Regular", status: "Activo" },
        { id: 3, nombre: "Temporal Pruebas", email: "test@mail.com", rol: "Usuario Regular", status: "Inactivo" },
    ]);

    // Búsqueda Predictiva
    useEffect(() => {
        if (busqueda.length > 1) {
            const filtrados = usuarios
                .filter(u => u.nombre.toLowerCase().includes(busqueda.toLowerCase()))
                .map(u => u.nombre);
            setSugerencias(filtrados);
        } else { setSugerencias([]); }
    }, [busqueda, usuarios]); // Añadido usuarios a las dependencias para evitar warnings

    // Función para simular eliminación
    const intentarEliminar = (user: any) => {
        if (user.rol === "Administrador") {
            setAlerta({ tipo: 'error', msg: "Seguridad: No puedes eliminar al administrador principal." });
        } else {
            setAlerta({ tipo: 'success', msg: `Usuario ${user.nombre} eliminado correctamente.` });
            // Simular borrado en la UI
            setTimeout(() => {
                setUsuarios(usuarios.filter(u => u.id !== user.id));
            }, 500);
        }
        setTimeout(() => setAlerta(null), 3000);
    };

    return (
        <div className="p-8 h-full overflow-y-auto custom-scroll relative">

            {/* ALERTAS DINÁMICAS (Simulación de backend) */}
            <AnimatePresence>
                {alerta && (
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 20, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-bold text-sm ${alerta.tipo === 'error' ? 'bg-red-500 text-white' : 'bg-emerald-500 text-white'
                            }`}
                    >
                        {alerta.tipo === 'error' ? <XCircle /> : <Check />}
                        {alerta.msg}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-black text-white flex items-center gap-3">
                        <Users className="text-[#00C1A3]" /> Usuarios del Sistema
                    </h1>
                    <p className="text-slate-400 text-sm">Gestiona niveles de acceso y seguridad</p>
                </div>
                <button className="bg-[#00C1A3] text-[#050335] px-6 py-3 rounded-2xl font-black flex items-center gap-2 hover:scale-105 transition-all">
                    <UserPlus size={20} /> NUEVO USUARIO
                </button>
            </div>

            {/* Buscador */}
            <div className="max-w-md mb-10 relative">
                <div className="relative z-20">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Empieza a escribir un nombre..."
                        className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl outline-none focus:border-[#00C1A3] text-white"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </div>

                {/* Sugerencias */}
                <AnimatePresence>
                    {sugerencias.length > 0 && (
                        <motion.div className="absolute w-full bg-[#0a084d] border border-white/10 mt-2 rounded-xl shadow-2xl z-30 overflow-hidden">
                            {sugerencias.map((s, i) => (
                                <button key={i} onClick={() => { setBusqueda(s); setSugerencias([]); }} className="w-full text-left p-3 text-sm text-slate-300 hover:bg-[#00C1A3] hover:text-[#050335] transition-colors flex items-center gap-2">
                                    <Users size={14} /> {s}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Tabla de Usuarios */}
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-white/5 text-[10px] uppercase tracking-widest text-[#00C1A3] font-black">
                            <th className="p-6">Identidad</th>
                            <th className="p-6">Rol de Acceso</th>
                            <th className="p-6">Estado</th>
                            <th className="p-6 text-right">Acciones de Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((user) => (
                            <motion.tr layout key={user.id} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors group">
                                <td className="p-6">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-white group-hover:text-[#00C1A3] transition-colors">{user.nombre}</span>
                                        <span className="text-xs text-slate-500">{user.email}</span>
                                    </div>
                                </td>
                                <td className="p-6">
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold ${user.rol === 'Administrador' ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'
                                        }`}>
                                        {user.rol === 'Administrador' ? <ShieldCheck size={12} /> : <ShieldAlert size={12} />}
                                        {user.rol}
                                    </div>
                                </td>
                                <td className="p-6">
                                    <span className={`text-[10px] font-bold ${user.status === 'Activo' ? 'text-emerald-500' : 'text-slate-500'}`}>
                                        ● {user.status}
                                    </span>
                                </td>
                                <td className="p-6 text-right">
                                    <div className="flex gap-2 justify-end relative">
                                        <button className="p-2 hover:bg-white/10 rounded-lg text-slate-400"><Edit size={16} /></button>
                                        <button
                                            onClick={() => intentarEliminar(user)}
                                            className="p-2 hover:bg-red-500/20 rounded-lg text-red-400 transition-all"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Panel Explicativo de Permisos */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-500/5 border border-purple-500/20 p-6 rounded-[2rem]">
                    <h4 className="text-purple-400 font-bold flex items-center gap-2 mb-3">
                        <ShieldCheck size={18} /> Administrador
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                        Control total. Puede editar productos, ver reportes de ganancias, gestionar otros usuarios y configurar los datos de la empresa.
                    </p>
                </div>
                <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-[2rem]">
                    <h4 className="text-blue-400 font-bold flex items-center gap-2 mb-3">
                        <ShieldAlert size={18} /> Usuario Regular
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                        Acceso limitado a ventas. No puede borrar registros, editar precios ni acceder a la configuración sensible del sistema.
                    </p>
                </div>
            </div>
        </div>
    );
};