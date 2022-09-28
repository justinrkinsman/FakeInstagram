import './Searchbar.css'
import Magnify  from '../../images/magnify.jpg'

export function Searchbar() {
    return (
        <div id='searchbar'>
            <img src={Magnify} alt='magnifying glass' id='glass'></img>
            <input type='search' id='searchBar' name='search'/>
        </div>
    )
}