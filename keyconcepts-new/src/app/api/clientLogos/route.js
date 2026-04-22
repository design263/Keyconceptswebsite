import fs from 'fs'
import path from 'path'

export async function GET() {
    debugger;
  const dir = path.join(process.cwd(), 'public/images/clientLogo')

  const files = fs.readdirSync(dir)

  const logos = files.map((file) => `/images/clientLogo/${file}`)

  return Response.json(logos)
}