import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRoute";
import { useEffect } from "react";
import { show } from "./api/API";

const App = () => {
  useEffect(() => {
    show();
  }, []);
  return (
    <div>
      <RouterProvider router={mainRouter} />
    </div>
  );
};

export default App;
