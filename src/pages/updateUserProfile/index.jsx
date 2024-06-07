// import React from "react";
// import "./index.css";
// import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
// import { createApiContext } from "../../context/apiContext";
// import InputContainer from "../../components/dashboard/InputContainer";
// import { toast } from "react-toastify";
// import LoadingModal from "../../components/ApiLoader";
// import { useNavigate } from "react-router-dom";
// import { images } from "../../images";
// const UpdateUserprofile = () => {
//   const { getProfileData, updateUserProfile } = React.useContext(createApiContext);

//   const [walletAddress, setWalletAddress] = React.useState("");
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [loading, setLoading] = React.useState(false);
//   const [fetchLoading, setFetchLoading] = React.useState(false)
//   const navigate = useNavigate();

//   //fetch user data
//   React.useEffect(() => {
//     const getUser = async () => {
//       setFetchLoading(true);
//       const data = await getProfileData();
//       if (data.user?.name === null || data.user?.email === null) {
//         toast.info("Please complete your profile");
//       }
//       if (data.success) {
//         setWalletAddress(data?.user?.walletAddress);
//         setName(data?.user?.name);
//         setEmail(data?.user?.email);
//         setFetchLoading(false);
//       }
//     };
//     getUser();
//   }, []);

//   //update profile handler function
//   const updateHandler = async (formData) => {
//     setLoading(true);
//     const data = await updateUserProfile(formData);
//     if (data.success) {
//       toast.success("Profile updated successfully");
//       setLoading(false);
//       navigate("/dashboard");
//     } else if (data.response.data.message) {
//       toast.error(data.response.data.message);
//       setLoading(false);
//     }
//   };

//   //submit handler function
//   const submitHandler = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     updateHandler(formData);
//   };

//   return (
//     <>
//       {loading && <LoadingModal />}
//       <div className="right_dashboard">
//         <div className="right_container">
//           <PageHeader page_title={"Edit Profile"} badge={"GM, Noderr"}
//             profilePic={images.FakePic} />
//           {fetchLoading ? (
//             <div>
//               <LoadingModal />
//             </div>
//           ) : (
//             <form className="update_profile_form" onSubmit={submitHandler}>
//               <InputContainer
//                 label={"wallet addressssssssssssssssss"}
//                 id={"vote_title"}
//                 type={"text"}
//                 name={"address"}
//                 textColor="black"
//                 value={walletAddress}
//                 disable={walletAddress ? true : false}
//                 onChange={(e) => setWalletAddress(e.target.value)}
//               />
//               <InputContainer
//                 label={"Name"}
//                 id={"name"}
//                 type={"text"}
//                 name={"name"}
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <InputContainer
//                 label={"email"}
//                 id={"email"}
//                 type={"text"}
//                 name={"email"}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 className="btn primary"
//                 style={{ backgroundColor: "black", color: "#fff", width: "100%" }}>
//                 Save
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default UpdateUserprofile;

// import React from "react";
// import "./index.css";
// import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
// import { createApiContext } from "../../context/apiContext";
// import InputContainer from "../../components/dashboard/InputContainer";
// import { toast } from "react-toastify";
// import LoadingModal from "../../components/ApiLoader";
// import { useNavigate } from "react-router-dom";
// import { images } from "../../images";
// import { FaCopy } from 'react-icons/fa';

// const UpdateUserProfile = () => {
//   const { getProfileData, updateUserProfile,userData,setUserData } = React.useContext(createApiContext);
// console.log("user data in update profile :",userData)
//   const [walletAddress, setWalletAddress] = React.useState("");
//   const [firstName, setFirstName] = React.useState("");
//   const [lastName, setLastName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [profilePic, setProfilePic] = React.useState(null);
//   const [prevProfilePic, setprevProfilePic] = React.useState(null)
//   const [loading, setLoading] = React.useState(false);
//   const [fetchLoading, setFetchLoading] = React.useState(false);
//   const navigate = useNavigate();

//   const fileInputRef = React.useRef(null);

