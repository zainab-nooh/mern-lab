import {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import AppRouter from '../src/pages/App/App';
const root = createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
  <AppRouter/>
  </StrictMode>
  )
