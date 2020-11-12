import { useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography'

const formatTime = (time) => {
  return new Date(time).toJSON().slice(11, 19)
}

const Clock = () => {
  const lastUpdate = useSelector((state) => state.timer.lastUpdate)
  const light = useSelector((state) => state.timer.light)
  return (
    <React.Fragment>
       <Typography variant='h2'>Hello World</Typography>
      <div className={light ? 'light' : ''}>
      
        {formatTime(lastUpdate)}
        <style jsx>{`
          div {
            padding: 15px;
            display: inline-block;
            color: #82fa58;
            font: 50px menlo, monaco, monospace;
            background-color: #000;
          }

          .light {
            background-color: #999;
          }
        `}</style>
      </div>
    </React.Fragment>
  )
}

export default Clock
