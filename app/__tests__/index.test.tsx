
import { render } from '@testing-library/react'
import Home from '../app/page'
import '@testing-library/jest-dom'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: '',
      asPath: '/',
    }
  },
}))

describe('Home', () => {
  it('renders without crashing', () => {
    const { container } = render(<Home />)
    expect(container).toBeDefined()
  })
})
