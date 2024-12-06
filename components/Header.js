import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/about">Sobre Nosotros</Link></li>
                    <li><Link href="/eventos">Eventos</Link></li>
                    <li><Link href="/sermones">Sermones</Link></li>
                    <li><Link href="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
}
