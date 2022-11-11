import Text from "./Components.js/Text";
import Image from "./Components.js/Image";
import Form from "./Components.js/Form";
import Notify from "./Components.js/Notify";
import 'animate.css';
function App() {
  return (
    <div className="App animate__animated animate__zoomIn">
      <div className="Flex animate__animated animate__slideInLeft">
        <Text />
        <Image />
      </div>
      <div className="Flex animate__animated animate__slideInRight">
        <Notify />
        <Form />
      </div>
    </div>
  );
}

export default App;
