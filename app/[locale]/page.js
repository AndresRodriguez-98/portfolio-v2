'use server';

import initTranslations from "../i18n";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import TranslationsProvider from "./components/TranslationsProvider";
import Work from "./components/Work";

const i18nNamespaces = ['Navbar', 'Header', 'About', 'Services', 'Work', 'Contact', 'Footer'];

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }]; // Agregá más idiomas si tenés
}

export default async function Home(props) {

  const params = await props.params;
  // params.locale es el idioma actual, por ejemplo 'en' o 'es'
  const { locale } = params;
  // Inicializamos las traducciones para el idioma actual
  // y cargamos los namespaces necesarios
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      <Navbar />
      <Header />
      <About locale={locale} />
      <Services locale={locale} />
      <Work locale={locale} />
      <Contact />
      <Footer />
    </TranslationsProvider>
  );
}
