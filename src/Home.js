import React from 'react'
import Header from './Header'


export default function Home() {
	return (
		<div>
		<Header/>
		
		<div className="bg-gray-300 w-full h-screen">
			<div className="container mx-auto flex">
			<div className="bg-purple-400 border rounded-md border-red-300 mt-20  h-60 w-full">
			        <h1 className="text-white font-semibold text-4xl text-center">Autoplay Crousel</h1></div>
		     </div>

		     <div className="flex">
		     	<div className="font-bold"><h2 className="text-black pl-8 mt-20 text-3xl">Recently played</h2>
		     	<div className="bg-purple-700 w-3/12 h-40 mt-20 pl-4">hello</div>
		     	</div>
		     	
		     </div>
		     </div>

		     
		
		
			
		</div>
	)
}