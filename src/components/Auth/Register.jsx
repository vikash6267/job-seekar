import React, { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(name, phone, email, role, password)
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        { name, phone, email, role, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  if(isAuthorized){
    return <Navigate to={'/'}/>
  }


//   return (
//     <>
//       <section className="authPage">
//         <div >
//         <img src="/Register.png" alt="Register png" />
//         </div>
//         <div className="container">
//           <div className="header">
            
//             <h3>Create a new account</h3>
//           </div>
//           <form>
//             <div className="inputTag">
//               <label>Register As</label>
//               <div>
//                 <select value={role} onChange={(e) => setRole(e.target.value)}>
//                   <option value="">Select Role</option>
//                   <option value="Employer">Employer</option>
//                   <option value="Job Seeker">Job Seeker</option>
//                 </select>
//                 <FaRegUser />
//               </div>
//             </div>
//             <div className="inputTag">
//               <label>Name</label>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Zeeshan"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <FaPencilAlt />
//               </div>
//             </div>
//             <div className="inputTag">
//               <label>Email Address</label>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="zk@gmail.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <MdOutlineMailOutline />
//               </div>
//             </div>
//             <div className="inputTag">
//               <label>Phone Number</label>
//               <div>
//                 <input
//                   type="number"
//                   placeholder="12345678"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//                 <FaPhoneFlip />
//               </div>
//             </div>
//             <div className="inputTag">
//               <label>Password</label>
//               <div>
//                 <input
//                   type="password"
//                   placeholder="Your Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <RiLock2Fill />
//               </div>
//             </div>
//             <button type="submit" onClick={handleRegister}>
//               Register
//             </button>
//             <Link to={"/login"}>Login Now</Link>
//           </form>
//         </div>
//         <div className="banner">
//           <img src="/register.png" alt="login" />
//         </div>
//       </section>
//     </>
//   );
// };





return (
  <div className="authPage bg-white-100 min-h-screen flex items-center justify-center">
    <div className="container sm:w-2/5 md:w-3/5 lg:w-2/5 xl:w-2/5 bg-white p-8 rounded-lg shadow-lg border-t-4 border-black">
      <div className="header">
        <h3 className="text-2xl font-bold">Create a new account</h3>
      </div>
      <form>
        <div className="inputTag mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Register As</label>
          <div className="flex items-center">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 mr-4 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Role</option>
              <option value="Employer">Employer</option>
              <option value="Job Seeker">Job Seeker</option>
            </select>
            <FaRegUser />
          </div>
        </div>
        <div className="inputTag mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 mr-4 leading-tight focus:outline-none focus:shadow-outline"
            />
            <FaPencilAlt />
          </div>
        </div>
        <div className="inputTag mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="xyz@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 mr-4 leading-tight focus:outline-none focus:shadow-outline"
            />
            <MdOutlineMailOutline />
          </div>
        </div>
        <div className="inputTag mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
          <div className="flex items-center">
            <input
              type="number"
              placeholder="1234567890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 mr-4 leading-tight focus:outline-none focus:shadow-outline"
            />
            <FaPhoneFlip />
          </div>
        </div>
        <div className="inputTag mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <div className="flex items-center">
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 mr-4 leading-tight focus:outline-none focus:shadow-outline"
            />
            <RiLock2Fill />
          </div>
        </div>
        <button
          type="submit"
          onClick={handleRegister}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
        <Link to={"/login"} className="text-gray-700 mt-2 block">
          Login Now
        </Link>
      </form>
    </div>
  </div>
);
};
export default Register;
