import Ancestral from "./components/ancestral/Ancestral";
import Discount from "./components/discounts/Discount";
import Pigments from "./components/pigments/Pigments";

const App = () => {
  return (
    <div className="my-32 ">
      <div className="flex flex-col gap-20">
        <Ancestral />
        <Pigments />
        <Discount/>
      </div>
    </div>
  );
};

export default App;
