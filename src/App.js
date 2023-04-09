import './App.css';
import Header from './components/Header/Header';
import Button from './components/Button/Button';

function App() {
  return (
    <>
      <Header />
      <Button styling='US' text='US Stitches' />
      <Button styling='UK' text='UK Stitches' />
      <Button styling='Favourite' text='Favourite Stitches' />
    </>
  );
}

export default App;
