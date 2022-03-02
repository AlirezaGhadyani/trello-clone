import {
  BrowserRouter as RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Board from "./Board";
import Auth from "./Auth";

const Pages = () => {
  return (
    <RouterProvider>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Board />
            </PrivateRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </RouterProvider>
  );
};

export default Pages;
