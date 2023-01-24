import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/sections/Header";
import MainHeader from "../components/sections/MainHeader";
import AboutUs from "../components/sections/AboutUs";
import FrontStroke from "../components/FrontStroke";
import ProgTechs from "../components/sections/ProgTechs";
import Steps from "../components/sections/Steps";
import FAQs from "../components/sections/FAQs";
import Reviews from "../components/sections/Reviews";
import Gallery from "../components/sections/Gallery";
import ContactUs from "../components/sections/ContactUs";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Front-End Developer Cources</title>
        <meta
          name="description"
          content="Test Task for Webtronics React Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bgRectangle}>
        <div className={styles.bgStars}>
          <div className={styles.content}>
            <header>
              <Header />
            </header>
            <main>
              <header>
                <MainHeader />
              </header>
              <section>
                <AboutUs />
              </section>
              <section>
                <ProgTechs />
              </section>
              <FrontStroke />
              <section>
                <Steps />
              </section>
              <section>
                <FAQs />
              </section>
              <section>
                <Reviews />
              </section>
              <section>
                <Gallery />
              </section>
              <section>
                <ContactUs />
              </section>
            </main>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
