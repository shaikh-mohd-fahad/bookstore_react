import React from 'react'
// <Cards  key={item.id} item={item}/>;
function Cards({item}) {
    // console.log(prop.id);
  return (
    <>
            <div className="card w-80 flex justify-center bg-base-100 mb-5 shadow-xl">
        <figure>
            <img
            src={item.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
            <div className="badge badge-outline">{item.price}</div>
            <div className="badge badge-outline">Buy Now</div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Cards
