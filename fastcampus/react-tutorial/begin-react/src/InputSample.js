import React, {useState} from 'react';

function InputSample() {
   const [text, setText] = setState('');

   const onChange = (e) => [
      setText(e.target.value);
   ]

   const onReset = () => {
      setText('');
   };

   return (
      <div>
         <input onChange={onChange} value={text} />
         <button onClick={onReset}>초기화</button>
         <div>
            <b>값 : </b>
            어쩌고 저쩌고...
         </div>
      </div>
   );
};

export default InputSample;