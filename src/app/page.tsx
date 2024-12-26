import Frame from '@/components/Frame'
import R3f001 from '@/components/wawasensei-r3f/r3f001'
import R3f002 from '@/components/wawasensei-r3f/r3f002'

export default function Home() {
  return (
    <main>
      <Frame date="2024-12-26">
        <R3f002 />
      </Frame>
      <Frame date="2024-12-25">
        <R3f001 />
      </Frame>
    </main>
  )
}
