import Link from "next/link";

function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                <header>
                    <ul>
                        <li><Link href="/">Главная</Link></li>
                        <li><Link href="/restaurants">Рестораны</Link></li>
                    </ul>
                </header>
                <div>{children}</div>
                <footer>Footer</footer>
            </body>
        </html>
    );
}

export default RootLayout;
