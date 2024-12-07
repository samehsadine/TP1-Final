
import './App.css';
import { pieces } from './TP1/pieces';

import { PieceMusicales } from './src/TP1Final/PiecesMusicales';

function App() {
  return (
    <>
   {/* <AficherListeMusique pieces={pieces}/> */}
   {/*  < FiltrerPiecesmusicales pieces={pieces}/> */}
   <PieceMusicales pieces={pieces}/>
    </>
  );
}
export default App;
