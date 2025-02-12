
import './App.css'
import DataTableDemo from './components/DataTable'


const router = createBrowserRouter([
  {
    path : '/',
    element : <DataTableDemo/>
  },
  {
    path : '/[:id]',
    element : <DynamicPage/>
  }

])

function App() {
  return (
    <>
       <DataTableDemo/>
    </>
  )
}

export default App
