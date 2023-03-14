import { ResourceList } from "./component/resource-list";
import { ResourceCanvas } from "./component/resource-canvas";
import "./index.css";

function App() {
  return (
    <div className="flex flex-1 flex-row flex-grow">
      <ResourceList />
      <ResourceCanvas />
    </div>
  );
}

export default App;
