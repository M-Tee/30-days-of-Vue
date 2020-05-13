<template>
    <div class="content">
        <h2>Single File components</h2>
        <p>{{greeting}}</p>
        <p>Html code, styles and logic are all in one file</p>
    </div>
</template>
<script>
    export default{
        name: 'Hello World',
        data(){
            return {
                reversedgreetings: 'dlrow olleH'
            }
        },
        computed: {
            getgreeting(){
                return this.reversedgreetings
                    .split("")
                    .reverse()
                    .join("");
            }
        }
    }

</script>
<style>
.content{
    text-align: center;
    border: 1px solid black;
    box-shadow: 0px 0px 10px; 
}
</style>