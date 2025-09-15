import { useYjsStore } from '../store/yjs'

export default function Toolbar() {
  const addRect = useYjsStore((s) => s.addRect)

  return (
    <div style={{ padding: 8, borderBottom: '1px solid #ddd' }}>
      <button onClick={addRect}>Add Rectangle</button>
    </div>
  )
}
