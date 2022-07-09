import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Users from "./components/Users";
import Management from "./components/Management";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Error from "./components/Error";
import ContactMoh from "./components/ContactMoh";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/management" element={<Management />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact-us" element={<Index />} />
        <Route path="/contact" element={<ContactMoh />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
