
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './app',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  displayName: 'UPAK Frontend Tests',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/tests/**/*.(test|spec).(ts|tsx|js|jsx)',
    '<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/app/.next/',
    '<rootDir>/app/node_modules/'
  ],
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    '!app/**/*.d.ts',
    '!app/.next/**',
    '!app/coverage/**',
    '!app/node_modules/**',
    '!app/app/layout.tsx',
    '!app/next.config.js',
    '!app/tailwind.config.ts',
    '!app/postcss.config.js'
  ],
  coverageReporters: [
    'html',
    'lcov',
    'text',
    'text-summary'
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/lib/(.*)$': '<rootDir>/app/lib/$1',
    '^@/hooks/(.*)$': '<rootDir>/app/hooks/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: '<rootDir>/app/tsconfig.json'
    }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|@testing-library))'
  ],
  testTimeout: 30000,
  maxWorkers: '50%',
  verbose: true,
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/app/tsconfig.json'
    }
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
