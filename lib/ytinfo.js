const yts = require( 'yt-search' )


async function ytinfo(name) {

         let arama = await yts(name);
        arama = arama.all;
        if(arama.length < 1) { 
        let result = { status : false} 
        return result 
         } 
        else {
        let thumbnail = arama[0].thumbnail;
        let title = arama[0].title.replace(/ /gi, '+');
        let title2 = arama[0].title
        let views = arama[0].views;
        let author = arama[0].author.name;
        let url = arama[0].url
        let result = { songmsg : '*ββββ[ πΈπ» QUEEN DIANA κ±α΄Ι΄Ι’ α΄α΄α΄‘Ι΄* π© ]\n\n*β* πΌ ```Song :-``` ' + title2 + '\n\n*β* π ```Views :-``` ' + views + '\n\n*β* πΉ ```Channel :-``` ' + author + '\n\n*β* ποΈ ```URL :-``` ' + url + '\n\nβββββββββββββββββββββββ' , 
                       vidmsg : '*ββββ[ πΈπ» QUEEN DIANA α΄ Ιͺα΄ α΄α΄α΄‘Ι΄* π© ]\n\n*β* π½οΈ ```Video :-``` ' + title2 + '\n\n*β* π ```Views :-``` ' + views + '\n\n*β* πΉ ```Channel :-``` ' + author + '\n\n*β* ποΈ ```URL :-``` ' + url + '\n\nβββββββββββββββββββββββ' ,
                      thumbnail : thumbnail ,
                     yuturl: url }
        return result
 
        }
}
module.exports = ytinfo ;
