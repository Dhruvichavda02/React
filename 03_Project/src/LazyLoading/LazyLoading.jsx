import React from 'react'

function LazyLoading() {
  return (
    <div>
        <h2>This is a lazily loaded component! 🎉</h2>
    </div>
  )
}

export default 


// import './App.css'
// import React, { Suspense } from 'react'

// App.jsx
// Step 1: Lazy import the component
//const LazyComponent = React.lazy(()=>import('./LazyLoading/LazyLoading'))
// function App() {
//  return(
//     <>
//       <h1>Welcome</h1>
//        {/* Step 2: Use Suspense to handle loading */}
//        <Suspense fallback={<p>Loading Component </p>} >
//        <LazyComponent/>
//        </Suspense>
       
//     </>
//  )
// }

// export default App
