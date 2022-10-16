import { useFetch } from '@vueuse/core'
import { ref } from 'vue'



const getip = async ()=>{
    const { isFetching, error, data } = await useFetch(`https://api.ipbase.com/v2/info?apikey=F82xTAhXO2wFuaPAsWvzQSSXGZTBuLF8LmZaA9dz&language=en&ip=47.196.24.132`).json()
    return data.value.data.ip
}

const getTime = async() => { 

    let ip = await getip()

    const { isFetching, error, data } = await useFetch(`https://worldtimeapi.org/api/ip/${ip}`).json()

    let time = data.value.datetime
 
    return time
}

const now = await getTime()

export const  showTime = () => {
    
    let time = new Date(now);
    let hour: number|string = time.getHours();
    let min: number|string = time.getMinutes();
    let sec: number|string = time.getSeconds();
    let am_pm: number|string = "AM";
    if (hour > 12) {
      hour -= 12;
      am_pm = "PM";
    }
    if (hour == 0) {
     const hr = 12;
      am_pm = "AM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    return hour + ":" + min + ":" + sec + am_pm;
  }
