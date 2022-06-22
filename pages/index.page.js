import Head from "next/head";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { Input, Button } from "../component";
import Link from "next/link";

export default function Login() {
  return (
    <div className="container">
      <Head>
        <title>Bibliotech</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
        <script
          src="https://kit.fontawesome.com/be0d0071ae.js"
          crossOrigin="anonymous"
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <header className="login-header">
          <Image src={logo} width={200} height={200} />
          <p>
            Biblio<span>tech</span>
          </p>
        </header>
        <form className="login-form">
          <Input label="Matrícula" />
          <Input label="Senha" />
          <Link href="/main">
            <Button type="button" label="acessar" />
          </Link>
          <p className="forgot">Esqueceu sua senha?</p>
        </form>
      </main>
    </div>
  );
}
