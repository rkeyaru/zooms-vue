<script>
import axios from 'axios';
import EditVideo from './EditVideo.vue';
import AddVideo from './AddVideo.vue';

export default {
    components: {
        AddVideo,
        EditVideo
    },
    data() {
        return {
            ZooData: null,
            editzoo: '',
            // a:true,
            btntxt: 'Close',
            btntxt2: 'AddVideo',
            addzoo: '',
            value: null,
            form: {
                video_id: '',
                video_name: '',
            }
        }
    },


    mounted() {
        axios.get('http://localhost:8080/animania/myresource/videos')
            .then(response => (this.ZooData = response.data))
    },
    methods: {
        deletezoo(zoo) {
            axios.post('http://localhost:8080/animania/myresource/deletezoodata', zoo)
            return alert("Deleted")

        }
    }
}
</script>
<template>
    <div class="row m-5">
        <br>
        <div class="col-lg-3">
            <div v-if="addzoo" class=" btn1 round ">
                <button id="addzoo" class="btnbg" @click='addzoo = !addzoo'> {{ btntxt }} </button>
            </div>
            <div v-else="addzoo" class=" btn1 round ">
                <button id="addzoo" class="btnbg" @click='addzoo = !addzoo'> {{ btntxt2 }} </button>
            </div>
            <br />
            <div v-if="addzoo">
                <AddVideo />
            </div>
        </div>
        <div class="container col-lg-6  table-responsive">


            <table class="table border table-light table-striped table-hover" id="mytable1">
                <thead>
                    <tr>
                        <th>Video ID</th>
                        <th>Anime Name</th>
                        <th>Anime Type</th>
                        <th>Season</th>
                        <th>Update</th>
                        <th>Delete</th>
                        <th>View</th>


                    </tr>
                </thead>
                <tbody>

                    <tr v-for="a in ZooData">

                        <td>{{ a.video_id }}</td>
                        <td>{{ a.anime_name }}</td>
                        <td>{{ a.type }}</td>
                        <td>{{ a.season }}</td>




                        <td>
                            <button class="btn1 " @click="editzoo = !editzoo, value = a">Edit</button>

                        </td>
                        <td>
                            <button class="btn1 " @click="deletezoo(a)">Delete</button>

                        </td>

                        <td>
                            <router-link :to="{ name: 'WatchVideo', params: { video: a.video_path } }">
                                Video
                            </router-link>
                        </td>
                    </tr>



                </tbody>
            </table>

        </div>



        <div v-if="editzoo" class="col-lg-3">
            <EditVideo :values="value" />
        </div>
    </div>
</template>

<style>
.round {
    display: flex;
    justify-content: center;
    align-self: right;

    border-radius: 200px;
    border: 2px solid;

    height: 50px;

}

.btnbg {
    margin-top: -0.2rem;
    margin-left: -0.4rem;
    background-color: transparent;
    border-color: transparent;
    width: 100%;
    color: white;
}
</style>
