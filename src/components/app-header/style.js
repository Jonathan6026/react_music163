import styled from "styled-components"

export const HeaderWrapper = styled.div`
    height: 75px;

    background-color: #242424;
    
    .content {
        height: 70px;
 
        display: flex;
        justify-content: space-between;
    }

    .divider {
        height: 5px;
        background-color: #C20C0C;
    }
`
//Header左
export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: inline-block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .header-group {
    display: flex;
    font-size: 14px;
    
    .header-item {
      position: relative;
      padding: 0 19px;
      height: 70px;
      text-align: center;
      line-height: 70px;

      a {
        color: white;
      }

      &:hover { 
        text-decoration: none;
        background-color: #000;
      }

      /* hot图标 */
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png').default});
          background-position: -190px 0;
          top: -15px;
          right: -25px;
        }
      }


      .active .icon  {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-image: url('${require('@/assets/img/sprite_01.png').default}');
        background-position: -226px 0;
      }
    }

  }

  
`

//Header右
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;
  .search {
    height: 32px;
    width: 158px;
    border-radius: 16px;
  }
  .headerButton {
    color: white;
    margin-left: 15px;
    border-radius: 10px;
    background:rgba(0,0,0,1);
  }
  .headerLoginButton {
    border: none;
  }
`