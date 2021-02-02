import React,{useState} from 'react';
const MyComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [toDoList, setToDoList] = useState([]);
  
    function handleSubmit(e) {
      e.preventDefault();
      if(inputValue === '') ;
      setToDoList([...toDoList, {text: inputValue,status: false}]); 
      setInputValue('');
    }
  
    function Delete(index) {
      setToDoList(toDoList.filter((_item, i) => i !== index));
    }
  
    function Checked(index) {const object = {...toDoList[index]};
        object.status = !object.status;
       setToDoList([...toDoList.slice(0, index), object].concat(toDoList.slice(index + 1)));
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
            <input onChange={e => setInputValue(e.target.value)} value={inputValue}/>
            <br/><button>Add</button>
        </form>
        <br/>
        {toDoList.map((item, i) => (
          <div key={i}>
            <span style={{ textDecoration: item.status && 'line-through' }}>{item.text}</span>
            <input type="checkbox" checked={item.status} onClick={() => Checked(i)} readOnly/>
            <button  onClick={() => Delete(i)}>Delete</button>
          </div>
        ))}
        </div>
    )   
        

}
export default MyComponent