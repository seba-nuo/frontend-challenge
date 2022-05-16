import Nav from "./Layouts/Nav";
import Hero from "./Layouts/Hero";
import BestSeller from "./Layouts/BestSeller";
import Newsletter from "./Layouts/Newsletter";
import Footer from "./Layouts/Footer";
import { CartQuantityProvider } from './Services/CartContext'

function App() {

  return (
    <CartQuantityProvider>
      <Nav />
      <Hero />
      <BestSeller />
      <Newsletter />
      <Footer />
    </CartQuantityProvider>
  );
}

export default App;
