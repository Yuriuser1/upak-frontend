
import { render, screen } from '@testing-library/react'
import Home from '../app/page'

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
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /UPAK/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
