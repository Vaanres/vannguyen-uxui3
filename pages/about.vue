<template>
  <section class="section-container">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-12">
          <section v-if="about.length">
            <div v-for="(item, index) in about" :key="index" class="row">
              <div class="col-lg-8">
                <div class="mb-4">
                  <h1>{{ item.fields.title }}</h1>
                  <h5 class="font-weight-normal">
                    {{ item.fields.subTitle }}
                  </h5>
                </div>
                <div v-html="renderMD(item.fields.description)"></div>
              </div>
            </div>
            <hr class="my-5" />
          </section>
          <section v-if="works.length">
            <h1 class="mb-5">Experience</h1>
            <div v-for="(item, index) in works" :key="index" class="row mb-5">
              <div class="col-12 col-md-4 mb-3 mb-md-0">
                <div
                  v-if="item.fields.logoPath"
                  class="col-5 col-sm-4 mb-3 p-0"
                >
                  <b-img-lazy
                    fluid-grow
                    :src="item.fields.logoPath"
                    :alt="item.fields.companyName"
                  />
                </div>
                <div class="text-secondary">
                  <small>{{ item.fields.dateRange }}</small>
                </div>
              </div>
              <div class="col-12 col-md-8">
                <h4 class="mb-3">{{ item.fields.title }}</h4>
                <div v-html="renderMD(item.fields.description)"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import marked from 'marked'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  name: 'About',
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        'sys.id': process.env.CTF_ABOUT_ID
      }),
      client.getEntries({
        content_type: process.env.CTF_PORTFOLIO_TYPE_ID,
        order: '-sys.updatedAt'
      })
    ])
      .then(([about, posts]) => {
        return {
          about: about.items,
          works: posts.items
        }
      })
      .catch(console.error)
  },
  methods: {
    renderMD(text) {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
      })

      return marked(text)
    },
    checkData() {
      if (
        this.$store.state.about.works.length &&
        this.$store.state.about.about.length
      ) {
        this.works.push(...this.$store.state.about.works)
        this.about.push(...this.$store.state.about.about)
      } else {
        this.fetchData()
      }
    }
  },
  head() {
    return {
      title: `About ${process.env.site_name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `About ${process.env.site_description}`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
