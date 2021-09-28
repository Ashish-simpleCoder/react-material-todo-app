export default function Header(){
    function toggleTheme(){
        document.body.classList.toggle('light_theme')
    }
    return(
        <header>
            <h3>Todo App (React JS)</h3>
            <button id='theme_toggler' onClick={toggleTheme}>🌞</button>
        </header>
    )
}