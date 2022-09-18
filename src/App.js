import CssBaseline from '@mui/material/CssBaseline';
import { router } from './view/pages/routes/appRouter';
import {
  RouterProvider,
} from "react-router-dom";
function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
