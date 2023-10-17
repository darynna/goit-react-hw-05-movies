import styled from '@emotion/styled'
import { NavLink} from 'react-router-dom';

export const Wrapper = styled.div`
 padding: 18px 60px;
`

export const Header = styled.header`
 padding: 20px 60px;
 background-color: #9ae9fc
`

export const Nav = styled.nav`
display: flex;
gap: 32px;
justify-content: center
`

export const StyledNavLink = styled(NavLink)`
display: flex;
align-items: center;
font-size: 24px;
font-weight: 600;
color:#04596e;
text-decoration: none;

&:hover{
    color:#032730
}

&.active{
    color:#032730
}
`