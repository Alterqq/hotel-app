import React from 'react'
import {PieChart, Pie, Cell} from 'recharts';
import smile from '../../assets/img/smile.svg'
import building from '../../assets/img/bulding.svg'
import fire from '../../assets/img/fire.svg'
import './RoomProfileAbout.scss'

const RoomProfileAbout = () => {
  const data01 = [
    {name: 'Group A', value: 140},
    {name: 'Group B', value: 70},
    {name: 'Group C', value: 70},
    {name: 'Group D', value: 0},
  ]
  const COLORS = ['#FFE39C', '#6FCF97', '#BC9CFF', '#909090']
  return (
      <>
        <div className="room-profile__about">
          <div className="room-profile__about_data">
            <h3>Сведения о номере</h3>

            <div className='room-profile__about_item'>
              <img src={smile} alt="comfort"/>
              <div className='room-profile__about_item-info'>
                <h4 className="room-profile__about_subtitle">Комфорт</h4>
                <span>Шумопоглащающие стены</span>
              </div>
            </div>

            <div className='room-profile__about_item'>
              <img src={building} alt="convenience"/>
              <div className='room-profile__about_item-info'>
                <h4 className="room-profile__about_subtitle">Удобство</h4>
                <span>Окно в каждой из спален</span>
              </div>
            </div>

            <div className='room-profile__about_item'>
              <img src={fire} alt="cosiness"/>
              <div className='room-profile__about_item-info'>
                <h4 className="room-profile__about_subtitle">Уют</h4>
                <span>Номер оснащен камином</span>
              </div>
            </div>

          </div>
          <div className="room-profile__about_impressions">
            <h3>Впечатления о номере</h3>
            <div className='room-profile__about_votes'>
              <div className='room-profile__about_votes-number'>
                <span>260</span>
                <span>голосов</span>
              </div>
              <PieChart width={130} height={130}>
                <Pie dataKey="value"
                     isAnimationActive={false}
                     data={data01}
                     cx={60} cy={60}
                     outerRadius={60}
                     innerRadius={55}
                >{data01
                    .map((entry, index) => <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}/>)}
                </Pie>
              </PieChart>
              <div className='room-profile__about_votes-bar'>
                <span>Великолепно</span>
                <span>Хорошо</span>
                <span>Удовлетворительно</span>
                <span>Разочарован</span>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
export default RoomProfileAbout
