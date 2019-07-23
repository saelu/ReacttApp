import React from 'react';

const Hello = () => {
    // return (
    //     <div className = 'dummyClass>
    //       <h1>Hello Shailendra</h1>  
    //     </div>
    // )

return React.createElement('div',
 {id: 'hello', className: 'dummyClasss' },
 React.createElement('h1', null, 'Hello Shailendra'))
}

export default Hello;