import Nav from "./Layouts/Nav";
// import Search from "./Layouts/Search";
import Hero from "./Layouts/Hero";
import BestSeller from "./Layouts/BestSeller";
import Newsletter from "./Layouts/Newsletter";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Search /> */}
      <Hero />
      <BestSeller />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
