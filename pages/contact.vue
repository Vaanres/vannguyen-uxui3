<template>
  <section class="section-container">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="mb-4">
            <h1 class="title mb-4">Hi!</h1>
            <p class="sub-title mb-4">
              You can always reach me at below
            </p>
            <contact-info />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactInfo from '~/components/public/ContactInfo'
export default {
  name: 'Contact',
  components: { ContactInfo },
  head() {
    return {
      title: `Contact ${process.env.site_name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Contact ${process.env.site_description}`
        }
      ]
    }
  }
}
</script>
