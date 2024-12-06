// pages/index.js
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <section className="hero">
                    <h1>Bienvenido a nuestra iglesia</h1>
                    <p>Estamos felices de tenerte aquí. ¡Conéctate y crece con nosotros!</p>
                </section>
                <section className="content">
                    <h2>Próximos Eventos</h2>
                    <p>Ven y únete a nuestras actividades semanales.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
}
