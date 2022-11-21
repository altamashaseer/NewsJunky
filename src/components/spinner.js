import loading from '../media/load.gif'
import '../App.css'

const Spinner = () => {
  return (
    <div className='text-center' id='spinner'>
      <img src={loading} alt="loading page.." />
    </div>
  )
}

export default Spinner
