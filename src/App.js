import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import M from 'materialize-css'

import Card from './components/Card'

function App() {
  return (
    <>
      <div className="container">
        <h1>itechart-react-course</h1>
        <div className='row'>
          <Card />
          <Card /> 
          <Card /> 
          <Card /> 
        </div> 
      </div>
    </>
  );
}

export default App;
