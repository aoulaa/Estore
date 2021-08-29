import React from 'react'
import { ComersBox } from './ComersBox'
import { TopSlider } from './TopSlider'
import { GoodsBox } from './GoodsBox'
import { GoodsSmallBox } from './GoodsSmallBox'
import { CategoryBox } from './CategoryBox'


export function BodyBox() {
    return (
        <div className="has-background-white" style={{ minWidth: '1400px' }}>
            <TopSlider />
            <div className="px-6">
                <div className="columns  is-variable is-5">
                    <div className="column px-0 is-9">
                        <GoodsBox />
                        <GoodsSmallBox />
                        <CategoryBox />
                        {/*   here can be inserted identical boxes */}
                        {/*   here can be inserted dissimilar boxes */}
                    </div>
                    <div className="column is-3">
                        <ComersBox />
                        {/*   here can be inserted dissimilar boxes */}
                    </div>
                </div>
            </div>
        </div>

    )
}
