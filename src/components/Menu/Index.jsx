import { useNavigate } from "react-router-dom";
import { menuConfig } from "../../config/menuConfig";
import { useSelector, useDispatch } from "react-redux";
import { updatePath } from "../../store/slices/configSlice";
import './index.css';

function Menu() {
    const navigate = useNavigate()
    const currentPath = useSelector((state) => state.config.path);
    const dispatch = useDispatch()
    const handleNavigate = (path) => {
        // console.log(path, currentPath)
        if (path === currentPath) {
            navigate('/')
            dispatch(updatePath('/'))
            return
        }
        navigate(path)
        dispatch(updatePath(path))
    }

    return <>
        {menuConfig.map(menu => <div
            className="menu"
            key={menu.path}
            onClick={() => handleNavigate(menu.path)}
        >
            <div
                className="menu-icon"
                style={{
                    backgroundImage: `url('${menu.icon}')`
                }}
            ></div>
            <div>{menu.name}</div>
        </div>)}
    </>
}

export default Menu;
