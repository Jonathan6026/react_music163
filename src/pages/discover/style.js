import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  height: 30px;
  background-color: #C20C0C;
`
export const DiscoverList = styled.div`
  display: flex;
  padding: 0 0 0 175px;
  position: relative;
  top: 3px;
  
  .item {
    
    .a {
      display: inline-block;
      height: 22px;
      line-height: 22px;
      margin: 0 15px;
      padding: 0 15px;
      font-size: 13px;
      color: #fff;

      &:hover,&.active{
        border-radius: 20px;
        text-decoration: none;
        background-color: #9B0909;
      }
    }

  }
  
`
