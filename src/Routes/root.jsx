import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
      <h1>SOY UN NAVBAR</h1>
      <Outlet/>
      <h1>SOY UN FOOTER</h1>
    </div>
  )
}

export default Root