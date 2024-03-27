import { IoWarning } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Current_Websites_Card from "./Current_Websites_Card";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorPage from "../ErrorPage";
import Search from "./Search";
function Current_Websites() {
    const [Websites, setWebsites] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    const fetch_Websites = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/Websites", {
                withCredentials: true,
                validateStatus: () => true,
            });
            if (response.status == 200) {
                setWebsites(response.data.Websites);
            } else {
                setError(response.data);
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetch_Websites();
    }, []);
    const handleDeleteWebsite = (WebsiteId) => {
        setWebsites((prevWebsites) =>
            prevWebsites.filter((Website) => Website._id !== WebsiteId)
        );
    };
    if (loading)
        return (
            <div className=" w-[100%] h-[200px] flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    if (error) {
        return <ErrorPage />;
    }
    if (!Websites) return null;
    else if (Websites.length === 0)
        return (
            <div className=" flex items-center justify-center gap-4 flex-col">
                <div className="pl-4 text-gray font-semibold  text-2xl w-full">
                    <span className="text-green">Skate</span> Websites :
                </div>
                <div className="flex items-center  text-gray text-2xl gap-2 py-8">
                    <IoWarning className="text-2xl" />
                    <div className="text-center text-gray">
                        No Websites Found
                    </div>
                </div>
                <Link
                    className="select-none bg-green rounded cursor-pointer text-white text-xl
                     flex items-center gap-2 px-3 py-1 w-fit m-auto"
                    to={"/Websites/Add"}
                >
                    <>
                        <FaPlus />
                        <div>Add Website</div>
                    </>
                </Link>
            </div>
        );
    else {
        return (
            <div>
                <div className="flex flex-wrap items-center justify-around my-5">
                    <div className="pl-4 text-gray font-semibold text-2xl">
                        <span className="text-green">Skate</span> Websites :
                    </div>
                    <div className=" flex items-center">
                        <Search setSearch={setSearch} />
                    </div>
                    <Link
                        className="select-none bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1"
                        to={"/Websites/Add"}
                    >
                        <>
                            <FaPlus />
                            <div>Add Website</div>
                        </>
                    </Link>
                </div>
                <div>
                    {!search &&
                        Websites.map((Website, index) => (
                            <Current_Websites_Card
                                item={Website}
                                key={index}
                                onDelete={() => handleDeleteWebsite(Website._id)}
                            />
                        ))}

                    {search &&
                        Websites.filter((Website) =>
                            Website.Title.toLowerCase().includes(
                                search.toLowerCase()
                            )
                        ).map((Website, index) => (
                            <Current_Websites_Card
                                item={Website}
                                key={index}
                                onDelete={() => handleDeleteWebsite(Website._id)}
                            />
                        ))}
                    {search &&
                        Websites.filter((Website) =>
                            Website.Title.toLowerCase().includes(
                                search.toLowerCase()
                            )
                        ).length === 0 && (
                            <div className=" py-2  text-gray text-xl h-[80px] ">
                                <div className="flex justify-center items-center w-full text-center gap-1">
                                    <IoWarning className="text-red-600 text-3xl" />
                                    No Websites match the search query
                                </div>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

export default Current_Websites;
