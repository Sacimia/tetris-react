import { useEffect, useRef } from 'react';

export function useInterval(callback, delay){
  const savedCallback = useRef();
  //This const is remember the latest callback;
  useEffect(()=>{
    savedCallback.current = callback;

  }, [callback]);

  //Set up the interval
  useEffect(()=>{
    function tick(){
      savedCallback.current();
    }
    if (delay !== null){
      const id = setInterval(tick, delay);
      return ()=>{
        clearInterval(id);
      };
    }
  }, [delay]); 
}
