import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, expect, describe, it, vi } from 'vitest'
import { WordOfTheDay } from './WordOfTheDay'

describe('WordOfTheDay test:', () => {
  afterEach(cleanup)

  it('should render component', () => {
    render(<WordOfTheDay label='Testing' />)
  })

  it('should render label', () => {
    render(<WordOfTheDay label='Testing' />)
    screen.getByText('Testing')
  })

  it('should be disabled', () => {
    render(
      <WordOfTheDay
        label='Testing'
        disabled
      />
    )
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('onClick triggers properly', async () => {
    const mockFn = vi.fn()
    render(
      <WordOfTheDay
        onClick={mockFn}
        label='Testing'
      />
    )
    expect(mockFn).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByRole('button'))
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('disabled prevents action', async () => {
    const mockFn = vi.fn()
    render(
      <WordOfTheDay
        onClick={mockFn}
        label='Testing'
        disabled
      />
    )
    expect(mockFn).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByRole('button'))
    expect(mockFn).toHaveBeenCalledTimes(0)
  })
})