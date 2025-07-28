import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Space, Avatar } from "antd";
import {
  CaretDownOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Images } from "../../constants/image";
import "./Header..scss";
import { FaArrowRightFromBracket, FaRegUser } from "react-icons/fa6";

const items: MenuProps["items"] = [
  {
    key: "profile",
    label: "Profile",
    icon: <FaRegUser />
  },
  // {
  //   key: "billing",
  //   label: "Billing",
  // },
  {
    key: "settings",
    label: "Settings",
    icon: <SettingOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "logout",
    label: "Logout",
    icon: <FaArrowRightFromBracket />,
    danger: true,
  },
];

export default function Header() {
  const navigate = useNavigate();
  const [username] = useState("Tris Nguyen");

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    switch (key) {
      case "profile":
        navigate("/profile");
        break;
      case "billing":
        navigate("/billing");
        break;
      case "settings":
        navigate("/settings");
        break;
      case "logout":
        // Logic logout
        console.log("Logging out...");
        break;
      default:
        break;
    }
  };

  return (
    <header className="bg-white px-6 py-2 text-black shadow flex items-center justify-between z-50">
      <div className="w-1/4">
        <Link to="/" className="flex items-center">
          <img
            src={Images.Logo}
            alt="Logo"
            className="w-32 md:w-40 h-auto object-contain"
          />
        </Link>
      </div>

      <div className="w-2/4 flex justify-center">
        {/*thêm search bar hoặc nav menu tại đây */}
      </div>

      <div className="w-1/4 flex justify-end">
        <Dropdown
          // dropdownRender={(menu) => (
          //   <div className="custom-dropdown-wrapper">{menu}</div>
          // )}
          menu={{ items, onClick: handleMenuClick }}
          //   trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()} className="cursor-pointer">
            <div className="px-2 py-1 bg-gray-50 border border-gray-100 rounded-full shadow-lg hover:shadow-md transition-shadow duration-200 cursor-pointer">
              <Space size="small">
                <Avatar
                  size="default"
                  src={Images.avatar}
                  alt="avatar"
                />
                <div className="hidden sm:flex flex-col leading-tight">
                  <span className="text-sm font-bold text-gray-600">
                    {username}
                  </span>
                  <span className="text-xs font-bold text-green-600">● Active</span>
                </div>
                <CaretDownOutlined className="text-sm text-gray-300" />
              </Space>
            </div>
          </a>
        </Dropdown>
      </div>
    </header>
  );
}
