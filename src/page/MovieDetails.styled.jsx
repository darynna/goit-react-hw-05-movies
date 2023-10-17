import styled from '@emotion/styled'
import { Link} from 'react-router-dom';

export const BackButton = styled(Link)`
padding: 6px 6px;
font-size: 14px;
background-color: #9ae9fc;
color:#032730;
border: none;
text-decoration: none;

&:hover{
background-color: #032730;
color:#9ae9fc;
}
`

export const AddInfo = styled(Link)`
margin-right: 24px;
font-weight: 600;
color: white;
text-decoration: none;

&:hover{
    color:#04596e
}

&.active{
    color:#04596e
}
`