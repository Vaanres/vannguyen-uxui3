<template>
  <section class="about section-container">
    <div v-show="show" class="container">
      <div class="row">
        <div class="col-12">
          <section v-if="about.length" class="about-container">
            <div v-for="(item, index) in about" :key="index" class="row">
              <div class="col-lg-8">
                <div class="mb-4">
                  <p class="tagline tagline--primary">
                    {{ item.fields.subTitle }}
                  </p>
                  <h1 class="title mb-4">{{ item.fields.title }}</h1>
                </div>
                <div
                  class="sub-title subTitle"
                  v-html="renderMD(item.fields.description)"
                ></div>
              </div>
            </div>
            <hr class="my-5 section-line" />
          </section>

          <section v-if="works.length" class="work-container">
            <transition name="slide-up">
              <div v-if="showExperience">
                <h1 class="mb-5 pb-lg-5">Experience</h1>
                <div
                  v-for="(item, index) in works"
                  :key="index"
                  class="row mb-5"
                >
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
              </div>
            </transition>
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
  data() {
    return {
      show: true,
      showExperience: true
    }
  },
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
  mounted() {
    // this.charmingText('.about .tagline', '.about .title')
    // this.animateText()
  },
  methods: {
    animateText() {
      const _this = this
      const headerTimeline = this.$anime.timeline()

      headerTimeline
        .add({
          targets: '.about .tagline span',
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: 'cubicBezier(.475,.425,0,.995)',
          duration: 400,
          autoplay: false,
          delay: _this.$anime.stagger(30, { start: 250 }),
          complete: function() {
            setTimeout(() => {
              if (
                _this.isExisted(document.querySelector('.tagline')) &&
                _this.isExisted(_this.tagline)
              ) {
                document.querySelector('.tagline').innerHTML = _this.tagline
              }
            }, 1000)
          }
        })
        .add(
          {
            targets: '.about .title span',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'cubicBezier(.475,.425,0,.995)',
            duration: 800,
            autoplay: false,
            delay: _this.$anime.stagger(30, { start: 500 }),
            complete: function() {
              setTimeout(() => {
                if (
                  _this.isExisted(document.querySelector('.title')) &&
                  _this.isExisted(_this.title)
                ) {
                  document.querySelector('.title').innerHTML = _this.title
                }
              }, 1000)
            }
          },
          '-=600'
        )
        .add(
          {
            targets: '.subTitle',
            translateY: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'cubicBezier(.475,.425,0,.995)',
            duration: 800,
            autoplay: false,
            complete: function() {
              setTimeout(() => {
                if (
                  _this.isExisted(document.querySelector('.subTitle')) &&
                  _this.isExisted(_this.subTitle)
                ) {
                  document.querySelector('.subTitle').innerHTML = _this.subTitle
                }
              }, 1000)
            }
          },
          '-=600'
        )
        .add(
          {
            targets: '.section-line',
            translateY: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'cubicBezier(.475,.425,0,.995)',
            duration: 800,
            autoplay: false,
            complete: function() {
              _this.showExperience = true
            }
          },
          '-=600'
        )

      headerTimeline.pause()
      this.show = true
      headerTimeline.play()
    },
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
