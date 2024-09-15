import Counter from "../Counter/Counter";

const ItemListContainer = ({greeting}) => {
    return(
    <div 
    style={{
        fontSize:'2rem',
        fontWeight:'bold',
        height:'90vh',
        width:'100vw',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    }}
    >
        {/* {greeting} */}
        <Counter />
    </div>
    );
};

export default ItemListContainer;