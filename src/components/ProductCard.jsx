import React from "react";

function ProductCard () {
    return(
        <div className="bg-yellow-400 p-10">
            <div className="bg-blue-400 p-10">
                images
            </div>
            <div className="bg-black p-10 mt-10  flex">
                <div className="bg-pink-400 p-10">
                    Price 
                </div>
                <div className ="bg-blue-200 p-10 ">
                    something 
                </div>
            </div>
            <button className="mt-5 hover:blue-400">
                Add to cart 
            </button>

        </div>
    )
}

export default ProductCard