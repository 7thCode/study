namespace C {
    class Parson {

        private secret: string = "" ;　// Class自身からしか見えないプロパティ
      
        tell(): string {
          return this.secret;
        }
      
        save(treasure: string) {
          this.secret = treasure;
        }
      }
      
      const me = new Parson();
    
      me.save("***SECRET****");
      
      // console.log(me.secret);
      
      console.log(me.tell());
}