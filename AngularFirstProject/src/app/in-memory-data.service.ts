import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            //can replace file paths with urls
            { id: 10, name: 'Illidan Stormrage', image: 'https://vignette.wikia.nocookie.net/wowwiki/images/d/d9/Illidan.png/revision/latest/scale-to-width-down/345?cb=20140503134345'}, 
            { id: 11, name: 'Anakin Skywalker', image: 'https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest/scale-to-width-down/500?cb=20130621175844'},
            { id: 12, name: 'Arthas Menethil', image: 'https://upload.wikimedia.org/wikipedia/en/a/af/Arthas_Menethil.png'},
            { id: 13, name: 'Legolas', image: 'https://i.pinimg.com/736x/04/80/29/048029f362c484a2a46b928afbe98837--orlando-bloom-legolas-eye-candy.jpg'},
            { id: 14, name: 'Martin the Warrior', image: 'http://static.tvtropes.org/pmwiki/pub/images/martintrspsm_6598.gif'},
            { id: 15, name: 'Aragorn', image: 'https://static.comicvine.com/uploads/original/3/33572/898731-aragorn_01.jpg'},
            { id: 16, name: 'Batman', image: 'https://pbs.twimg.com/media/DNW05GGU8AAS3a1.jpg' },
            { id: 17, name: 'Wolverine', image: 'https://vignette.wikia.nocookie.net/factpile/images/3/3b/James_Howlett_25.jpg/revision/latest?cb=20160320193328'},
            { id: 18, name: 'Uchiha Sasuke', image: 'https://orig00.deviantart.net/8b66/f/2015/178/0/4/sasuke_uchiha__shippuden__by_laponce_16-d8z0ftr.png'},
            { id: 19, name: 'Uchiha Itachi', image: 'http://vignette1.wikia.nocookie.net/villains/images/a/a4/Itachi_Uchiha_%28Naruto%29.png/revision/latest?cb=20120530222228'},
            { id: 20, name: 'Gimli', image: 'https://vignette.wikia.nocookie.net/edain-mod/images/4/43/Gimli.jpg/revision/latest?cb=20160418154306'}
        ];
        return {heroes};
    }
}