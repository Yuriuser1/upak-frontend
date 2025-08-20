
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

interface HealthCheck {
  status: 'healthy' | 'unhealthy'
  timestamp: string
  uptime: number
  version: string
  environment: string
  services: {
    database: 'connected' | 'disconnected' | 'unknown'
    redis: 'connected' | 'disconnected' | 'unknown'
  }
  system: {
    memory: {
      used: number
      total: number
      percentage: number
    }
  }
}

export async function GET(request: NextRequest) {
  try {
    const startTime = Date.now()
    
    // Check database connection
    let databaseStatus: 'connected' | 'disconnected' | 'unknown' = 'unknown'
    try {
      // This would be replaced with actual database check
      // const { PrismaClient } = require('@prisma/client')
      // const prisma = new PrismaClient()
      // await prisma.$queryRaw`SELECT 1`
      // await prisma.$disconnect()
      databaseStatus = 'unknown' // Placeholder
    } catch (error) {
      console.error('Database health check failed:', error)
      databaseStatus = 'disconnected'
    }
    
    // Check Redis connection
    let redisStatus: 'connected' | 'disconnected' | 'unknown' = 'unknown'
    try {
      // This would be replaced with actual Redis check
      redisStatus = 'unknown' // Placeholder
    } catch (error) {
      console.error('Redis health check failed:', error)
      redisStatus = 'disconnected'
    }
    
    // Get system information
    const memoryUsage = process.memoryUsage()
    const memoryInfo = {
      used: Math.round(memoryUsage.heapUsed / 1024 / 1024), // MB
      total: Math.round(memoryUsage.heapTotal / 1024 / 1024), // MB
      percentage: Math.round((memoryUsage.heapUsed / memoryUsage.heapTotal) * 100)
    }
    
    // Calculate uptime
    const uptime = process.uptime()
    
    const healthStatus: HealthCheck = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: Math.round(uptime),
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      services: {
        database: databaseStatus,
        redis: redisStatus
      },
      system: {
        memory: memoryInfo
      }
    }
    
    // Determine overall health status
    if (databaseStatus === 'disconnected') {
      healthStatus.status = 'unhealthy'
    }
    
    const responseTime = Date.now() - startTime
    
    return NextResponse.json(
      {
        ...healthStatus,
        responseTime: `${responseTime}ms`
      },
      { 
        status: healthStatus.status === 'healthy' ? 200 : 503,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
    )
  } catch (error) {
    console.error('Health check error:', error)
    
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: 'Internal health check error'
      },
      { status: 503 }
    )
  }
}

// Support HEAD requests for simple health checks
export async function HEAD(request: NextRequest) {
  try {
    return new NextResponse(null, { 
      status: 200,
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
  } catch {
    return new NextResponse(null, { status: 503 })
  }
}
