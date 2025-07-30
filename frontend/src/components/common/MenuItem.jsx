import { Link } from "react-router-dom";

const MenuItem = ({ icon, label, badge, path, active }) => {
    return (
        <Link to={`${path}`}>
            <div
                className={`flex items-center justify-between p-2 my-2 rounded-lg cursor-pointer ${active ? 'bg-primaryLight font-semibold' : 'hover:bg-gray-100'
                    }`}
            >
                <div className="flex items-center gap-3 text-sm">
                    <div className="text-gray-600">{icon}</div>
                    <span>{label}</span>
                </div>
                {badge && (
                    <span className="bg-primary text-white text-sm px-2 rounded-full">
                        {badge}
                    </span>
                )}
            </div>
        </Link>
    );
};
export default MenuItem;