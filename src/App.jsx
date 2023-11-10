import styles from "./styles";
import {
  NavBar,
  Hero,
  Stats,
  Bussiness,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";

const App = () => {
  const { paddingX, boxWidth, flexCenter, flexStart } = styles;
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${paddingX} ${flexCenter}`}>
        <div className={`${boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${flexStart}`}>
        <div className={boxWidth}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${paddingX} ${flexStart}`}>
        <div className={boxWidth}>
          <Stats />
          <Bussiness />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
