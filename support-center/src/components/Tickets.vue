<template>
  <div class="tickets">
    <loading v-if="remoteDataBusy"/>
    <div class="empty" v-else-if="tickets.length===0">你没票</div>
    <section v-else class="tickets-list">
      <div v-for="(ticket, index) in tickets" :key="index" class="ticket-item">
        <span>{{ticket.title}}</span>
        <span class="badge">{{ticket.status}}</span>
        <span class="badge">{{ticket.date | date}}</span>
      </div>
    </section>
  </div>
</template>
<script>
import RemoteData from "../mixins/RemoteData";
export default {
  mixins: [
    RemoteData({
      tickets: "tickets"
    })
  ]
};
</script>