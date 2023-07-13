interface MyPromise {
    (): Promise<number>;
  }
 export interface Parallel{
    new (quantity:number): number;
 } 
 export class Parallel implements Parallel {
    constructor(quantity:number) {
        this.quantityP = quantity;
    }
        quantityP:number;
        arrayP:number[]=[];
        async jobs(...args: (MyPromise[])){

            const jobs = [...args]

            return new Promise((resolve)=>{
                for (let i =0; i < this.quantityP; i++){
                    startJob.call(this);
                }
                async function startJob(this:Parallel):Promise<void> {
                    const job = jobs.shift();
                    if (job){
                        job().then((value)=>{
                            this.arrayP.push(value);
                            if(this.arrayP.length === args.length) resolve (this.arrayP);
                            startJob.call(this)
                        });
                    }
                }

            });
        }
}

  