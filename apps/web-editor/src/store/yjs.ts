import { create } from 'zustand'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'

interface Rect { id: string; x: number; y: number; width: number; height: number; fill: string }

interface Store {
  rects: Rect[]
  init: () => void
  addRect: () => void
}

export const useYjsStore = create<Store>((set) => ({
  rects: [],
  init: () => {
    const ydoc = new Y.Doc()
    const provider = new WebsocketProvider('ws://localhost:4000', 'dh-room', ydoc)
    const yArr = ydoc.getArray<Rect>('rects')
    yArr.observe(() => set({ rects: yArr.toArray() }))
  },
  addRect: () => {
    const ydoc = (window as any).ydoc || new Y.Doc()
    const yArr = ydoc.getArray<Rect>('rects')
    yArr.push([{ id: Math.random().toString(), x: 50, y: 50, width: 100, height: 100, fill: 'red' }])
  },
}))
