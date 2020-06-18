import { observable, action } from 'mobx';
import axios from 'axios';

export class DataStore {


    constructor(rootStore){
      this.rootStore = rootStore;
    }

    @observable tvSeriesList = [];
    @observable filteredtvSeriesList = [];
    @observable title="";
    @observable number="";
    @observable grade="";
    @observable desc="";
    @observable specyficTvSeries=null;
    @observable seriesToFind="";


    @action getTvSeries() {
        axios.get("http://localhost:9000/tvseries")
        .then(res => {
            this.tvSeriesList = res.data;
            //console.log(this.tvSeriesList)

            })
    }


    @action setSeriesToFind=(s)=>{
      this.seriesToFind=s.target.value;
      
     }

    @action findByTitle(){
           
      let regex= new RegExp("^"+this.seriesToFind, "i");

      this.filteredtvSeriesList.replace(this.tvSeriesList.filter((s)=>{
        return regex.test(s.title);
      }))

      console.log(this.filteredtvSeriesList)

      
      
    }

    @action sortByTitle(){
        this.tvSeriesList = this.tvSeriesList.sort((s1, s2) => {
          if(s1.title.toLowerCase() < s2.title.toLowerCase()) return -1; 
          if(s1.title.toLowerCase() > s2.title.toLowerCase()) return 1; 
          return 0;
      });
    }

    @action sortByGrade(){
        this.tvSeriesList = this.tvSeriesList.sort((s1, s2) => {
          if(s1.grade < s2.grade) return 1; 
          if(s1.grade > s2.grade) return -1; 
          return 0;
      });
    }

    @action sortByNumber(){
        this.tvSeriesList = this.tvSeriesList.sort((s1, s2) => {
          if(s1.number < s2.number) return 1; 
          if(s1.number > s2.number) return -1; 
          return 0;
      });
    }

    @action deleteTvSeries(id) {

        axios.delete('http://localhost:9000/tvseries/'+id)
          .then(res =>{
           
            this.getTvSeries();
          });
    }

    @action addTvSeries(){
      axios.post('http://localhost:9000/tvseries', {
        title: this.title,
        number: this.number,
        grade: this.grade,
        desc: this.desc
      })
      .then(res=> {
          this.title="";
          this.number="";
          this.grade="";
          this.desc="";
      });
    }

    @action setTitle=(t)=>{
      this.title=t.target.value;
     }

     @action setNumber=(n)=>{
      this.number=n.target.value;
     }

     @action setGrade=(g)=>{
      this.grade=g.target.value;
     }

     @action setDesc=(d)=>{
      this.desc=d.target.value;
     }

}
