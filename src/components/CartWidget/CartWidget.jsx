import { CiShoppingCart } from "react-icons/ci";import { div } from "framer-motion/client";

const CardWidget = () => {
    return(
        <div style={{display: 'flex', marginRight: "20px", alignItems:'center', width:'30%', justifyContent:'space-between'}}>
            <CiShoppingCart size={35}/>
            1
        </div>
    )
}

export default CardWidget;