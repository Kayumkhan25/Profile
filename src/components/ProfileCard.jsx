import React from "react";
import { FaGenderless } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";

function ProfileCard({ user }) {
  return (
    <div className="w-[26rem] m-5 p-1 rounded-md pb-3 border bg-slate-100">
        <div className="bg-gradient-to-tl from-cyan-500 from-40% to-emerald-400  h-32 rounded-t-lg "></div>
        <div className="p-3">
            <img
            src={user.picture.large}
            alt={`${user.name.first}`}
            className="h-40 -mt-20 p-1 bg-white rounded-full hover:scale-105 transition-all duration-200"
            />
            <div className="p-3 flex flex-col gap-2">
                <h2 className="text-3xl flex gap-2">
                        < IoPerson className="text-slate-500"/>
                    {user.name.first} {user.name.last}
                </h2>
                <p className="text-2xl text-slate-600 flex gap-2 items-center"><FaGenderless className="text-3xl text-slate-500"/>{user.gender}</p>
                <p className="text-xl text-slate-600 flex gap-3 items-center">
                    < FaPhoneVolume className="text-slate-500"/>
                    {user.phone}
                </p>
            </div>
        </div>
    </div>
  );
}

export default ProfileCard;
