import './App.css';
import HelloWorld from "./components/HelloWorld";
import SlickSlider from "./components/SlickSlider";
import Slider from "react-slick";
//<HelloWorld msg={"Hello from Tailwind inside ReactJS"}/>

function App() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
      <div className="App">
          <HelloWorld msg={"Hello from Tailwind inside ReactJS"}/>
      </div>
  );
}

export default App;
