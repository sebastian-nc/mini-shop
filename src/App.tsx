import { Catalogo } from './components/Catalogo';
import { CarritoDetalle } from './components/CarritoDetalle';
import { CarritoProvider } from './components/CarritoProvider';

function App() {
  return (
    <CarritoProvider>
      <Catalogo />
      <CarritoDetalle />
    </CarritoProvider>
  )
}

export default App
