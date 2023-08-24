import 'bootstrap/dist/css/bootstrap.min.css';

function Body({saludos}) {
  return (
    <>
      <body className='bg-danger h-200 text-center'>
        <h1>{saludos} </h1>
      </body>
    </>
  )
}

export default Body