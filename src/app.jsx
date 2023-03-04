import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SignIn, Dashboard } from "./pages/";
import { SideBar } from "./components/";
import Analytics from "./pages/Analytics";
import Chat from "./pages/Chat";
import Orders from "./pages/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<SignIn />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Analytics" element={<Analytics />} />
          <Route path="Messages" element={<Chat />} />
          <Route path="Orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
