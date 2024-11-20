const app = Vue.createApp({
    data(){
        return{
            counter: 0,
            name: "",
            confirmedName: ""
            
        }
    },
    methods:{
        add(){
            this.counter++;
        },
        reduce(){
            this.counter--;
        },
        addWithParam(number){
            this.counter += number;
        },
        reduceWithParam(number){
            this.counter -= number;
        },
        setName(event, lastname){
            this.name = event.target.value + " " + lastname;
        },
        confirmName(){
            this.confirmedName = this.name;
        },
        /*submitForm(event){
            event.preventDefault();
            alert('Submited!');
        }*/
    },
})
app.mount('#events')

