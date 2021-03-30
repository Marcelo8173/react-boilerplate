import React from 'react'
import { render, screen } from '@testing-library/react'
import { First } from '.'

describe('<First />', () => {
  it('should render the heading', () => {
    //renderizando o componet
    const { container } = render(<First />)

    expect(
      screen.getByRole('heading', { name: /realize b2c/i })
    ).toBeInTheDocument()

    //snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the colors correctly', () => {
    const { container } = render(<First />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    })
  })
})
