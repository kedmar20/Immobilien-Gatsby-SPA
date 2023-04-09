import React from "react"
// import styled from
import styled from "styled-components";

const IndexPage = () => {
  return (
    <MainWrapper>
      <h1>Sailer Immobilien</h1>

    </MainWrapper>
  )
}

const MainWrapper = styled.div`
background-color: ${({theme})=>theme.colors.steel};
  width: 100vw;
  min-height: 100vh;
`

export default IndexPage

export const Head = () => <title>Home Page</title>