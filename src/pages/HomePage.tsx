import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="">
            <h1>Trang chủ</h1>
            <Link to="/about" className="text-blue-500 underline">Giới thiệu</Link>
        </div>
    )
}