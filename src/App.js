import INITIAL_LIST from "./data/initialList";
import Checklist from "./components/Checklist/Checklist";

function App() {
  return <Checklist list={INITIAL_LIST} />;
}

export default App;
