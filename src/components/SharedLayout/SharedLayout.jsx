import { Outlet} from 'react-router-dom';
import { Suspense } from "react";
import { Wrapper, Header, Nav, StyledNavLink} from './SharedLayout.styled'
import { AiOutlineHome} from 'react-icons/ai';
import { RiMovieLine} from 'react-icons/ri';
import { Loader } from 'components/Loader/Loader';

export default function SharedLayout(){
    return(
        <div>
        <Header>
            <Nav>
                <StyledNavLink StyledNavLink to='/'><AiOutlineHome/>Home</StyledNavLink>
                <StyledNavLink to='/movies'><RiMovieLine/>Movies</StyledNavLink>
            </Nav>
        </Header>
        <Wrapper>
        <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
        </Wrapper>
        </div>
    )
}