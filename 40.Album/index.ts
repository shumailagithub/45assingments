// Q No 40:
// Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
//Use the function to make three dictionaries representing different albums. 
//Print each return value to show that Objects are storing the album information correctly. 
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.
//----------------------------------------------------------------------------------------------------------------


function make_album(artist:string, title:string,tracks? : number){

    let album:{artist:string, title:string,tracks? : number} = {
        artist: artist,
        title: title

    }
    if (tracks !== undefined) {
        album.tracks = tracks
    }
    return album
}


const album1 = make_album("artist 1", "Album Title 1");
console.log(album1);

const album2 = make_album("artist 2", "Album Title 2");
console.log(album2);

const album3 = make_album("artist 3", "Album Title 3", 12);
console.log(album3);
























// function make_album(artist:string, lbum_title:string, tracks? :number){
    
//     const album :{artist:string, lbum_title? :string} = {

//         artist : artist,
//         lbum_title : lbum_title
//     }
//      if (tracks !== undefined) {
//         album
//      }
//     return album
// }







// function make_album(artist: string, title: string, tracks?: number) {
//     let album = { artist, title };
//     if (tracks) {
//         album['tracks'] = tracks;
//     }
//     return album;
// }

// console.log(make_album("Artist One", "The First Album"));
// console.log(make_album("Artist Two", "The Second Album"));
// console.log(make_album("Artist Three", "The Third Album", 12));