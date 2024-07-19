
const Dashboard = () => {
  return (
    <div className="">
        <h1 className='text-2xl font-bold mx-2 md:mx-6 py-5'>Hello John</h1>
        <div className='grid grid-cols-3 mx-4 md:mx-10 xl:mx-20 gap-2 md:gap-8'>
            <div className="bg-gradient-to-t from-blue-800 to-blue-500 p-4 rounded-md">
                <p className="text-white text-sm md:text-xl">Total Service Request</p>
                <p className="md:text-4xl font-bold text-xl">000</p>
            </div>
            <div className="bg-gradient-to-t from-blue-800 to-blue-500 p-4 rounded-md">
                <p className="text-white text-sm md:text-xl">Total Service Request</p>
                <p className="md:text-4xl font-bold text-xl">000</p>
            </div>
            <div className="bg-gradient-to-t from-blue-800 to-blue-500 p-4 rounded-md">
                <p className="text-white text-sm md:text-xl">Total Service Request</p>
                <p className="md:text-4xl font-bold text-xl">000</p>
            </div>
        </div>
    </div>
  )
}

export default Dashboard