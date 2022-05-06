import React, { useState } from 'react'

export default function ProductComponent(props) {

    const [name, setName] = useState(props.name)
    const [quantity, setQuantity] = useState(props.quantity)
    const [productId, setProductId] = useState(props.id)

    const handleIncrment = () => {
        setQuantity(quantity + 1)
    }
    const handleDecrement = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1)
        }
    }

    const styles = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    const formatQuantity = () => quantity === 0 ? 'Zero' : quantity

    const getBadgeClasses = () => {
        let classes = 'badge m-2 bg-'
        classes += (quantity === 0) ? 'warning' : 'primary'
        return classes;
    }

    return (
        <div>
            <h4>{name}</h4>
            <button className="btn btn-success btn-sm m-2" onClick={handleIncrment}>
                +
            </button>
            <span style={styles} className={getBadgeClasses()}>{formatQuantity()}</span>
            <button className="btn btn-success btn-sm m-2" onClick={handleDecrement}>
                -
            </button>
        </div>
    )
}
