import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Key Concepts'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), 'public/images/logo.png'),
  )
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
        }}
      >
        <img
          src={logoSrc}
          alt="Key Concepts"
          style={{
            maxWidth: '50%',
            maxHeight: '70%',
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
