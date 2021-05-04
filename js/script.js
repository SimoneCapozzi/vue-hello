const app = new Vue ({
  //con el e asterisco andiamo a dire la parte di html con cui andiamo ad interagire
  el: '#app',

  //le variabili le mettiamo dentro data
  data:{
    messaggio: "Quanto è bello Vue e speriamo non faccia scherzi!",
    miaClasse: 'green',
    img: "vue.png",
  },
  //le funzioni le mettiamo dentro methods

  //utilizzo il this.(seleziono la classe) per prendere le variabili dentro data e utilizzarle nella funzione
  methods:{
    changeClass: function(classe){
      this.miaClasse = classe;
    },
    resetClass: function(classe){
      this.miaClasse = classe;
    }
  }
  /* quando utilizzo il this non posso utlizzare il modello arrowfunction, un modello abbreviato è : 
  changeClass(classe){
    this.miaClasse = classe;
  }, */
})
