
    let reviews= [
      {
        "id": "1",
        "rating": 4,
        "content": "PlayStation 5",
        "author_id":"201",
        "game_id":"101"
      },
      {
        "id": "2",
        "rating": 5,
        "content": "Xbox Series X",
        "author_id":"202",
        "game_id":"102"
      }
    ];


    let games= [
      {
        "id": "101",
        "title": "The Legend of Example",
        "platform": ["Nintendo Switch", "PlayStation 4"]
      },
      {
        "id": "102",
        "title": "Space Adventure",
        "platform": ["PC", "Xbox One"]
      }
    ];

    let authors=[
      {
        "id": "201",
        "name": "John Doe",
        "verified": true
      },
      {
        "id": "202",
        "name": "Jane Doe",
        "verified": false
      }
    ];
  
  export default{reviews, authors, games};