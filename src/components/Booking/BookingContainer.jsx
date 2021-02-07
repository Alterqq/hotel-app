import React, {useEffect, useState} from 'react'
import {checkFreeRoom, getAdditionallyCount, getDiffDays} from '../../utils'
import Booking from './Booking';

const BookingContainer = ({date, setDate, profile, filter, totalGuests, ...props}) => {
  const days = getDiffDays(date[0].startDate, date[0].endDate)
  const price = profile.filter.price
  const daysPrice = price * days
  const additionallyPrice = getAdditionallyCount(filter.additionally) * 200
  const [viewCalendar, setViewCalendar] = useState(false)
  const [isFree, setIsFree] = useState(true)
  const [isGuests, setIsGuests] = useState(true)
  const [bookingSuccess, setBookingSuccess] = useState(false)

  const startUser = date[0].startDate.getTime()
  const endUser = date[0].endDate.getTime()


  useEffect(() => {
    if (checkFreeRoom(startUser, endUser, profile.filter.dates)) {
      setIsFree(true)
    } else {
      setIsFree(false)
    }
  }, [setIsFree, isFree, startUser, endUser, profile])

  useEffect(() => {
    if (totalGuests > profile.filter.guests || totalGuests === 0) {
      setIsGuests(false)
    } else {
      setIsGuests(true)
    }
  }, [totalGuests, profile, setIsGuests, isGuests])

  const onBooking = () => {
    props.roomBooking({
      number: profile.number,
      dates: {
        startDate: date[0].startDate,
        endDate: date[0].endDate,
      }
    })
    setBookingSuccess(true)
  }
  return (
      <Booking
          profile={profile}
          price={price}
          viewCalendar={viewCalendar}
          setViewCalendar={setViewCalendar}
          date={date}
          setDate={setDate}
          isFree={isFree}
          isGuests={isGuests}
          days={days}
          daysPrice={daysPrice}
          additionallyPrice={additionallyPrice}
          onBooking={onBooking}
          bookingSuccess={bookingSuccess}
      />
  )
}

export default BookingContainer
