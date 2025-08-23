function Hello(){
    let fullName = () =>{
        return "Himani Sahu . I'm a software developer"
    }
    return <h1 style={{'background-color': 'rgba(47, 150, 107, 0.2)'}}>Namaste Ji . My name is {fullName()}</h1> // {} WE use dynamic component here
}
export default Hello;