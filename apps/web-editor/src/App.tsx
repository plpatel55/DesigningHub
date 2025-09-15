import Canvas from './canvas/Canvas'
import Toolbar from './canvas/Toolbar'

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Toolbar />
      <Canvas />
    </div>
  )
}
