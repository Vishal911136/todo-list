import { useState } from 'react';
import './App.css';
import TodoListItem from './todoListItem';

function App() {



  const [newItem,setItem] = useState("");
  const [itemList, setItemList] = useState([]);

  let inputEvent = (event) => {
      setItem(event.target.value)
  }
  

  let closeAlert = () =>{
    let alertMsg = document.getElementById('alertMsg');
    alertMsg.style.visibility="hidden";
  }
  
  let addItem = () => {
    let alertMsg = document.getElementById('alertMsg');
    if(newItem.length<=0){
      alertMsg.style.visibility="visible";
    }
    else{
    setItemList((oldItems) =>{
      return [...oldItems,newItem]
    });
    setItem("");
    alertMsg.style.visibility="hidden"
  }
  }
  

  const deleteItem = (id) => {
    setItemList((oldItems) =>{
      return oldItems.filter((arr, index) =>{
        return index !== id; 
      })
    })
  }

  return (
  <>
    <div className = "container">
      <div className = "todo__container">
      
        <div className="alert__msg" id="alertMsg" style={{visibility: "hidden"}}>
          <p className="msg">Please Enter Text</p> <hr />
          <div className="button__div">
            <button onClick={closeAlert} >OK</button>
          </div>
        </div>

        <div className = "heading">
          <h2 className = "heading__text">ToDo List</h2>
        </div>
        <div className = "input__field">
          <input
            type = "text"
            placeholder = 'Add a item'
            onChange = {inputEvent}
            value={newItem}
            onKeyPress = {(e) =>{
              if(e.key==="Enter"){
                addItem();
              }
            }}
          />
          <button onClick={addItem}> + </button>
        </div>


        <div className="list__items">
            {itemList.length>0?itemList.map((value,index) =>{
                return <TodoListItem
                      key = {index} 
                      id = {index}
                      stateText = {value}
                      onSelect = {deleteItem}
                    />
            }): <p style={{textAlign: "center", marginTop: "10px", fontSize: "24px",fontWeight: "600"}}>Items Not found</p>
            }

        </div>

      </div>
    </div>
  </>
  );
}

export default App;
