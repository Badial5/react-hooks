import React, {useState} from 'react'
import { useEffect } from 'react'

const Main = () => {
    //useState
    //const [resource, setResource] = useState("posts")

    // const [items, setItems] = useState([])


    //modying the width of the window I have opened
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    //useEffect

    //the second parament 
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${resource}`)
    //     .then(response => response.json())
    //     .then(json => setItems(json))
    // }, [resource])


    //seting the width

    const handleResize = () => {
        window.addEventListener(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)


        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])


  return (
    <>
    <div>
      {/* <button onClick={() => setResource('Posts')} >Posts</button>
      <button onClick={() => setResource('Users')} >Users</button>
      <button onClick={() => setResource('Comments')} >Comments</button> */}

      {windowWidth}

    </div>

        {/* <h1>{resource}</h1>
        {
            items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })
        } */}

    </>
  )
}

export default Main
