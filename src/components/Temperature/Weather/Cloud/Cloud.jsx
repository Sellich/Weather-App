import sunny from "../../../../common/icon/sunny.png"
import cloudy from "../../../../common/icon/cloudy.png"
import veryCloudy from "../../../../common/icon/cloudy-day.png"
import rain from "../../../../common/icon/rain.png"
import storm from "../../../../common/icon/storm.png"
import c from "./Cloud.module.scss"

const Cloud = (props) => {

   const getCloud = () => {
      if (props.cloud <= 20) {
         return sunny
      }
      else if (20 < props.cloud <= 40) {
         return cloudy
      }
      else if (40 < props.cloud <= 60) {
         return veryCloudy
      }
      else if (60 < props.cloud <= 80) {
         return rain
      }
      else if (80 < props.cloud <= 100) {
         return storm
      }
   }
   return (
      <div>
         <img src={getCloud()} alt="cloud" className={c.img} />
      </div>
   )
}

export default Cloud