//   // Fetch user data
//   React.useEffect(() => {
//     const getUser = async () => {
//       setFetchLoading(true);
//       const data = await getProfileData();
//       if (data.user?.firstName === null || data.user?.email === null) {
//         toast.info("Please complete your profile");
//       }
//       if (data.success) {
//         setWalletAddress(data?.user?.walletAddress);
//         setFirstName(data?.user?.firstName);
//         setLastName(data?.user?.lastName);
//         setEmail(data?.user?.email);
//         if (data?.user?.profilePic) {
//           setprevProfilePic(data?.user.profilePic)
//           // setProfilePic(data.user.profilePic);
//         }
//         setFetchLoading(false);
//       } else {
//         setFetchLoading(false);
//         toast.error("Failed to fetch user data");
//       }
//     };
//     getUser();
//   }, [getProfileData]);

//   // Update profile handler function
//   const updateHandler = async (formData) => {
//     setLoading(true);
//     const data = await updateUserProfile(formData);
//     if (data.success) {
//       setUserData(data?.user)
//       console.log("updated user data in update profile data :",data)
//       toast.success("Profile updated successfully");
//       setLoading(false);
//       // navigate("/dashboard");
//     } else if (data.response.data.message) {
//       toast.error(data.response.data.message);
//       setLoading(false);
//     }
//   };

//   // Submit handler function
//   const submitHandler = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("firstName", firstName);
//     formData.append("lastName", lastName);
//     formData.append("email", email);
//     if (profilePic && typeof profilePic !== "string") {
//       formData.append("myFile", profilePic);
//     }
//     // Convert formData to plain JavaScript object
//     const formDataObject = {};
//     formData.forEach((value, key) => {
//       formDataObject[key] = value;
//     });
//     console.log(formDataObject);
//     updateHandler(formData);
//   };

//   // Handle profile picture click
//   const handleProfilePicClick = () => {
//     fileInputRef.current.click();
//   };

//   // Handle file input change
//   const handleFileChange = (e) => {
//     setProfilePic(e.target.files[0]);
//   };

//   // Handle copy wallet address
//   const handleCopyWalletAddress = () => {
//     navigator.clipboard.writeText(walletAddress);
//     toast.info("Wallet address copied to clipboard");
//   };

//   return (
//     <>
//       {loading && <LoadingModal />}
//       <div className="right_dashboard">
//         <div className="right_container">
//           <PageHeader page_title={"Edit Profile"} badge={"GM, Noderr"} profilePic={profilePic && typeof profilePic === "string" ? profilePic : profilePic ? URL.createObjectURL(profilePic) : prevProfilePic ? `${process.env.REACT_APP_NODE_IMG_URL}${prevProfilePic}` : images.FakePic} />
//           {fetchLoading ? (
//             <div>
//               <LoadingModal />
//             </div>
//           ) : (
//             <form className="update_profile_form " onSubmit={submitHandler}>
//               <div className="input-container text-start flex justify-start">
//                 <input
//                   type="file"
//                   id="profilePic"
//                   name="profilePic"
//                   accept="image/*"
//                   ref={fileInputRef}
//                   style={{ display: "none" }}
//                   onChange={handleFileChange}
//                 />
//                 <div className="profile-pic-preview" onClick={handleProfilePicClick} style={{ cursor: "pointer" }}>
//                   <img
//                     src={profilePic && typeof profilePic === "string" ? profilePic : profilePic ? URL.createObjectURL(profilePic) : prevProfilePic ? `${process.env.REACT_APP_NODE_IMG_URL}${prevProfilePic}` : images.FakePic}
//                     alt="Profile Preview"
//                     className="w-24 h-24 rounded-full"
//                   />
//                 </div>
//               </div>

//               <div className="input-container w-full flex  flex-col gap-1">
//                  <label htmlFor="wallet_address" className="">
//                    Wallet Address
//                  </label>
//                  <div className="relative mt-1 rounded-md shadow-sm ">
//                    <input
//                      type="text"
//                      name="walletAddress"
//                      id="wallet_address"
//                      className="block w-full h-[50px] pl-6 pr-12  border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-bold text-black"
//                      value={walletAddress}
//                      disabled={walletAddress ? true : false}
//                      onChange={(e) => setWalletAddress(e.target.value)}
//                    />
//                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer" onClick={handleCopyWalletAddress}>
//                      <FaCopy className="h-5 w-5 text-gray-400" />
//                    </div>
//                  </div>
//                </div>
//               <InputContainer
//                 label={"First Name"}
//                 id={"first_name"}
//                 type={"text"}
//                 name={"firstName"}
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//               <InputContainer
//                 label={"Last Name"}
//                 id={"last_name"}
//                 type={"text"}
//                 name={"lastName"}
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//               <InputContainer
//                 label={"Email"}
//                 id={"email"}
//                 type={"text"}
//                 name={"email"}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 className="btn primary mt-10 mb-6"
//                 style={{ background: 'linear-gradient(90deg, #fda925 0%, rgba(0, 0, 0, 0) 1000%)', color: "#fff", width: "100%" }}>
//                 Save
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default UpdateUserProfile;

