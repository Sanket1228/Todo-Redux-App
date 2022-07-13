import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import InputComponent from './components/InputComponent';

function App() {

  const state = useSelector((state:RootState) => state)

  return (
    <div className="App">
      <InputComponent state={state}/>
    </div>
  );
}

export default App;
