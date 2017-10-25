import { Input,Component } from '@angular/core';
import { Tle } from './tle';


@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./tle-inputs.component.scss'],
  templateUrl: './tle-inputs.component.html',
})
export class TleInputsComponent {
    @Input() childname: string;
    @Input() parentname: string;
    @Input() address1: string;
    @Input() address2: string;
    @Input() phone1: number;
    @Input() phone2: number;
    @Input() refferal: string;
    @Input() duration: string;
    @Input() email: string;
    @Input() startdate: string;
    @Input() tleclass: string;
    @Input() gender: string;
    @Input() numofdays: string;
    submitted = false;
    rate: string = "0";
    show: boolean = false;;

  onSubmit() {
     this.submitted = true;  
     console.log(this.childname);
     console.log(this.parentname);
     console.log(this.address1);
     console.log(this.address2);
     console.log(this.phone1);
     console.log(this.phone2);
     console.log(this.refferal);
     console.log(this.duration);
     console.log(this.email);
     console.log(this.startdate);
     console.log(this.tleclass);
     console.log(this.gender);
     console.log(this.numofdays);
     let myHero =  new Tle("","","",1234567890,"",this.numofdays,this.tleclass,"",12345567788);
     console.log("Rate is"+ myHero.rate());
     this.rate = myHero.rate();
     this.show = true;
    }

    getRate(){
      this.show = true;
      console.log("show is:"+this.show);
      return this.rate;
    }

}
