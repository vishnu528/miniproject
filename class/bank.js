class payment{
    user="";
    amount = 0;
    date = new Date();
    dt=this.date.getDay();
    
    
    tid="";

    constructor(user){
        this.user=user;

    }
    givepayment(amt){
        this.amount = amt;
        this.tid="ahdkudkj213";

        return `payment of ${this.amount} made in date:${this.dt  }   for ${this.tid}`;
    }

}
const user1 = new payment("vishnu");
console.log(user1.givepayment(1000))
