import React from 'react';
import '../App.css'; 

function CV() {
    return (
        <div>
            {/* Header */}
            <header>
                <h1 id="titulo">David Arturo Arroyave Pérez</h1>
                <img src="https://i.pinimg.com/originals/38/5b/e3/385be34089fae7043a868e8cf1f9b4f3.jpg" width="150" alt="Foto de David Arturo Arroyave Pérez" />
            </header>

            {/* Contenido Principal */}
            <main className="grid-container">
                {/* Sobre mí */}
                <section className="grid-item about-me">
                    <h2>Sobre mí</h2>
                    <p>Desarrollador de software junior con una sólida base en Java.
                        Apasionado por aprender nuevas tecnologías y crear soluciones innovadoras. <br />
                        Busco una oportunidad para aplicar mis conocimientos en un entorno colaborativo y dinámico.
                    </p>
                </section>

                {/* Experiencia Laboral */}
                <section className="grid-item experience">
                    <h2>Experiencia Laboral</h2>
                    <article>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, vitae! Officia rerum porro iusto fuga exercitationem nostrum,
                            hic in molestias tempore at blanditiis, nisi illo recusandae amet eos enim. Inventore.</p>
                    </article>
                </section>

                {/* Experiencia Académica */}
                <section className="grid-item education">
                    <h2>Experiencia Académica</h2>
                    <article>
                        <p>Actualmente me encuentro cursando la carrera de Tecnología en Informática en la Universidad de Caldas. Durante mi formación secundaria en el Instituto Técnico Francisco José de Caldas, adquirí sólidas bases en ciencias exactas que me permitieron desarrollar un fuerte interés por la programación y la tecnología.</p>
                    </article>
                </section>

                {/* Aptitudes */}
                <section className="grid-item skills">
                    <h2>Aptitudes</h2>
                    <ul>
                        <li><strong>Desarrollo Web:</strong> HTML5, CSS, JavaScript</li>
                        <li><strong>Backend:</strong> Java, Python, SQL</li>
                        <li><strong>Herramientas:</strong> Git, GitHub, Visual Studio Code, Figma</li>
                        <li><strong>Habilidades Blandas:</strong> Resolución de problemas, trabajo en equipo, aprendizaje continuo</li>
                    </ul>
                </section>

                {/* Hobbies */}
                <aside className="grid-item hobbies">
                    <h2>Hobbies</h2>
                    <article>
                        <h3>Desarrollo personal</h3>
                        <ul>
                            <li>Me apasiona el aprendizaje continuo y estoy siempre buscando nuevas oportunidades para ampliar mis conocimientos en el ámbito tecnológico.</li>
                            <li>Disfruto de la lectura, los cursos online y la experimentación con nuevas herramientas.</li>
                        </ul>
                    </article>
                    <article>
                        <h3>Intereses personales</h3>
                        <ul>
                            <li>En mi tiempo libre, me gusta mantenerme activo practicando deporte y también me gusta el mundo de los videojuegos.</li>
                            <li>Además, soy un entusiasta de la tecnología y sigo de cerca las últimas tendencias del sector.</li>
                        </ul>
                    </article>
                </aside>

                {/* Contacto */}
                <section className="grid-item contact">
                    <h2>Contáctame</h2>
                    <form>
                        <p><label htmlFor="asunto">Asunto:</label>
                            <input type="text" id="asunto" name="asunto" placeholder="Escriba el asunto" /></p>
                        <p><label htmlFor="correo">Correo:</label>
                            <input type="email" id="correo" name="correo" placeholder="Escriba su correo" /></p>
                        <p><label htmlFor="mensaje">Mensaje:</label>
                            <textarea cols="50" rows="10" name="mensaje" id="mensaje" placeholder="Escriba aquí su mensaje"></textarea></p>
                        <button type="submit">Enviar</button>
                    </form>
                </section>
            </main>

            {/* Footer */}
            <footer>
                <p>&copy; 2024 David Arturo Arroyave Pérez. Todos los derechos reservados.</p>
                <a href="#titulo">Ir al inicio</a>
            </footer>
        </div>
    );
}

export default CV;
