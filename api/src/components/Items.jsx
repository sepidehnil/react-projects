import { useNavigate } from 'react-router-dom'
import Card from '../component/UI/Card'



const Items = ({item}) => {
    const navigate = useNavigate()
      
  return (
        <Card > 
            <h1 onClick={()=>navigate("/single")}>{item.id}</h1>
             <h3>{item.title}</h3>
             <p>{item.body}</p>
          </Card>
  )
}

export default Items