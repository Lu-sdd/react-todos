import React, {useState} from 'react';

export default function NewTodoForm(props){

const [description, setDescription] = useState('');
const [assigned,setAssigned] = useState('');

const submitTodo = () => {
    if(description !== '' && assigned !==''){
        props.addTodo(description,assigned);
        setDescription(''); //把description和assigned重置为空
        setAssigned('');
    }
}

return(
    <div className='mt-5'>
        <form>
            <div className='mb-3'>
                <label className='form-label'>Assigned</label>
                <input 
                type='text' 
                className='form-control' 
                required
                onChange={e => setAssigned(e.target.value)}
                value={assigned}
                ></input>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <textarea 
                className='form-control' 
                rows={3} 
                onChange={e =>setDescription(e.target.value)} 
                required
                value={description}
                ></textarea>
            </div>
            <button 
            type='button' 
            className='btn btn-primary mt-3' 
            onClick={submitTodo}
            >Add Todo</button>
        </form>
    </div>
)
}