// import React from "react";
// import "./index.css";
// import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
// import { createApiContext } from "../../context/apiContext";
// import InputContainer from "../../components/dashboard/InputContainer";
// import { toast } from "react-toastify";
// import LoadingModal from "../../components/ApiLoader";
// import { useNavigate } from "react-router-dom";
// import { images } from "../../images";
// import { FaCopy } from 'react-icons/fa';

// const UpdateUserProfile = () => {
//   const { getProfileData, updateUserProfile, userData, setUserData } = React.useContext(createApiContext);
//   console.log("user data in update profile:", userData);
//   const [walletAddress, setWalletAddress] = React.useState("");
//   const [firstName, setFirstName] = React.useState("");
//   const [lastName, setLastName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [profilePic, setProfilePic] = React.useState(null);
//   const [prevProfilePic, setprevProfilePic] = React.useState(null);
//   const [loading, setLoading] = React.useState(false);
//   const [fetchLoading, setFetchLoading] = React.useState(false);
//   const navigate = useNavigate();

//   const fileInputRef = React.useRef(null);

//   // Fetch user data
//   React.useEffect(() => {
//     const getUser = async () => {
//       setFetchLoading(true);
//       const data = await getProfileData();
//       if (data.user?.firstName === null || data.user?.email === null) {
//         toast.info("Please complete your profile");
//       }
//       if (data.success) {
//         setWalletAddress(data?.user?.walletAddress);
//         setFirstName(data?.user?.firstName);
//         setLastName(data?.user?.lastName);
//         setEmail(data?.user?.email);
//         if (data?.user?.profilePic) {
//           setprevProfilePic(data?.user.profilePic);
//           // setProfilePic(data.user.profilePic);
//         }
//         setFetchLoading(false);
//       } else {
//         setFetchLoading(false);
//         toast.error("Failed to fetch user data");
//       }
//     };
//     getUser();
//   }, [getProfileData]);

//   // Update profile handler function
//   const updateHandler = async (formData) => {
//     setLoading(true);
//     const data = await updateUserProfile(formData);
//     if (data.success) {
//       setUserData(data?.user);
//       console.log("updated user data in update profile data:", data);
//       toast.success("Profile updated successfully");
//       setLoading(false);
//       // navigate("/dashboard");
//     } else if (data.response.data.message) {
//       toast.error(data.response.data.message);
//       setLoading(false);
//     }
//   };

//   // Submit handler function
//   const submitHandler = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("firstName", firstName);
//     formData.append("lastName", lastName);
//     formData.append("email", email);
//     if (profilePic && typeof profilePic !== "string") {
//       formData.append("myFile", profilePic);
//     }
//     // Convert formData to plain JavaScript object
//     const formDataObject = {};
//     formData.forEach((value, key) => {
//       formDataObject[key] = value;
//     });
//     console.log(formDataObject);
//     updateHandler(formData);
//   };

//   // Handle profile picture click
//   const handleProfilePicClick = () => {
//     fileInputRef.current.click();
//   };

//   // Handle file input change
//   const handleFileChange = (e) => {
//     setProfilePic(e.target.files[0]);
//   };

//   // Handle copy wallet address
//   const handleCopyWalletAddress = () => {
//     navigator.clipboard.writeText(walletAddress);
//     toast.info("Wallet address copied to clipboard");
//   };

