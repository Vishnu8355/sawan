import React,{useEffect,useState}from 'react'
import axios from 'axios'
import Header from './Header'
import music from './music.jpg'

export default function Signin() {
	const[fname,setFname]=useState("");
	const[lname,setLname]=useState("");
	const[email,setEmail]=useState("");
	const[mobile,setMobile]=useState("");
	const[password,setPassword]=useState("");
	const[confirmpassword,setConfirmPassword]=useState("");
	const lgnbtn=async()=>{
		console.log(fname);
		const regData={
			fname,lname,email,mobile,password,confirmpassword
		}
       const res = await axios.post("http://localhost:3000/api/reg",regData);
       console.log(res.data);
       if(res.status===200){
       	setFname("")
       	setLname("")
       	setEmail("")
       	setMobile("")
       	setPassword("")
       	setConfirmPassword("")
       }
	}
	return (
		<div>
		<Header/>
		<div className=""><img src={music} className="bg-center bg-no-repeat bg-cover relative h-screen w-screen "/>
		<div className="bg-transperent w-4/12 shadow-lg h-auto absolute top-36 left-24 border pb-2"><h1 className=" border-b text-center text-2xl font-md text-white w-full">Registration Here</h1>
		<div className="flex w-full space-x-2">
 
		   <div className="w-6/12">
			   <div className="mt-2"><label className="text-white pl-2">First Name:</label></div>
			   <div className="pl-2"><input type="text" placeholder="first Name" value={fname} onChange={(e)=>setFname(e.target.value)} className="p-1 focus:outline-none border rounded-md w-full "/>
			   </div>

		    </div> 
 
		   <div className=" w-6/12">
			   <div className="mt-2"><label className="text-white pl-1">Last Name:</label></div>
			   <div className="pr-1"><input type="text" placeholder="Last Name" value={lname} onChange={(e)=>setLname(e.target.value)} className="p-1 focus:outline-none border rounded-md w-full  "/>
			   </div>

		    </div>
		</div> 
		 <div className=" w-full">
			   <div className="mt-2"><label className="text-white pl-2">Email:</label></div>
			   <div className="pr-1 pl-2"><input type="Email" placeholder="abc@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} className="p-1 focus:outline-none border rounded-md w-full  "/>
			   </div>
			    <div className=" w-full">
			   <div className="mt-2"><label className="text-white pl-2">Mobile No:</label></div>
			   <div className="pr-1 pl-2"><input type="text" placeholder="xxxxxxx678" value={mobile} onChange={(e)=>setMobile(e.target.value)} className="p-1 focus:outline-none border rounded-md w-full  "/>
			   </div>

		    </div>

		    </div>
		    <div className=" w-full">
			   <div className="mt-2"><label className="text-white pl-2">Password:</label></div>
			   <div className="pr-1 pl-2"><input type="text" placeholder="******" value={password} onChange={(e)=>setPassword(e.target.value)} className="p-1 focus:outline-none border rounded-md w-full "/>
			   </div>

		    </div>

		    <div className=" w-full">
			   <div className="mt-2"><label className="text-white pl-2">Confirm Password:</label></div>
			   <div className="pr-1 pl-2"><input type="Password" placeholder="******" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="p-1 focus:outline-none border rounded-md w-full  "/>
			   </div>

		    </div>
		    <div className="text-center">
		    <button className="w-6/12 px-2 py-2 pr-2 mt-4 pl-2 rounded-md bg-white" onClick={(e)=>lgnbtn()}>Submit</button>
		    </div>

		 	</div>
		
		</div>
		</div>
	)
}
		

		  

		 

		

		
		 

	
