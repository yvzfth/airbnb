import React from "react";

function Footer() {
  return (
    <div className="flex justify-center bg-gray-100 ">
      <div className="grid grid-cols-1 md:grid-cols-4   py-14 px-32 text-gray-600 gap-y-10">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold px-4">Support</h5>
          <p className="hover:underline cursor-pointer px-4">Help Center</p>
          <p className="hover:underline cursor-pointer px-4">
            Safety information
          </p>
          <p className="hover:underline cursor-pointer px-4">
            Cancellation options
          </p>
          <p className="hover:underline cursor-pointer px-4">
            Supporting people with disabilities
          </p>
          <p className="hover:underline cursor-pointer px-4">
            Report a neighborhood concern
          </p>
        </div>
        <hr className=" border-red-400 md:hidden" />
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold px-4">Community</h5>
          <p className="hover:underline cursor-pointer px-4">
            Airbnb.org: disaster relief housing
          </p>
          <p className="hover:underline cursor-pointer px-4">
            Support Afghan refugees
          </p>
          <p className="hover:underline cursor-pointer px-4">
            Combating discrimination
          </p>
        </div>
        <hr className=" border-red-400 md:hidden" />
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold px-4">Hosting</h5>
          <p className="hover:underline cursor-pointer px-4">Try hosting</p>
          <p className="hover:underline cursor-pointer px-4">
            AirCover: protection for Hosts
          </p>
          <p className="hover:underline cursor-pointer px-4">
            Explore hosting resources
          </p>
          <p className="hover:underline cursor-pointer px-4">
            Visit our community forum
          </p>
          <p className="hover:underline cursor-pointer px-4">
            How to host responsibly
          </p>
        </div>
        <hr className=" border-red-400 md:hidden" />
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold px-4">About</h5>
          <p className="hover:underline cursor-pointer px-4">
            How Airbnb works
          </p>
          <p className="hover:underline cursor-pointer px-4">Newsroom</p>
          <p className="hover:underline cursor-pointer px-4">Investors</p>
          <p className="hover:underline cursor-pointer px-4">Airbnb Plus</p>
          <p className="hover:underline cursor-pointer px-4">Airbnb Luxe</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
