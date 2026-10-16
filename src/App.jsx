
import { Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import FrontendRoutes from "./routes/FrontendRoutes";
import { Suspense } from "react";

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/*" element={<FrontendRoutes />} />
      </Routes>
    </Suspense>
  )
}

export default App
