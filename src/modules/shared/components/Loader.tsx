import './Loader.css';

export const Loader = () => {
  return (
    <div className='flex items-center'>
      <div className="loader"></div>
      <p className='text-lg'>Cargando...</p>
    </div>
  )
}
