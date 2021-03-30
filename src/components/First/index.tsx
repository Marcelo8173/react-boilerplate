import React from 'react'
import * as S from './styles'

const First = ({ title = 'realize b2c' }) => {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
    </S.Wrapper>
  )
}

export { First }
