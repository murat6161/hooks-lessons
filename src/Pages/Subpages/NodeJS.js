import React, {useContext} from 'react'
import { NewContext } from '../../App'

export default function NodeJS() {
    const deger = useContext(NewContext)
    return (
        <div>
            <h2>NodeJS Konulari</h2>
            <p>{deger}</p>
            <p>Node</p>
            <p>..........</p>
            <p>..........</p>
            <p>..........</p>
            <p>..........</p>
            <p>..........</p>
        </div>
    )
}