import Button from './button'

const Header = ({ title }) => {
    return (
        <header className = 'header'>
            <h1>(title)</h1>
            <Button/>
            <Tasks/>
        </header>
    )
}
