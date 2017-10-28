import { Input,Component } from '@angular/core';
import { Tle } from './tle';


@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./tle-inputs.component.scss'],
  templateUrl: './tle-inputs.component.html',
})
export class TleInputsComponent {
    @Input() childname: string ='Jane Dow';
    @Input() parentname: string = 'Mummy Doe';
    @Input() address1: string = '4508 Bragdon Way, Glen Allen Va, 23059';
    @Input() address2: string = 'dskjksd';
    @Input() phone1: number =3095310993;
    @Input() phone2: number;
    @Input() refferal: string = "yes";
    @Input() duration: string = "1 year";
    @Input() email: string = "amit.mawkin@gmail.com";
    @Input() startdate: string ="11/1/2017";
    @Input() tleclass: string = "infant";
    @Input() gender: string = "Female";
    @Input() numofdays: string = "5";
    @Input() dateofbirth: string = "01/01/2017";
    @Input() starttime: string = "0630";
    @Input() endtime: string = "1830";
    submitted = false;
    rate: string = "0";
    show: boolean = false;;

  onSubmit() {
     this.submitted = true;  
     let myHero =  new Tle("","","",1234567890,"",this.numofdays,this.tleclass,"","","","",12345567788);
     console.log("Rate is"+ myHero.rate());
     this.rate = myHero.rate();
     this.show = true;
    }

    getRate(){
      this.show = true;
      console.log("show is:"+this.show);
      return this.rate;
    }

    printTleForm(divName)
    {
        var printContents = document.getElementById(divName).innerHTML;
        var popupWin = window.open('', 'new div', 'width=300,height=300');
        popupWin.document.write('<html><head><link rel="stylesheet" media="all" type="text/css" href="css/tle-inputs.component.scss"/></head><body>' + printContents + '</body></html>');
        popupWin.document.close();
        popupWin.document.focus();
        setTimeout(function(){
          popupWin.print();
        },5000);
        popupWin.close();
       
      } 
    }
