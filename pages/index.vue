<template>
  <div>
    <form action="submit">
      <label for="name">Phone:</label><br />
      <input id="name" v-model="phone" type="text" name="name" />
      <br /><br />

      <label for="password">Password:</label><br />
      <input id="password" v-model="password" type="password" name="password" />
      <br /><br />

      <label for="country">Country:</label><br />
      <input id="country" v-model="country" type="text" name="country" />
      <br /><br />

      <input type="submit" value="Try Register" @click="onSubmit" />

      <br /><br />
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      phone: '',
      password: '',
      country: '',
      latlong: 'test-latlong',
      deviceToken: 'test-token',
      deviceType: 2,
      errorMessage: '',
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      this.$axios
        .$post('/api/v1/register', {
          phone: this.phone,
          password: this.password,
          country: this.country,
          latlong: this.latlong,
          device_token: this.deviceToken,
          device_type: this.deviceType,
        })
        .then((response) => console.warn('response register nih:', response))
        .catch((err) => {
          console.warn('err', err)
          this.errorMessage = err.data.error.errors
        })
    },
  },
}
</script>
