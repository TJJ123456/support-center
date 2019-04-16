<template>
  <div class="tickets">
    <loading v-if="remoteDataBusy"/>
    <div class="empty" v-else-if="tickets.length===0">你没票</div>
    <section v-else class="tickets-list">
      <div v-for="(ticket, index) in tickets" :key="index" class="ticket-item">
        <a @click="id=ticket._id">{{ticket.title}}</a>
        <span class="badge">{{ticket.status}}</span>
        <span class="badge">{{ticket.date | date}}</span>
      </div>
    </section>
    <Ticket v-if="id" :id="id"/>
  </div>
</template>
<script>
import RemoteData from "../mixins/RemoteData";
import Ticket from "./ticket";
export default {
  mixins: [
    RemoteData({
      tickets: "tickets"
    })
  ],
  components: {
    Ticket
  },
  data() {
    return {
      id: null
    };
  }
};
</script>