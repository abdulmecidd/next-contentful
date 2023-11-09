import { formatDate } from '@/lib/utils'

const DateComponent = ({ dateString, options, ...rest }) => {
  return <time dateTime={dateString} {...rest}></time>
}

export default DateComponent