//   return (
//     <>
//       {loading && <LoadingModal />}
//       <div className="right_dashboard">
//         <div className="right_container">
//           <PageHeader
//             page_title={"Edit Profile"}
//             badge={`GM, ${firstName} ${lastName}`}
//             profilePic={
//               profilePic && typeof profilePic === "string"
//                 ? profilePic
//                 : profilePic
//                 ? URL.createObjectURL(profilePic)
//                 : prevProfilePic
//                 ? `${process.env.REACT_APP_NODE_IMG_URL}${prevProfilePic}`
//                 : images.FakePic
//             }
//           />
//           {fetchLoading ? (
//             <div>
//               <LoadingModal />
//             </div>
//           ) : (
//             <form className="update_profile_form" onSubmit={submitHandler}>
//               <div className="input-container text-start flex justify-start">
//                 <input
//                   type="file"
//                   id="profilePic"
//                   name="profilePic"
//                   accept="image/*"
//                   ref={fileInputRef}
//                   style={{ display: "none" }}
//                   onChange={handleFileChange}
//                 />
//                 <div className="profile-pic-preview" onClick={handleProfilePicClick} style={{ cursor: "pointer" }}>
//                   <img
//                     src={
//                       profilePic && typeof profilePic === "string"
//                         ? profilePic
//                         : profilePic
//                         ? URL.createObjectURL(profilePic)
//                         : prevProfilePic
//                         ? `${process.env.REACT_APP_NODE_IMG_URL}${prevProfilePic}`
//                         : images.FakePic
//                     }
//                     alt="Profile Preview"
//                     className="w-24 h-24 rounded-full"
//                   />
//                 </div>
//               </div>

//               <div className="input-container w-full flex flex-col gap-1">
//                 <label htmlFor="wallet_address" className="">
//                   Wallet Address
//                 </label>
//                 <div className="relative mt-1 rounded-md shadow-sm">
//                   <input
//                     type="text"
//                     name="walletAddress"
//                     id="wallet_address"
//                     className="block w-full h-[50px] pl-6 pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-bold text-black"
//                     value={walletAddress}
//                     disabled={walletAddress ? true : false}
//                     onChange={(e) => setWalletAddress(e.target.value)}
//                   />
//                   <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer" onClick={handleCopyWalletAddress}>
//                     <FaCopy className="h-5 w-5 text-gray-400" />
//                   </div>
//                 </div>
//               </div>
//               <InputContainer
//                 label={"First Name"}
//                 id={"first_name"}
//                 type={"text"}
//                 name={"firstName"}
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//               <InputContainer
//                 label={"Last Name"}
//                 id={"last_name"}
//                 type={"text"}
//                 name={"lastName"}
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//               <InputContainer
//                 label={"Email"}
//                 id={"email"}
//                 type={"text"}
//                 name={"email"}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 className="btn primary mt-10 mb-6"
//                 style={{ background: 'linear-gradient(90deg, #fda925 0%, rgba(0, 0, 0, 0) 1000%)', color: "#fff", width: "100%" }}
//               >
//                 Save
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default UpdateUserProfile;

import React from "react";
import "./index.css";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import { createApiContext } from "../../context/apiContext";
import InputContainer from "../../components/dashboard/InputContainer";
import { toast } from "react-toastify";
import LoadingModal from "../../components/ApiLoader";
import { useNavigate } from "react-router-dom";
import { images } from "../../images";
import { FaCopy, FaEdit } from "react-icons/fa";
import { RiEditFill } from "react-icons/ri";

