
import { describe, it, expect, beforeAll, afterAll } from '@jest/globals'
import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3001

let app: any
let handle: any
let server: any

beforeAll(async () => {
  app = next({ dev, hostname, port })
  handle = app.getRequestHandler()
  await app.prepare()
  
  server = createServer((req: any, res: any) => {
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
  }).listen(port)
})

afterAll(async () => {
  if (server) {
    server.close()
  }
  if (app) {
    await app.close()
  }
})

describe('/api/health', () => {
  it('should return health status', async () => {
    const response = await fetch(`http://localhost:${port}/api/health`)
    const data = await response.json()
    
    expect(response.status).toBe(200)
    expect(data).toHaveProperty('status')
    expect(data).toHaveProperty('timestamp')
    expect(data).toHaveProperty('uptime')
    expect(data).toHaveProperty('version')
    expect(data).toHaveProperty('environment')
    expect(data).toHaveProperty('services')
    expect(data).toHaveProperty('system')
    expect(['healthy', 'unhealthy']).toContain(data.status)
  })
  
  it('should support HEAD requests', async () => {
    const response = await fetch(`http://localhost:${port}/api/health`, {
      method: 'HEAD'
    })
    
    expect(response.status).toBe(200)
  })
})
