 class user{
            name = "";
            price = 0;
        
        constructor(name,price){
            this.name= name;
            this.price = price;
        }
        getname(){
            return this.name;
        
             
        }
    }
        const mobil1 = new user("iphone 15",100000);
        document.getElementById("one").innerText = mobil1.getname();
     
     
     
     
     
     
     
        // console.log(mobil1.getname())
        
        // }
        // showname(){
        //     return this.name;
        // }
        // showage(){
        //     return this.age;
        // }
        // }
        // const objone = new user("vivek",22);
        // console.log(objone.showname());
        // console.log(objone.showage());

       
        // document.getElementById("space").innerText = objone.showname();
