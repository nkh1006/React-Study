import React from 'react';

const List = ({todos, loading}) => {

   let todoList = <div>loading...</div>
   if(!loading) todoList = todos.map(todo => <li key={todo}>{todo}</li>)
   
   return (
      <ul>
         {todoList}
      </ul>
   )
}

export default List;