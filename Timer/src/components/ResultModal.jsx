import { forwardRef,useImperativeHandle,useRef } from "react";
import { createPortal } from "react-dom";

 const ResultModal = forwardRef(function({remainingtime,timer,onRestart},ref)
{
    const dialog = useRef();
    useImperativeHandle(ref,()=>
    {
        return{
           open()
           {
            dialog.current.showModal();
           }
        };
    })
    const youLost = remainingtime <= 0;
    const remainingSeconds = (remainingtime/1000).toFixed(2);
    const score = Math.round((1- remainingtime/(timer*1000))*100);

    return createPortal (
        <dialog ref = {dialog} className="result-modal" onClose={onRestart} >
            <h2>{youLost ? 'you Lost' : `your score : ${score}`}</h2>
            <p>Target Time was <strong>{timer} second{timer > 1 ? 's':''}</strong></p>
            <p>{remainingSeconds} seconds has been left</p>
            <form method="dialog">
                <button onClick={onRestart}>close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
});

export default ResultModal;