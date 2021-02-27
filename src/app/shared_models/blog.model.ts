export class Blog {
    urlToImage:string;
    author:string;
    title:string;
    url:string;
    day:number;
    month:number;
    year:number;
    publishedAt:any;
    

    constructor(urlToImage:string,author:string,title:string,url:string){
        this.urlToImage = urlToImage,
        this.author = author,
        this.title = title,
        this.url = url,
        this.day = this.Rday,
        this.month = this.Rmonth,
        this.year = this.Ryear,
        this.publishedAt = this.Rday + '/' + this.Rmonth + '/' + this.Ryear
    }

    

    d = new Date();
    Rday = this.d.getDate();
    Rmonth = this.d.getMonth() + 1;
    Ryear = this.d.getFullYear();


}