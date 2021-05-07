import './App.css';
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { Grid } from "./components/grid/Grid"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
   <div>
      <Header />
        <Grid />
      <Footer />
   </div>
  );
}

export default App;
