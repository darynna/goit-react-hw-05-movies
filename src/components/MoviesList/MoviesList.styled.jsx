import styled from '@emotion/styled'
import { Link} from 'react-router-dom';

export const List = styled.ul`
margin:0;
padding: 0;
display: grid;
grid-template-columns: repeat(5, 1fr); 
gap: 32px; 
list-style-type: none;
`

export const Item = styled.li`
width: 200px;
height: 340px;
background-color: #032730;
text-decoration: none;

`


export const ItemTitle = styled.p`
display: inline-block;
margin: 0;
color: #9ae9fc;
`

export const StyledLink = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
`
