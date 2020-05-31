<template>
  <Layout>
    <h2 class="title text-center">HIRE ME</h2>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-xs-12">
      <b-form 
        name="contact"
        method="post"
        @submit.prevent="handleSubmit"
        action="/Success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
      <input type="hidden" name="name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
        <b-form-group id="input-group-2" label="Name" label-for="form-name">
          <b-form-input
            id="name"
            name="name"
            v-model="form.name"
            required
            placeholder="Enter name"
          />
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Email"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="form.email"
            name="email"
            type="email"
            required
            placeholder="Enter email"
          />
        </b-form-group>

        <b-form-group id="input-group-3" label="Message" label-for="message">
          <b-form-textarea
            id="message"
            name="message"
            v-model="form.message"
            required
            placeholder="Enter message"
          />
        </b-form-group>

        <br>
        <b-button type="submit" variant="primary" class="btn-black">Send Message</b-button>
      </b-form>
      </div>

      <div class="col-1"></div>
      
      <div class="col-lg-5 col-md-5 col-xs-12">
        <div class="mapouter"><div class="gmap_canvas"><iframe width="400" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=sunset%20district&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
      </div>
      

    </div>
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Contact'
    },
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
      }
    },
    methods: {
      encode(data) {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
      },
      handleSubmit(e) {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            'form-name': e.target.getAttribute('name'),
            ...this.form,
          }),
        })
        .then(() => this.$router.push('/Success'))
        .catch(error => alert(error))
      }
    }
  }
</script>

<style scoped lang="scss">
.contact-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
}

#gmap_canvas {
  width: 400px;
  height: 300px;

  @media (max-width: 460px)
  {
    width: 370px;
    height: 250px;
  }
}
</style>
