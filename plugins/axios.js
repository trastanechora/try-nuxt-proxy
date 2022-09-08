export default function ({ $axios, app, store }) {
  $axios.onError((error) => {
    throw error.response
  })
}
