function Search(){

return(
    <div>
    <svg id='search' onClick={ativar} xmlns="http://www.w3.org/2000/svg" height="30px" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <div id='Bigsearch'>
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
            <input placeholder='O que voce procura?'/>
        </div>
        <div className='Black'></div>
        </div>
)
function ativar(){
    document.getElementById('Bigsearch').style.display = 'flex'

    var search = document.getElementById('Bigsearch')
    var black = document.querySelector('.Black')
    black.style.display = 'block'
    black.addEventListener('click',function(){
        black.style.display = 'none'
        search.style.display = 'none'
    })



}
}
export default Search