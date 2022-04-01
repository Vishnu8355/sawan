import React from 'react'
import Header from './Header'

export default function Language() {
	return (
		<div>
		<Header/>
		<div className="bg-gray-300 w-full h-screen  ">
		<div className="flex justify-center ">
		<div className="bg-white w-6/12 shadow mt-10 h-auto border rounded-md">
		<div className="p-4"><span className="text-gray-700 font-sm text-2xl pl-3">Select Music anguage[s]</span></div>
		<div className="container  mx-auto">
		<div className="bg-gray-300 w-full h-auto border-red-200 border-2">
			<div>
				<div><input type="checkbox"/></div>
			</div>
		</div>
		</div>
		</div>
			

		</div>
		</div>
			
		</div>
	)
}