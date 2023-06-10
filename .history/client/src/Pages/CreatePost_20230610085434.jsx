import React from "react";
import { useState } from "react";
import { preview } from "../assets";
import { FormField, Loader } from "../Components";
import { getRandomUser } from "../utiles/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePost = () => {
  const navigate = useNavigate();
  const [dataValue, setvalue] = useState({
    name: "",
    prompt: "",
    photoUrl: "",
  });

  const [image, setimage] = useState(null);
  const [SingleImage, setSingleImage] = useState(null);
  const [loading, setloading] = useState(false);
  const [buttonLoading, setButtonloading] = useState(false);

  const { name, prompt, photoUrl } = dataValue;

  const GenerateImage = async () => {
    try {
      setloading(true);
      setSingleImage(null);
      const { data } = await axios.post(
        "https://ai-imagegen-oss3.onrender.com/api/v1/image",
        {
          prompt,
        }
      );
      if (data?.sucess) {
        setimage(data);
        const randomNumber = Math.floor(
          Math.random() * data?.data?.images?.length
        );
        const randomImage = data?.data?.images?.[randomNumber];
        setSingleImage(randomImage);
        return setvalue({ ...dataValue, photoUrl: randomImage.src });
      } else {
        toast.error("An error occured");
        setloading(false);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setloading(false);
    }
  };

  const GenerateAIimage = () => {
    if (name && prompt) {
      return GenerateImage();
    } else {
      toast.warning("Please fill all fields");
    }
  };

  const ShowCaseImage = async () => {
    if (prompt && photoUrl && name) {
      try {
        setButtonloading(true);
        const { data } = await axios.post("http://localhost:8000/api/v1/post", {
          name,
          prompt,
          photoUrl,
        });
        if (data.sucess) {
          setButtonloading(false);
          toast.success("Succefully shared to the community");
          navigate("/");
        } else {
          toast.error("Server maintenance");
        }
      } catch (error) {
        toast.error(
          error?.response?.data?.error ||
            "prompt already used and you can find it on community"
        );
      } finally {
        setButtonloading(false);
      }
    } else {
      toast.warning("Please fill all the fields");
    }
  };

  const InputValue = (e) =>
    setvalue({ ...dataValue, [e.target.name]: e.target.value });

  const handleSurprisme = () => {
    let randomUser = getRandomUser();
    setvalue({ ...dataValue, prompt: randomUser });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='w-11/12 mx-auto text-slate-100'>
        <h1 className='font-extrabold font-inter text-3xl'>Create</h1>
        <p className='text-gray-300 mt-5 mb-8 sm:mb-14'>
          Create imaginative and visually stunning images through limitless
          creativity of Celestial AI and unveil your artistic mastery to the
          world
        </p>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-6 sm:max-w-[60%] text-black'>
          <FormField
            name='name'
            placeholder='John Doe'
            eventFunction={InputValue}
            value={dataValue.name}
            SupriseMe={false}
            label='Your name'
          />

          <div className='mb-6'>
            <FormField
              name='prompt'
              placeholder='A sleek, futuristic cityscape with neon-lit buildings nestled among the stars'
              eventFunction={InputValue}
              value={dataValue.prompt}
              SupriseMe={true}
              label='Prompt'
              SupriseMeFunc={handleSurprisme}
            />
          </div>
        </form>

        {SingleImage == null ? (
          <div
            className={`flex relative ${
              loading && "bg-gray-400"
            } justify-center rounded-md h-[16rem] items-center w-[16rem] border border-gray-400 bg-gray-100`}>
            {loading && (
              <div className='absolute'>
                <Loader />
              </div>
            )}
            <img src={preview} className='w-[12rem]' alt='' />
          </div>
        ) : (
          <div className='relative flex justify-center w-[16rem] h-[16rem] object-contain overflow-y-hidden'>
            <img src={SingleImage.src} className='w-full rounded-md' alt='' />
          </div>
        )}

        <button
          type='button'
          onClick={GenerateAIimage}
          className='bg-gradient-to-b from-blue-400 hover:from-blue-500 to-blue-600 hover:to-blue-700 px-5 flex justify-center items-center w-full text-base sm:w-[7rem] py-3 text-white rounded-md mt-6 mb-9'>
          {!loading ? "Generate" : "Generating..."}
        </button>

        <p className='text-sm font-inter text-gray-300'>
          Once you have created the image you want, you can share it with others
          in the community
        </p>

        <button
          onClick={ShowCaseImage}
          className='px-5 flex justify-center bg-gradient-to-r from-pink-500 hover:from-pink-600 via-violet-600 hover:via-violet-700 to-violet-600 hover:to-violet-700 items-center w-full sm:w-[14rem] py-3 text-sm text-white rounded-md mt-6'>
          {buttonLoading
            ? "Sharing Please wait...."
            : "Share with the community"}
        </button>
        <ToastContainer />
      </div>
    </>
  );
};

export default CreatePost;
