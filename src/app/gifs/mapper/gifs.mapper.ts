import { Gif } from '../interfaces/gif.interface';
import { giphyitem } from './../interfaces/giphy.interfaces';

export class gifMapper{
    static mapGiphytoGif(item:giphyitem):Gif{
        return { 
            id: item.id,
            title:item.title,
            url:item.images.original.url
        }
    }

    static mapGiphystoGifs(items:giphyitem[]):Gif[]{
        return items.map(this.mapGiphytoGif)
    }
}