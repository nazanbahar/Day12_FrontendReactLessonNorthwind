import './App.css';
import Dashboard from './layouts/Dashboard'; //Module Loader→ uzantı görünmez. Ne yazmışsak arka planda onu import eder. (js or jsx)
import 'semantic-ui-css/semantic.min.css' //USING: Semantic UI'dan Button| Label | Icon Minify Etmek için
import { Container } from "semantic-ui-react"; //for failed to compile error...
import Navi from './layouts/Navi';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
      <Dashboard/>
      </Container>
     </div>
  );
}

export default App;