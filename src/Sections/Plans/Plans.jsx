import React from "react";
import "./Plans.css";

const Plans = () => {

    const contratarPlan = (plan) => {

        window.location.href =
            `/contratar?plan=${plan}`

    };

    return (

        <section className="plans">

            <div className="plans-header">
                <h2>Planes NEDIMI<span>POS</span></h2>
                <p>Selecciona el plan que mejor se adapte a tu negocio</p>
            </div>

            <div className="plans-container">

                <div className="plan-card">

                    <h3>Mensual</h3>

                    <div className="price">
                        $499 <span>/mes</span>
                    </div>

                    <ul>
                        <li>✔ Sistema completo</li>
                        <li>✔ Soporte técnico</li>
                        <li>✔ Actualizaciones</li>
                        <li>✔ Multi usuarios</li>
                    </ul>

                    <button
                        className="plan-btn"
                        onClick={() => contratarPlan("mensual")}
                    >
                        Contratar
                    </button>

                </div>


                <div className="plan-card featured">

                    <div className="badge">Más popular</div>

                    <h3>Anual</h3>

                    <div className="price">
                        $4997 <span>/año</span>
                    </div>

                    <ul>
                        <li>✔ Sistema completo</li>
                        <li>✔ Soporte técnico</li>
                        <li>✔ Actualizaciones</li>
                        <li>✔ Multi usuarios</li>
                        <li>✔ Ahorra $991</li>
                    </ul>

                    <button
                        className="plan-btn"
                        onClick={() => contratarPlan("anual")}
                    >
                        Contratar
                    </button>

                </div>

            </div>

        </section>

    );

};

export default Plans;