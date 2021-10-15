function Header() {
  let dateObj = new Date();
  let month = dateObj.getMonth(); //months from 0-11
  let day = dateObj.getDate();  
  let weekday = dateObj.getDay();
  //var year = dateObj.getFullYear();

  const months = [
      'Jan',
      'Feb',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'Sept',
      'Oct',
      'Nov',
      'Dec'
    ]

    const weekdays = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ]


  let cMonth = months[month]
  let cWeekday = weekdays[weekday];
    
  let newdate = cWeekday + ", " + cMonth + " " + day;

  return (
    <div>
      <h2>HQ - Health Quotient</h2>
      <p className="current-day">{newdate}</p>
    </div>
  )
}

export default Header
