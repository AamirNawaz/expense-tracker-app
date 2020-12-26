
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./expenseTracker/Index";
import { TransectionProvider } from './expenseTracker/appContext';

function App() {
  return (
    <TransectionProvider>
      <Index />
    </TransectionProvider>
  );
}

export default App;
