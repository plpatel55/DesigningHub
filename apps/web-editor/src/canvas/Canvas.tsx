import { Stage, Layer, Rect } from 'react-konva'
import { useYjsStore } from '../store/yjs'
import { useEffect } from 'react'

export default function Canvas() {
  const { rects, init } = useYjsStore()

  useEffect(() => {
    init()
  }, [init])

  return (
    <Stage width={800} height={600} style={{ background: '#fff' }}>
      <Layer>
        {rects.map((r) => (
          <Rect
            key={r.id}
            x={r.x}
            y={r.y}
            width={r.width}
            height={r.height}
            fill={r.fill}
            draggable
            onDragEnd={(e) => {
              // update yjs map here
            }}
          />
        ))}
      </Layer>
    </Stage>
  )
}
