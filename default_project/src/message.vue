<template>
    <div>
        <h2> {{message}} </h2>
        <app-input :msg= "message" @messageChanged="message = $event"></app-input>
    </div>
</template>

<script>
import input from './input.vue';

export default {
    data(){
        return{
            message: 'This is the message!'
        }
    },
    components:{
        'app-input': input
    }
}
</script>