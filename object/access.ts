namespace C {

    class Parson {

       secret: string = "" ;　// Class自身からしか見えないプロパティ
      
        public tell(): string {
          return this.secret;
        }
      
        public save(treasure: string) {
          this.secret = treasure;
        }
      }
      
      const me = new Parson();
    
      me.save("***SECRET****");
      
    // console.log(me.secret);
      
      console.log(me.tell());
}