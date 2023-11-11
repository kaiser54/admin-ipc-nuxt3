<template>
  <div class="random-avatar" :style="avatarStyle">
    {{ initials }}
  </div>
</template>
  
  <script>
export default {
  data(){
    return{
    }
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    initials() {
      const nameArray = this.name.split(" ");
      const firstName = nameArray[0].charAt(0).toUpperCase();
      const lastName =
        nameArray.length > 1 ? nameArray[nameArray.length - 1].charAt(0).toUpperCase() : '';
      
      const initial = firstName + lastName;
      return initial;
    },
    avatarStyle() {
      const fontColor = this.generateRandomColor();
      const backgroundColor = `rgba(${fontColor.join(",")}, 0.3)`;
      return {
        color: `rgb(${fontColor.join(",")})`,
        backgroundColor,
      };
    },
  },
  methods: {
    generateRandomColor() {
      return [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
      ];
    },
  },
};
</script>
  
  <style scoped>
.random-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.5px;
  border-radius: 50%;
}
</style>
  