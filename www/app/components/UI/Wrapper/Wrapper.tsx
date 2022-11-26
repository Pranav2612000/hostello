import styled from '@emotion/styled'
import React from 'react'
import PropTypes from 'prop-types'

const WrapperDiv = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    pointerEvents: 'none',
});


const wrapper = ({children}: {children: React.ReactChildren | JSX.Element[]} ) => {
  return (
    <WrapperDiv>
      {children}
    </WrapperDiv>
  )
}

wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.element
  ])
}

export default wrapper