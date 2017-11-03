import { Input,Component } from '@angular/core';
import { Tle } from './tle';
import * as html2canvas from "html2canvas"



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
    baserate: string = "0";
    netrate: string = "0";
    show: boolean = false;
    discountRate: boolean = false;
    discount: string = "0";

  onSubmit() {
     this.submitted = true;  
     let myHero =  new Tle("","","",1234567890,"",this.numofdays,this.tleclass,"","","","",12345567788);
     this.baserate = myHero.rate();
     this.show = true;
    }

    getBaseRate(){
      this.show = true;
      console.log("show is:"+this.show);
      return this.baserate;
    }

    getDiscount(){
      return this.discount;
    }

    getNetRate() {
      return this.netrate;
    }

    getWeekly()
    {
      let x = parseInt(this.netrate) / 4;
      return x;
    }

    getBiWeekly()
    {
      let x = parseInt(this.netrate) / 2;
      return x;
    }

    addRate(amount)
    {
      let x = parseInt(amount) + parseInt(this.baserate);
      this.netrate=x+"";
    }
    subtractRate(amount)
    {
      let x = parseInt(this.netrate) - parseInt(amount) ;
      this.netrate=x+"";
    }

    addDiscount()
    {
      let x = + (parseInt(this.baserate)) - (parseInt(this.baserate) * 0.1 )
      this.netrate=x+"";
      this.discountRate=true;
      this.discount = (parseInt(this.baserate) * 0.10 )+"";
    }
    removeDiscount()
    {
      let x = parseInt(this.netrate) + (parseInt(this.baserate) * 0.10 );
      this.netrate=x+"";
      this.discountRate=false;
      this.discount = "0";
    }

    printTleForm(divName)
    {
        var printContents = document.getElementById(divName).innerHTML;
        var popupWin = window.open('', '', 'width=500,height=500');
        popupWin.document.open();
        popupWin.document.write('<html><head><link rel="stylesheet" media="all" type="text/css" href="assets/css/tle-inputs.component.scss"/>><body>' + printContents + '</body></html>');
        popupWin.document.close();
        setTimeout(function(){
          popupWin.focus;
          popupWin.print();
        },2000);
        //popupWin.close();
       
      } 

      pdfDownload(divName) {
        html2canvas(document.getElementById(divName)).then(function(canvas) {
          // Export the canvas to its data URI representation
          var base64image = canvas.toDataURL("image/png");    
          var iframe = "<iframe width='100%' height='100%' src='" + base64image + "'></iframe>"
          var x = window.open();
          x.document.open();
          x.document.write(iframe);
          x.document.close();
      });

      

    }
  }
