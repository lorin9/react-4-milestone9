import { FaGoogle, FaGithub, FaFacebook , FaTwitter,  FaInstagram  } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
           <div className="p-4 space-y-4 mb-6">
            <h2 className="text-2xl font-bold">Login With</h2>
            <button className="btn btn-outline w-full">
            <FaGoogle />
            Login With Google
            </button>
            <button className="btn btn-outline w-full">
            <FaGithub />
            Login With GitHub
            </button>
           </div>
           <div className="p-4  mb-6">
            <h2 className="text-2xl font-bold mb-4">Find Us On</h2>
            <a className="p-4 flex items-center text-lg border rounded-t-lg">
            <FaFacebook className="mr-3"/>
             Facebook
            </a>
            <a className="p-4 flex items-center text-lg border-x ">
            <FaTwitter className="mr-3"></FaTwitter>
             Twitter
            </a>
            <a className="p-4 flex items-center text-lg border rounded-b-lg">
            < FaInstagram className="mr-3"  />
             Instagram
            </a>
           </div>
           {/* Q ZONE */} <div className="p-4 space-y-4 mb-6">
            <h2 className="text-2xl font-bold">Q-Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
           </div>
        </div>
    );
};

export default RightSideNav;