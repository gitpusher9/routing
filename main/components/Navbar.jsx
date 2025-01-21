
import { useNavigate } from 'react-router-dom'
export function Navbar(){
    const navigate= useNavigate();//this hook can only be invoked inside a browser router
    return(
        
      <div style={{backgroundColor: 'lightblue' , padding: '10px' , justifyContent: 'center', display: 'flex' , fontSize: '20px', fontWeight: 'bold'}}>
            <span style={{margin: '10px'}}>
                <button onClick={() =>{
                    navigate('/')
                }}>Landing</button>
            </span>
            <span style={{margin: '10px'}}>
                <button onClick={() => {
                    navigate('/Dashboard')
                }}>Dashboard</button>
            </span>
        </div>
      
    )
}