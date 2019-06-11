import Vue from 'vue'
import _ from 'lodash'

Vue.mixin({
  methods: {
    trim(...selector) {
      if (selector && !_.isNil(selector) && !_.isEmpty(selector)) {
        selector.forEach(item => {
          const element = document.querySelector(`${item}`)
          if (element) {
            element.innerHTML = element.textContent.trim()
          }
        })
      }
    },
    isExisted(object) {
      if (object && !_.isNil(object) && !_.isEmpty(object)) {
        return true
      } else {
        return false
      }
    },
    isMobile() {
      const element = document.querySelector('.is-mobile')
      let isMobile = false
      if (element) {
        const display = window.getComputedStyle(element).display
        if (display === 'block') {
          isMobile = true
        }
      }
      return isMobile
    }
  }
})
