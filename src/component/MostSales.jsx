import React from 'react'

export default function MostSales() {
    return (
        <div className='MostSales'>
            <div className='Card-leaderboard '>
                <div className='d-flex justify-content-between'>
                    <p className='leaderboard-text purple-text'>LEADERBOARD</p>
                    <p className='purple-text'>&spades;</p>
                </div>
                <div className='leaderboard-top'>
                    <h3 className='top-title purple-text'>Most Sales</h3>
                    <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
                    <p>Sarah Martins</p>
                    <p className='purple-text'>50,000</p>
                </div>
                <div className='leaderboard-bottum'>
                    <div className='leaderboard-bottum-st d-flex justify-content-between'>
                        <p className='purple-text'>2ND</p>
                        <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
                        <p>Nimi Martins</p>
                        <p className='purple-text'>23,000</p>
                    </div>
                    <div className='leaderboard-bottum-st d-flex justify-content-between'>
                        <p className='purple-text '>3ND</p>
                        <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
                        <p>Nimi Martins</p>
                        <p className='purple-text'>23,000</p>
                    </div>
                    <div className='leaderboard-bottum-st d-flex justify-content-between'>
                        <p className='purple-text '>4ND</p>
                        <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
                        <p>Nimi Martins</p>
                        <p className='purple-text'>23,000</p>
                    </div>
                </div>

            </div>


        </div>
    )
}
