      
  <template>
    <div>
        <p class="badge bg-primary p-2  text-white" style="font-size:30px;">  <strong class="text-white ">{{nbr}} </strong>  visites</p>
        
    </div>
</template>

<script>
import axios from 'axios';
export default {
   name:'CounterVisiteSection',

   data(){
     return{
       nbr:0,
     }
   },
   methods:{
     async count(){
      await axios.get('https://api.countapi.xyz/hit/mutuelleawoundjo/key' )
        .then((response) =>{
          this.nbr = parseInt(response.data.value) + 3624
      });
     }
   },
   mounted(){
     this.count();
   }
}
</script>
