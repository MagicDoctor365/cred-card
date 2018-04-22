Component({
  properties: {
    iconList: {
      type: Array,
      value: []
    },
    iconSize: {
      type: String,
      value: ''
    }
  },

  data: {
    hiddenModal: true
  },

  methods: {
    listenerClick: function () {
      this.setData({
        hiddenModal: !this.data.hiddenModal
      })
    },

    listenerConfirm: function () {
      this.setData({
        hiddenModal: true
      })
    },

    listenerCancel: function () {
      this.setData({
        hiddenModal: true
      })
    },
  },

  ready: function() {
  }
})
