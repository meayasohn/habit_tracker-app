import React, { memo } from 'react';

const HabitAddForm = memo(props =>{
  const inputRef = React.createRef();

  const handleAdd = event => {
    event.preventDefault();
    // console.log(this.inputRef.current.value);
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = '';
    // console.log('halder end');
};  
  return (
    <>
      <div className="habit-add">
      <input           
        ref = {inputRef} 
        type="text" 
        placeholder="Add Habit" 
        className="add-input"/>
      <button
        className="add-button" 
        onClick={handleAdd}>
        Add
      </button>
      </div>
    </>
  );
});

export default HabitAddForm;

