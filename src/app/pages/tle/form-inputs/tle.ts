export class Tle {
    constructor(
    public childName: string,
    public parentName: string,
    public address1: string,
    public phone1: number,
    public refferal: string,
    public duration: string,
    public tleclass:string,
    public dateofbirth:string,
    public starttime: string,
    public endtime: string,
    public address2?: string,
    public phone2?: number,
    
    ){}


    rate()
    {
    
        if(this.tleclass=='infant'  && this.duration=='5')
        {
            return '1100'
        }
        else if(this.tleclass=='infant' && this.duration=='3')
        {
            return 'not allowed'
        }
        else if(this.tleclass=='infant' && this.duration=='2')
        {
            return 'not allowed'
        }
        else
        {
            return "not allowed";
        }
    }
}