<script>
export default {
  props: {
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    gender: String
  }
}
</script>

<template>
  <li>
    <h5>{{ id.toString() }}</h5>
    <h3>{{ `${firstName} ${lastName}` }}</h3>
    <h4>{{ `${gender}` }}</h4>
    <h4>{{ `${email}` }}</h4>
  </li>
</template>

<style>
li {
  background-color: rgb(66, 67, 88);
  list-style-type: none;
  color: white;
  position: relative;
  font-size: 1.2rem;
  padding: 15px;
  margin-bottom: 15px;
  margin-right: 15px;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
}

li * {
  text-align: left;
  background-color: rgb(66, 67, 88);
}
</style>