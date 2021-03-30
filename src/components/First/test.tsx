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

    expect(container.firstChild).toMatchSnapshot()
  })
})
