import React, { useState, useEffect } from "react";
import { FormField, Loader, Card } from "../Components";
import axios from "axios";

const Home = () => {
  const [server, setserver] = useState(null);
  const [loading, setloading] = useState(false);
  const [search, setsearch] = useState("");

  let handleevent = (e) => setsearch(e.target.value);

  const FetchData = async () => {
    setloading(true);
    try {
      const { data } = await axios.get(
        "https://ai-imagegen-oss3.onrender.com/api/v1/getdata"
      );
      if (data?.sucess) {
        return setserver(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  const getResult = server?.data?.filter(
    (e) =>
      e?.name.toLowerCase().includes(search.toLowerCase()) ||
      e?.prompt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className='md:w-11/12 md:mx-auto'>
        <h1 className='font-extrabold  text-white md:text-start text-center md:text-5xl text-2xl '>
          <span className='bg-gradient-to-r from-pink-300 via-rose-300 to-blue-500 text-transparent bg-clip-text font-extrabold'>
            The Community Showcase
          </span>
        </h1>
        <p className='md:my-10 my-5 sm:mb-12 md:mr-32 text-gray-400 md:text-start text-center md:text-base text-sm'>
          Unleash your imagination and explore a visually stunning universe
          where boundaries cease to exist. Immerse yourself in an extraordinary
          collection of imaginatively curated and visually mesmerizing images,
          crafted by the limitless creativity of Celestial AI
        </p>

        <div className='w-full mb-12'>
          <FormField
            name='Search Posts'
            placeholder='Search Posts'
            eventFunction={handleevent}
            required={true}
            value={search}
            SupriseMe={false}
          />
        </div>

        {search && (
          <div className=' text-left mb-7'>
            <h3 className='text-gray-400 text-xl'>
              Showing results for
              <span className='text-gray-200'> {search}</span>
            </h3>
          </div>
        )}

        {loading ? (
          <div className='flex justify-center '>
            <Loader />
          </div>
        ) : (
          <div className='grid sm:grid-cols-4 gap-3 '>
            {getResult?.map((e) => (
              <Card key={getResult?.id} {...e} />
            ))}
          </div>
        )}

        {getResult?.length == 0 && (
          <div className=' font-inter font-bold text-left text-indigo-600 text-xl'>
            NO SEARCH RESULT FOUND
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
