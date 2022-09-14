// import ClassComponent from "./components/class-component";
// import FunctionalComponent from "./components/functional-component";
// import FormSubmittion from "./components/form-submittion";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import HomePage from "./Pages/home-page";
import ContactPage from "./Pages/contact-page";
import AboutPage from "./Pages/about-page";
import './App.css';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path="home" element={<HomePage></HomePage>}></Route>
        <Route path="about" element={<AboutPage></AboutPage>}></Route>
        <Route path="contact" element={<ContactPage></ContactPage>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <h1 className="heading">Hello, Welcome to React JS</h1>
      <ClassComponent></ClassComponent>
      <FunctionalComponent></FunctionalComponent>
      <FormSubmittion></FormSubmittion> */}
    </div>
  );
}

export default App;
