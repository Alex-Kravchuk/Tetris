import "./styles/index.scss";
import LeftDecoration from "./decorComponents/LeftDecoration";
import RightDecoration from "./decorComponents/RightDecoration";
import BottomDecoration from "./decorComponents/BottomDecoration";
import App from "./App/App";

function Wrapper() {
  return (
    <div className="wrapper">
     <LeftDecoration/>
     <RightDecoration/>
     <App/>
     <BottomDecoration/>
    </div>
  );
}

export default Wrapper;
