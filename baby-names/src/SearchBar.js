import {useState} from "react";
import data from "./babyNamesData.json"

const Search = () => {
    const [query, setQuery] = useState("");
    data.filter(post => {
    if (query === '') {
      return post;
    } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
      return post;
    }})
        return (
          <div>
            <input
              placeholder="search.."
              onChange={(event) => setQuery(event.target.value)}
            />
            
      


</div>
        )
        
    
}

export default Search;