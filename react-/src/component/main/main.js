import React, { useEffect, useRef, useContext } from "react"
import AuthContext from "../../context/auth-context"

const Main = (props) => {
    const btnRef = useRef(null)
    const authContect = useContext(AuthContext)

    useEffect(() => {
        console.log('Main.js use effect');
        btnRef.current.click()
        return () => {
            console.log('Main.js celanup');
        }
    }, [])
    const btn = {
        backgroundColor: '#7b1fa2',
        color: '#ffffff',
        border: 'none',
        outline: 'none',
        boardRadious: '3px',
        padding: '0.6rem',
        margin: '0.6rem auto'

    }
    return (
        <>
            <h2>Book store</h2>
            <button ref={btnRef} style={btn} onClick={props.click}>show/hid Product
            </button>

            <button onClick={authContect.login}>login</button>

        </>
    )
}
export default Main