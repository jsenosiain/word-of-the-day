import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { WordOfTheDay } from './WordOfTheDay'


describe('WordOfTheDay test:', () => {
  afterEach(cleanup)

  it('should render component', () => {
    render(<WordOfTheDay />)
  })

  /*
  it('should render label', () => {
    render(<WordOfTheDay />)
    screen.getByText('Testing')
  })

  it('should be disabled', () => {
    render(
      <WordOfTheDay />
    )
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('onClick triggers properly', async () => {
    const mockFn = vi.fn()
    render(
      <WordOfTheDay />
    )
    expect(mockFn).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByRole('button'))
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('disabled prevents action', async () => {
    const mockFn = vi.fn()
    render(
      <WordOfTheDay />
    )
    expect(mockFn).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByRole('button'))
    expect(mockFn).toHaveBeenCalledTimes(0)
  })
  */
})