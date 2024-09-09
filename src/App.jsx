import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "../src/components/ui/toaster";

import Review from "./components/Review";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen h-full w-screen text-white">
        <Routes>
          <Route exact path="/:name" element={<Review />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
