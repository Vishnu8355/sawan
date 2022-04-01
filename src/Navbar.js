import React from 'react'
import {Link} from'react-router-dom'

export default function Navbar() {
	return (
		<div>
		
			<nav className="flex container justify-between items-center">
			
				<div className="space-x-8">

			<span className="text-white font-semibold text-4xl text-tight mt-3 px-6 py-2">music.com</span>
					<Link to="/" className="text-white font-sm text-xl ">Home</Link>
					<Link to="/Product" className="text-white font-sm text-xl">prodocast</Link>
					<Link to="/download" className="text-white font-sm text-xl">Downloads</Link>
				</div>
				
				
				<div className="space-x-6">
					<input type="text" placeholder="search music here..." className="p-1 border rounded-sm w-96 focus:outline-none" />
				</div>

				<div className="space-x-6 flex">
				<Link to="/Language">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-language" width="32" height="32" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M4 5h7" />
                          <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
                          <path d="M5 9c-.003 2.144 2.952 3.908 6.7 4" />
                          <path d="M12 20l4 -9l4 9" />
                          <path d="M19.1 18h-6.2" />
                    </svg>
                </Link>
					<Link to="/signin" className="text-white font-sm text-xl">signup</Link>
				</div>
				

			</nav>
		</div>
			
		
	)
}