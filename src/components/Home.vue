<template>
    <div>
        <b-form>
            <div class="offset-3 col-sm-6">
                <b-form-group
                        label="Enter status:"
                        label-for="statis-message"
                >
                    <b-form-input
                            id="statis-message"
                            type="text"
                            v-model="statusMessage"
                            required
                            placeholder="Enter status message"
                    >
                    </b-form-input>
                </b-form-group>
                <div class="text-center">
                    <b-button type="submit" @click.prevent="saveStatus" variant="primary">Submit</b-button>
                </div>
            </div>
        </b-form>
        <div style="margin-top: 10px;">
            <div class="list-group">
                <transition-group name="list">
                    <div
                            class="list-group-item"
                            v-for="(status) in statuses"
                            :key="status._id"
                    >
                        {{ status.message }}
                    </div>
                </transition-group>
            </div>
        </div>
    </div>
</template>

<script>
import { createWebsocket } from '../lib/websocket'

export default {
  mixins: [],
  data: function () {
    return {
      statuses: [],
      statusMessage: ''
    }
  },
  methods: {
    saveStatus () {
      this.$http.post('/statuses', {
        statusMessage: this.statusMessage
      }).then(() => {
        this.statusMessage = ''
      })
    }
  },
  name: 'Home',
  mounted () {
    let socket = createWebsocket('statuses')

    socket.addEventListener('message', (res) => {
      this.statuses = JSON.parse(res.data)
    })
  }
}
</script>

<style scoped>

</style>
