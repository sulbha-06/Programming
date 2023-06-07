//2. Declare a simple component called Hello that renders nothing
/**Declare as state property called messages and setter called setMessages. Messages 
 * should be an array of strings or numbers. Initial value for this property should be ['Abc', 1] */
/**Render those messages as <ul> list in the component after children. */
/**Add functionality so this input will autofocus after a one second after mount */
import React , {useState,useContext} from 'react';


const parent = () =>{
    const context = useContext();
    return (
        <child context = {user:"myUser"} />
    )
}
const child = ()=>{
    const context = useContext()
return(
    <context.Provider>
        <p>{context.user}</p>
    </context.Provider>
)
}



const Hello = ({ firstName, second ??'optional'}) => {
    const [messages,setMessage] = useState(['Abc', 1]);
    const [counter , setCounter]  = useState(0);
    
    const autofocus = ()=>{

    }
    useEffect(()=>{
        setTimeout(()=>{
           //call autofoucs
        },1000)
    },[])
  return (
   <>
    <input type="text" value={firstName}/>
    messages.map((msg ) =>{
        return (
            <ul>
            <li key={msg}>{msg}</li>
            </ul>
        )
    })
    </>
  );
};
export default Hello;

//Add 2 props to it
//     - firstName as string
//     - second - optional to pass children to component