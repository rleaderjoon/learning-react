import React, {useState} from 'react';

/**
 * 박스가 체크되기 전에 alert가 먼저 띄워진다.
 *
 * 스레드를 블록하는 alert를 사용하는 컴포넌트
 */
export default function CheckboxAlert(props) {
    const [checked, setChecked] = useState(false);

    alert(`checked : ${checked.toString()}`);

    return(
        <>
            <input
                type = "checkbox"
                value={checked}
                onChange={() => setChecked(!checked)}
            />
            {checked ? "checked" : "not checked"}
        </>
    )
}