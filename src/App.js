import TodoContainer from "./components/TodoContainer";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <TodoContainer />
    </Router>
  );
}
