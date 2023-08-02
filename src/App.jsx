import Ancestral from "./components/ancestral/Ancestral";
import Discount from "./components/discounts/Discount";
import Footer from "./components/footer/Footer";
import Pigments from "./components/pigments/Pigments";

const App = () => {
  return (
    <div className="my-32 ">
      <Ancestral />
      <div className="m-32"></div>
      <Pigments />
      <div className="m-32"></div>
      <Discount />
      <div className="m-32"></div>
      <Footer />
      <div className="m-32"></div>
    </div>
  );
};

export default App;
