import Image from "next/image";
import {BsBell, BsBookmark, BsEnvelope, BsTwitter} from 'react-icons/bs'
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import {CredentialResponse, GoogleLogin} from '@react-oauth/google';
import FeedCard from "@/components/FeedCard";
import { RiTwitterXFill } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { verifyusergoogleTokenQuery } from "@/graphql/query/user";
import { graphqlClient } from "@/clients/api";

interface TwitterSidebarButton{
  title: string
  icon: React.ReactNode
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title : 'Home',
    icon : <BiHomeCircle /> 
  },
  {
    title : 'Explore',
    icon : <BiHash />
  },
  {
    title : 'Notifications',
    icon : <BsBell />
  },
  {
    title : 'Messages',
    icon : <BsEnvelope />
  },
  {
    title : 'Bookmarks',
    icon : <BsBookmark />
  },
  {
    title : 'Profile',
    icon : <BiUser />
  },
  {
    title : 'Premium',
    icon : <RiTwitterXFill  />
  },
  {
    title : 'More',
    icon : <CgMoreO />
  },
];

export default function Home() {
  const handleLoginWithGoogle = useCallback(async(cred: CredentialResponse) =>{
    const googleToken = cred.credential
    if(!googleToken) return toast.error('google token not found');

    const {verifyGoogleToken} = await graphqlClient.request(verifyusergoogleTokenQuery, {token: googleToken});
    

    toast.success('Verified Success')
    console.log(verifyGoogleToken)

    if (verifyGoogleToken)
      window.localStorage.setItem("__twitter__token", verifyGoogleToken)


  }, []);
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen pxx-56">
        <div className="col-span-3 pt-1 ml-28">
          <div className="text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-2 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => ( 
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer mt-2"
                  key={item.title}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] font-semibold text-lg py-2 px-4 rounded-full w-full">
              Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] hover-screen overflow-scroll border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 p-5">
          <div className="p-5 bg-slate-700 rounded-lg">
            <h1 className="my-2 text-2xl">New to Twitter?</h1>
            <GoogleLogin onSuccess={handleLoginWithGoogle}/>
          </div>     
        </div>
      </div>
    </div>
  );
};
