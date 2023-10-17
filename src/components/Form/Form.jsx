import { useState } from "react"

export function Form({setSearchParams}){
   const [query, setQuery] = useState('')

   const handleChange=(e)=>{
    console.log(e.target.value)
    setQuery(e.target.value)
   }

   const handleSubmit = (e)=>{
    e.preventDefault()
    if(query.trim() === ''){
        console.log('Sorry ')
    }

    setSearchParams({query})
    
   }

    return(
        <form onSubmit={handleSubmit}>
        <label>
            <input value={query} name="query" type="text" onChange={handleChange}/>
        </label>
        <button type="submit">Search</button>
        </form>
    )
}