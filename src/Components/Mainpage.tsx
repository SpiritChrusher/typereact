const Main = ({text, text2}: any ) =>
{
return(
    <div className='main'>
    <h2>Hello There</h2>
    <h3>{text2}</h3>
    <h3>{text}</h3>
    </div>
)}

Main.defaultProps = {
    text: 'What\'s up?!',
}

export default Main