import { useState } from "react"
import { StyledForm, Input, Button } from "./Form.styled";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function Form({setSearchParams}){
   const [query, setQuery] = useState('')

   const handleChange=(e)=>{
    setQuery(e.target.value)
   }

   const handleSubmit = (e)=>{
    e.preventDefault()
    if(query.trim() === ''){
        Notify.warning('Please, write the request!')
    }

    setSearchParams({query})
    
   }

    return(
        <StyledForm onSubmit={handleSubmit}>
        <label>
            <Input value={query} name="query" type="text" onChange={handleChange}/>
        </label>
        <Button type="submit">Search</Button>
        </StyledForm>
    )
}