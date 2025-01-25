import React from 'react'

function PatientSection() {
    // const [avatar, setAvatar] = useState(null)

    return (
        // <div className='bg-slate-800 p-3 h-screen '>
        //     {/* patients details */}
        //     <div className='bg-yellow-200 rounded-2xl flex justify-center'>
        //         <div>
        //         <form  encType="multipart/form-data">
        //             <input 
        //                 type="file"
        //                 name='avatar'
                       // onChange={(e) => setAvatar(e.target.files[0])} 
        //                 />
        //         </form>
        //         </div>




        //     </div>
        // </div>

        <div class="max-w-md mx-auto bg-gray-800 text-white rounded-lg shadow-md overflow-hidden p-4">
            <h2 class="text-center text-xl font-semibold mb-4">Patient Name</h2>
            <div class="flex items-center space-x-4">
                {/* <!-- Photo Section --> */}
                <div class="w-24 h-24 bg-gray-600 rounded-md flex items-center justify-center">
                    <span class="text-sm">Photo</span>
                </div>
                {/* <!-- Patient Details Section --> */}
                <div class="flex-1 bg-gray-700 rounded-md p-4">
                    <span class="block text-sm">Patient details</span>
                </div>
            </div>
        </div>

    )
}

export default PatientSection