import React from 'react'
import {PieChart, Pie, Cell} from 'recharts'
import smile from '../../assets/img/smile.svg'
import building from '../../assets/img/bulding.svg'
import fire from '../../assets/img/fire.svg'
import AboutItem from './AboutItem/AboutItem'
import {getAllVotes, getPropString} from '../../utils'
import './RoomProfileAbout.scss'

const RoomProfileAbout = ({profile}) => {
  const votes = [
    {name: 'Великолепно', value: profile.votes[0]},
    {name: 'Хорошо', value: profile.votes[1]},
    {name: 'Удовлетворительно', value: profile.votes[2]},
    {name: 'Разочарован', value: profile.votes[3]},
  ]
  const COLORS = ['#FFE39C', '#6FCF97', '#BC9CFF', '#909090']
  const allVotes = getAllVotes(profile.votes)
  return (
      <>
        <div className='room-profile__about'>
          <div className='room-profile__about_data'>
            <h3>Сведения о номере</h3>
            {profile.comfort && <AboutItem image={smile} title='Комфорт' content={profile.comfort}/>}
            {profile.convenience && <AboutItem image={building} title='Удобство' content={profile.convenience}/>}
            {profile.cosiness && <AboutItem image={fire} title='Уют' content={profile.cosiness}/>}
          </div>
          <div className='room-profile__about_impressions'>
            <h3>Впечатления о номере</h3>
            <div className='room-profile__about_votes'>
              <div className='room-profile__about_votes-number'>
                <span>{allVotes}</span>
                <span>{getPropString(allVotes, 'голос', 'голоса', 'голосов')}</span>
              </div>
              <PieChart width={130} height={130}>
                <Pie dataKey='value'
                     isAnimationActive={false}
                     data={votes}
                     cx={60} cy={60}
                     outerRadius={60}
                     innerRadius={55}
                >{votes
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
