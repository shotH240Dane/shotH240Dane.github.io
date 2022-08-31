interface Window {
  mozRTCPeerConnection: any;
  webkitRTCPeerConnection: any;
  dataLayer: any;
}

declare module 'moment' {
  import { Dayjs } from 'dayjs'
  namespace moment {
    type Moment = Dayjs
  }
  export = moment
  export as namespace moment
}
