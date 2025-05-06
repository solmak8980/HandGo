import { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";


export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center text-white mb-6">Đăng Ký</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                    id="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    id="password"
                    label="Mật khẩu"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                      <Input
                    id="ispassword"
                    label="Nhập lại mật khẩu"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button>Đăng ký</Button>
                <p className="text-center text-sm text-white/80 mt-2">
                    Bạn đã có tài khoản?{" "}
                    <Link to="/auth/login" className="text-blue-300 underline">
                        Đăng nhập
                    </Link>
                </p>
            </form>
        </div>
    );
}
