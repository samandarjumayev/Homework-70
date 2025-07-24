import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function Home(){
    let apiKey = '303ab95b9ebf41e783d47cbe4f47f02d';
    const myURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

    const [data, setData] = useState(null);
    const [startPage, setStartPage] = useState(0);
    const [endPage, setEndPage] = useState(8);
    const [loading, setLoading] = useState(false);

    async function getFetch(){
        setLoading(true)
        let response = await fetch(myURL);
        let pos = await response.json();
        setData(pos);
        setLoading(false);
    }

    useEffect(() => {
        getFetch()
    }, []);

    console.log(data?.articles);

    return <div className="flex-1 flex flex-col gap-3">
        {loading ? (
            <p className="text-3xl text-[#109BE9] font-semibold tracking-[4px]">Loading...</p>
        ) : (
            <div className="flex-1 grid grid-cols-4 grid-rows-2 gap-4">
                {data?.articles?.slice(startPage, endPage).map((item, index) => {
                        return <div key={index} className="h-[207px] bg-white border-1 border-gray-500 pb-1 rounded overflow-hidden shadow-md shadow-zinc-400 cursor-pointer transition-all duration-200 hover:duration-150 hover:scale-107">
                            <img src={item.urlToImage} alt="" className="w-[100%] h-[55%] object-cover object-center"/>
                            <div className="h-[45%] p-2 overflow-hidden">
                                <p className="font-semibold">{item.author}</p>
                                <p className="text-[13px]">{item.title}</p>
                            </div>
                            {/* <p>{item.title}</p> */}
                        </div>
                })}
            </div>
        )}
        
        <div className=" flex justify-center items-center gap-1">
            <p onClick={() => {
                setStartPage(0);
                setEndPage(8);
            }} className={'bg-zinc-300 hover:bg-[#109BE9] hover:text-white px-[7px] rounded-[3px] cursor-pointer'}>1</p>

            <p onClick={() => {
                setStartPage(9);
                setEndPage(17)
            }} className={'bg-zinc-300 hover:bg-[#109BE9] hover:text-white px-[7px] rounded-[3px] cursor-pointer'}>2</p>
        </div>
    </div>
}

export default Home;