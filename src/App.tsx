import Nav from "./Layouts/Nav";
import Hero from "./Layouts/Hero";
import BestSeller from "./Layouts/BestSeller";
import Newsletter from "./Layouts/Newsletter";
import Footer from "./Layouts/Footer";
import { ProductsProvider, SearchProvider } from './Services/Context'

function App() {

  return (
    <ProductsProvider>
      <SearchProvider>
        <Nav />
        <Hero />
        <BestSeller />
        <Newsletter />
        <Footer />
      </SearchProvider>
    </ProductsProvider>
  );
}

export default App;
