import ModalBox from "./Components/ModalBox";
import ModalImages from "./Components/ModalImages";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ModalBox slides={ModalImages} />
    </div>
  );
}
