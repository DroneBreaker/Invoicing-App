<template>
  <button :type="submit"> {{ title }}</button>
</template>

<script>
export default {
    data() {
        return {
            title: props
        }
    }
}
</script>

<style>
button {
    color: white;
    background: rgb(39, 99, 178);
    padding: 5px;
    width: 96%;
    height: 40px;
    border-radius: 5px;
}
</style>