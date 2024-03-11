import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_roots/RootLayout";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* private routes */}
        <Route element={<AuthLayout />} />
        <Route path="/sigh-in" element={<SigninForm />} />
        <Route path="/sign-Up" element={<signUpForm />} />
        <Route />
        {/* private routes */}
        <Route element={<RootLayout />} />
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
