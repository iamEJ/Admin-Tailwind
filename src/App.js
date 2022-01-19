import "./App.css";
import Info from "./components/Info";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex justify-between flex-col md:flex-row min-h-screen bg-blue-800">
      <Sidebar />
      <Info />
    </div>
  );
}

export default App;
