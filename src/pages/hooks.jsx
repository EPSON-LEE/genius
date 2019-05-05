import React, { useState, useEffect } from "react"

export default function Example() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('lee jiahao')

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>
        <button onClick={() => setName('wang nan')}>Change name</button>
        My name is 
        <span>
          { name }
        </span>
      </p>
    </div>
  )
}