const UpdateUserProfile = () => {
  const { getProfileData, updateUserProfile, userData, setUserData } =
    React.useContext(createApiContext);
  console.log("user data in update profile:", userData);
  const [walletAddress, setWalletAddress] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [profilePic, setProfilePic] = React.useState(null);
  const [prevProfilePic, setprevProfilePic] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [fetchLoading, setFetchLoading] = React.useState(false);
  const [headerFirstName, setHeaderFirstName] = React.useState("");
  const [headerLastName, setHeaderLastName] = React.useState("");
  const navigate = useNavigate();

  const fileInputRef = React.useRef(null);

  // Fetch user data
  React.useEffect(() => {
    const getUser = async () => {
      setFetchLoading(true);
      const data = await getProfileData();
      if (data.user?.firstName === null || data.user?.email === null) {
        toast.info("Please complete your profile");
      }
      if (data.success) {
        setWalletAddress(data?.user?.walletAddress);
        setFirstName(data?.user?.firstName);
        setLastName(data?.user?.lastName);
        setEmail(data?.user?.email);
        setHeaderFirstName(data?.user?.firstName);
        setHeaderLastName(data?.user?.lastName);
        if (data?.user?.profilePic) {
          setprevProfilePic(data?.user.profilePic);
        }
        setFetchLoading(false);
      } else {
        setFetchLoading(false);
        toast.error("Failed to fetch user data");
      }
    };
    getUser();
  }, [getProfileData]);

  // Update profile handler function
  const updateHandler = async (formData) => {
    setLoading(true);
    const data = await updateUserProfile(formData);
    if (data.success) {
      setUserData(data?.user);
      setHeaderFirstName(data?.user?.firstName);
      setHeaderLastName(data?.user?.lastName);
      console.log("updated user data in update profile data:", data);
      toast.success("Profile updated successfully");
      setLoading(false);
      navigate("/dashboard");
    } else if (data.response.data.message) {
      toast.error(data.response.data.message);
      setLoading(false);
    }
  };

  // Submit handler function
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    if (profilePic && typeof profilePic !== "string") {
      formData.append("myFile", profilePic);
    }
    // Convert formData to plain JavaScript object
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log(formDataObject);
    updateHandler(formData);
  };

  // Handle profile picture click
  const handleProfilePicClick = () => {
    fileInputRef.current.click();
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  // Handle copy wallet address
  const handleCopyWalletAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    toast.info("Wallet address copied to clipboard");
  };

  return (
    <>
      {loading && <LoadingModal />}
      <div className="right_dashboard">
        <div className="right_container">
          <PageHeader
            page_title={"Edit Profile"}
            badge={`GM, ${headerFirstName} ${headerLastName}`}
            profilePic={
              profilePic && typeof profilePic === "string"
                ? profilePic
                : profilePic
                ? URL.createObjectURL(profilePic)
                : prevProfilePic
                ? `${process.env.REACT_APP_NODE_IMG_URL}${prevProfilePic}`
                : images.FakePic
            }
          />
          {fetchLoading ? (
            <div>
              <LoadingModal />
            </div>
          ) : (
            <form className="update_profile_form" onSubmit={submitHandler}>
              {/* <div className="input-container text-start flex justify-start">
                <input
                  type="file"
                  id="profilePic"
                  name="profilePic"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <div className="profile-pic-preview" onClick={handleProfilePicClick} style={{ cursor: "pointer" }}>
                  <img
                    src={
                      profilePic && typeof profilePic === "string"
                        ? profilePic
                        : profilePic
                        ? URL.createObjectURL(profilePic)
                        : prevProfilePic
                        ? `${process.env.REACT_APP_NODE_IMG_URL}${prevProfilePic}`
                        : images.FakePic
                    }
                    alt="Profile Preview"
                    className="w-24 h-24 rounded-full"
                  />
                </div>
              </div> */}

              <div className="input-container text-start flex justify-start">
                <input
                  type="file"
                  id="profilePic"
                  name="profilePic"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <div
                  className="profile-pic-preview"
                  onClick={handleProfilePicClick}
                  style={{ cursor: "pointer", position: "relative" }}
                >
                  <img
                    src={
                      profilePic && typeof profilePic === "string"
                        ? profilePic
                        : profilePic
                        ? URL.createObjectURL(profilePic)
                        : prevProfilePic
                        ? `${process.env.REACT_APP_NODE_IMG_URL}${prevProfilePic}`
                        : images.FakePic
                    }
                    alt="Profile Preview"
                    className="w-24 h-24 rounded-full"
                  />
                  {/* Edit icon */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 1,
                      right: 0,
                      background: "white",
                    }}
                    className="rounded-full flex justify-center p-[4px] "
                  >
                    <FaEdit className="text-yellow-400 w-5" />
                  </div>
                </div>
              </div>

              <div className="input-container w-full flex flex-col gap-1">
                <label htmlFor="wallet_address" className="">
                  Wallet Address
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="walletAddress"
                    id="wallet_address"
                    className="block w-full h-[50px] pl-6 pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-bold text-black"
                    value={walletAddress}
                    disabled={walletAddress ? true : false}
                    onChange={(e) => setWalletAddress(e.target.value)}
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer"
                    onClick={handleCopyWalletAddress}
                  >
                    <FaCopy className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              <InputContainer
                label={"First Name"}
                id={"first_name"}
                type={"text"}
                name={"firstName"}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <InputContainer
                label={"Last Name"}
                id={"last_name"}
                type={"text"}
                name={"lastName"}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <InputContainer
                label={"Email"}
                id={"email"}
                type={"text"}
                name={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="btn primary mt-10 mb-6"
                style={{
                  background:
                    "linear-gradient(90deg, #fda925 0%, rgba(0, 0, 0, 0) 1000%)",
                  color: "#fff",
                  width: "100%",
                }}
              >
                Save
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default UpdateUserProfile;
