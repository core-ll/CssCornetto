class CssCornetto {
    configdata;
    constructor() { }
    config(obj) {
        this.configdat = obj;
        return this;
    }
    loadStyle(url) {
        const link = document.createElement('link')
        link.type = 'text/css'
        link.rel = 'stylesheet'
        link.href = url
        const head = document.getElementsByTagName('head')[0]
        head.appendChild(link)
    }
    Cornettolode() {
        try {
            const el = document.getElementById(this.configdat.el);
            console.log(this.configdat.el)
            console.log(el)
            this.configdat.container.map(item=>{
                this.loadStyle('./style/'+item.name+'.css'); 
                el.insertAdjacentHTML('beforeend',this.Csselment(item.name));
            })
        } catch (err) {
            console.log(err)
        }
    }
    Csselment(name) {
        let talbedata=[
            {
                name: 'littleblack',
                elhtml: `
             <div class="card">
             <div class="eye">
                 <div></div>
                 <div></div>
             </div>
             <div class="mouth">
     
             </div>
             <div class="hand">
     
             </div>
         </div>`
            }
        ];
        let Cssdata='';
        talbedata.map(itme=>{
            if(itme.name==name){
                Cssdata=itme.elhtml;
            }
        })
        return Cssdata;
    }
}

