<template>
  <section>
    <div class="row">
      <div class="col-lg-8">
        <div class="mb-4">
          <h1>Hello</h1>
          <p>
            You can reach me at
            <a href="mailto:vaanres@gmail.com">vaanres@gmail.com</a> or call me
            <a href="tel:0866485946">0866485946</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
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
