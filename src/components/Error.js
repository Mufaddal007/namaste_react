import {useRouteError}  from 'react-router'

const Error =  ()=> {
    const err = useRouteError()
    console.log(err)
    return (
        <div className="error">
            <h1>Oops! page not found</h1>
            <h2>{err.data}  : { err.statusText}</h2>
        </div>
    )
}

export default Error