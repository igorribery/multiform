import { BrowserRouter } from "react-router-dom"
import { Router } from "./router";
import { FormProvider } from "./contexts/FormContext";


const App = () => {
  return (
    <FormProvider>
      <BrowserRouter>
          <Router />
      </BrowserRouter>
    </FormProvider>
    
  );
}

export default App;