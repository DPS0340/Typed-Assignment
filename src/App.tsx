import { ResourceList } from "./component/resource-list";
import { ResourceCanvas } from "./component/resource-canvas";
import { SnackbarProvider } from "notistack";
import "./index.css";

function App() {
  return (
    <SnackbarProvider>
      <div className="flex flex-1 flex-row flex-grow">
        <ResourceList />
        <ResourceCanvas />
      </div>
    </SnackbarProvider>
  );
}

export default App;
