import React from 'react';

const Card = ({ item }) => {
    return (
        <div className="col-md-4">
            <div className="card my-2">
                <div className="card-header text-center w-100">
                    <img src={item.thumbnailUrl || 'loading...'} alt={item.thumbnailUrl} />
                </div>
                <div className="card-body">
                    <h3 className='card-title'>{item.title.length > 20 ? `${item.title.slice(0, 25)}...` : item.title}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card