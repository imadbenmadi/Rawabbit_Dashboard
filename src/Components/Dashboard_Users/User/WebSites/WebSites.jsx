import { useOutletContext } from "react-router";
import { IoWarning } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Card from "./Card";
function WebSites() {
    const [user, setUser] = useOutletContext();
    if (!user) return null;
    const userId = user._id;

    if (user.WebSites && Array.isArray(user.WebSites)) {
        if (user.WebSites.length === 0)
            return (
                <div className="pt-4 ">
                    <Link
                        to={`/Users/${userId}`}
                        className="select-none mb-4 w-fit m-auto bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 "
                    >
                        <IoMdArrowRoundBack />
                        <div>Back to user</div>
                    </Link>
                    <div className=" flex text-gray items-center justify-center text-2xl pt-4 gap-2  ">
                        <IoWarning className=" text-2xl" />
                        <div className="text-center text-gray">
                            No WebSites Owned by this user
                        </div>
                    </div>
                </div>
            );
        else {
            return (
                <div className=" pt-4 ">
                    <Link
                        to={`/Users/${userId}`}
                        className="select-none mb-4 w-fit m-auto bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 "
                    >
                        <IoMdArrowRoundBack />
                        <div>Back to user</div>
                    </Link>
                    <div className=" text-2xl pl-4 text-gray underline">
                        Enrolled WebSites
                    </div>
                    {user.WebSites.map((WebSite, index) => (
                        <Card WebSite={WebSite} index={index} />
                    ))}
                </div>
            );
        }
    }
    return (
        <div className=" pt-6 ">
            <Link
                to={`/Users/${userId}`}
                className="select-none mb-4 w-fit m-auto bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 "
            >
                <IoMdArrowRoundBack />
                <div>Back to user</div>
            </Link>
            <div className=" flex justify-center text-2xl text-gray items-center gap-2 pt-4  text-center m-auto">
                <IoWarning className=" text-2xl" />
                <div className="text-center text-gray">
                    No WebSite is Owned by this user
                </div>
            </div>
        </div>
    );
}

export default WebSites;
