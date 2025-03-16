import React, {useEffect, useState} from 'react';

/**
 * useEffect는 렌더링이 끝난 다음에 발생하는 함수이다.
 * 렌더가 시작되면 컴포넌트 안에서 현재 상태 값에 접근할 수 있고, 이 현재 값을 사용해 다른 일을 할 수 있다.
 * 그 후 렌더링이 다시 시작되면 모든 일이 처음부터 다시 발생한다.
 */
export default function CheckboxuseEffect(){
    const [checked, setChecked] = useState(false);

    useEffect(()=>{alert(`checked : ${checked.toString()}`);});

    return (
        <>
            <input type="checkbox"
                   value={checked}
                   onChange={() => setChecked(!checked)}
                   />
            {checked ? "checked" : "not checked"}
            </>
    )
}