// function-based Component

function Message() {

   const name = 'Nikolai'
   if (name) {
      return <h1>Hello, {name}</h1>
   }
   // JSX: JavaScript XML
   return <h1>Hello, World</h1>
}

export default Message