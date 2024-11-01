import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import HomeScreen from "./screens/Home";
import AboutScreen from "./screens/About";
import NotFoundScreen from "./screens/NotFound";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import KazaDetail from "./screens/KazaDetail";

function App() {
  return (
    <div>
    
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path={routes.home} element={<HomeScreen/>} />
        <Route path={routes.about} element={<AboutScreen/>}/>
        <Route path={routes.notFound} element={<NotFoundScreen />} />
        <Route path={routes.kazaDetail} element={<KazaDetail/>}/>
        <Route path="*" element={<Navigate to={routes.notFound} replace />} />
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
    </div>
  );
}

export default App;
