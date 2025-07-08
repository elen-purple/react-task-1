import "./App.css";
import { Title } from "./components/Title";
import { GladText } from "./components/GladText";
import { Img } from "./components/Img";
import { WebsiteLink } from "./components/WebsiteLink";
import { SumOutput } from "./components/SumOutput";
import { ColorList } from "./components/ColorList";

const name = "Anna";
const link = {
  href: "https://react.dev/learn",
  text: "React Documentation",
};
const num1 = 2;
const num2 = 3;
const colors = ["Red", "Green", "Blue"];

function App() {
  return (
    <div className="App">
      <Title textContent={name} />
      <GladText textContent="Ласкаво просимо до нашого сайту!" />
      <Img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
        alt="React Logo"
      />
      <WebsiteLink link={link} />
      <SumOutput num1={num1} num2={num2} />
      <ColorList colors={colors} />
    </div>
  );
}

export default App;
